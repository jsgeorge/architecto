const Property = require("../models/property");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const property = new Property(req.body);
  console.log(property);
  property.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      property: doc,
    });
  });
});

router.get("/id", (req, res) => {
  console.log("/properties/id", req.query.id);
  Property.find({ _id: req.query.id }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(doc);
  });
});
router.get("/", (req, res) => {
  console.log("/properties");
  Property.find({})
    .sort([["name", "asc"]])
    .exec((err, properties) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(properties);
    });
});
router.get("/name", (req, res) => {
  let id = req.query.id;
  // console.log("/properties/name ", req.query.id);
  Property.find({ _id: id }, (err, property) => {
    if (err) return res.status(400).send(err);
    //console.log(property);
    res.status(200).send(property);
  });
});

router.post("/update", (req, res) => {
  console.log(req.query.id, req.body);
  Property.findOneAndUpdate(
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
router.delete("/", (req, res) => {
  console.log(req.query.id);
  Property.deleteOne({ _id: req.query.id }, (err, doc) => {
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

module.exports = router;
