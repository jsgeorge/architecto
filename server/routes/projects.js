const Project = require("../models/project");
const Category = require("../models/category");
const router = require("express").Router();
const mongoose = require("mongoose");
const formidable = require("express-formidable");
//const { auth } = require("../middleware/auth");
const cloudinary = require("cloudinary");

router.post("/add", (req, res) => {
  // console.log(req.body);
  //console.log(req.body.author._id);
  let newProject = {
    name: req.body.name,
    location: req.body.location,
    category: req.body.category,
    property: req.body.property,
    city: req.body.city,
    state: req.body.state,
    area: req.body.area,
    cost: req.body.cost,
    headline: req.body.headline,
    description: req.body.description,
    images: req.body.images,
    featured: false,
  };
  // newProject = req.body;
  console.log(newProject);
  const project = new Project(newProject);
  project.save((err, doc) => {
    if (err) {
      console.log(err);
      return res.json({ addSuccess: false, errmsg: err });
    }

    res.status(200).json({
      addSuccess: true,
      article: doc,
    });
  });
});

router.get("/", (req, res) => {
  Project.find({}, (err, Projects) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(Projects);
  });
});

router.post("/view", (req, res) => {
  console.log("/projects/view");
  let findArgs = {};
  if (req.body.filters) {
    if (req.body.filters[0].category) {
      let id = req.body.filters[0].category;
      findArgs = { property: mongoose.Types.ObjectId(id) };
    } else if (req.body.filters[0].name)
      findArgs = { name: { $regex: "/*" + req.body.filters[0].name + "/*" } };
    else findArgs = req.body.filters[0];
  }
  console.log("findArgs", findArgs);
  let order = "desc";
  let sortBy = "createdAt";
  let limit = req.body.limit;
  if (!req.body.limit) limit = 5000;
  Project.find(findArgs)
    .sort([["createdAt", "desc"]])
    .limit(limit)
    .exec((err, articles) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        size: articles.length,
        articles,
      });
    });
});

router.get("/articles", (req, res) => {
  console.log("/Projects/articles");
  let order = "desc";
  let sortBy = "createdAt";

  //   Project.find()
  //     .stream()
  //     .on("data", function (doc) {
  //       if (doc.category && !doc.tag) {
  //         console.log("categoryid", doc.category);
  //         let ctgryname;
  //         Category.find({ _id: doc.category }, (err2, ctgry) => {
  //           if (ctgry.length > 0) {
  //             ctgryname = ctgry[0].name;
  //             console.log("category", ctgryname);
  //             console.log("save category name to tag");
  //             //SaveCategoryToTag(doc._id, ctgryname)
  //           }
  //         });
  //       } else if (doc.tag) {
  //         console.log(doc.tag, doc.text);
  //         //     console.log('tag ',doc.tag)
  //       }
  //     })
  //     .on("error", function (err) {
  //       console.log("error");
  //     })
  //     .on("end", function () {
  //       //final callback
  //       console.log("end");
  //     });
  // each(function(err, item){
  // console.log(item.category)
  //})

  Project.find()
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, articles) => {
      if (err) return res.status(400).send(err);
      res.send(articles);
    });
});

router.get("/article", (req, res) => {
  //console.log("get/projects/article", req.query.id);

  let id = req.query.id;

  //Project.find({ _id: { $in: items } })
  Project.find({ _id: id })
    //Product.find({ _id: items })
    .populate("category")
    .exec((err, docs) => {
      if (err) console.log(err);
      return res.status(200).send(docs);
    });
});

router.post("/update", (req, res) => {
  console.log("/projects/update");
  console.log("id", req.query.id);
  console.log(req.body);
  Project.findOneAndUpdate(
    { _id: req.query.id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.json({ editSuccess: false, errmsg: err });
      }
      if (!doc) {
        console.log("Error document not found");
        return res.json({ editSuccess: false });
      }
      if (doc) {
        console.log("found doc");
        console.log(doc);
        console.log("project updated successfully");
        res.status(200).json({
          editSuccess: true,
        });
      }
    }
  );
});
router.post("/feature", (req, res) => {
  console.log("pojects/feature id", req.query.id);
  console.log(req.body);
  Project.findOneAndUpdate(
    { _id: req.query.id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.json({ editSuccess: false, errmsg: err });
      }
      res.status(200).json({
        editSuccess: true,
      });
    }
  );
});
router.delete("/", (req, res) => {
  console.log(req.query.id);
  Project.deleteOne({ _id: req.query.id }, (err, doc) => {
    if (err) {
      console.log(err);
      return res.json({ editSuccess: false, err });
    }
    res.status(200).json({
      doc,
      editSuccess: true,
    });
  });
});

router.post("/uploadimage", formidable(), (req, res) => {
  cloudinary.uploader.upload(
    req.files.file.path,
    (result) => {
      console.log(result);
      console.log("url", result.url);
      res.status(200).send({
        public_id: result.public_id,
        url: result.url,
      });
    },
    {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    }
  );
});
module.exports = router;
