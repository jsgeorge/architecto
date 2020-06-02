const Category = require("../models/category");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const category = new Category(req.body);
  console.log(category);
  category.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      category: doc,
    });
  });
});

router.get("/", (req, res) => {
  console.log("/categories");
  Category.find({})
    .sort([["name", "asc"]])
    .exec((err, categories) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(categories);
    });
});

router.get("/name", (req, res) => {
  let id = req.query.id;
  //console.log("/categories/name ", req.query.id);
  Category.find({ _id: id }, (err, category) => {
    if (err) return res.status(400).send(err);

    res.status(200).send(category);
  });
});

router.post("/update", (req, res) => {
  console.log(req.query.id, req.body);
  Category.findOneAndUpdate(
    { _id: req.query.id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.json({ editSuccess: false, err });
      }
      if (!doc) {
        console.log("Error document not found");
        return res.json({ editSuccess: false });
      }
      if (doc) {
        console.log(doc);
        res.status(200).json({
          doc,
          editSuccess: true,
        });
      }
    }
  );
});

module.exports = router;
