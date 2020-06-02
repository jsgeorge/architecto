const User = require("../models/user");
const router = require("express").Router();
const mongoose = require("mongoose");
const formidable = require("express-formidable");
//const { auth } = require("../middleware/auth");
const cloudinary = require("cloudinary");

router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

router.get("/id", (req, res) => {
  // console.log("get user query by id");
  const uid = req.query.id; //"5e87a4aeec5ce0255c8c4b98";
  // console.log("uid", uid);

  if (uid) {
    User.findOne({ _id: mongoose.Types.ObjectId(uid) }).exec((err, user) => {
      if (err) {
        console.log("error", err);
      }
      if (!user) {
        console.log("error", "no user found");
      }
      let tweetAuthor = {
        _id: user._id,
        username: user.username,
        lastname: user.lastname,
        name: user.name,
        email: user.email,
      };
      // console.log(
      //   uid,
      //   tweetAuthor.name,
      //   tweetAuthor.lastname,
      //   tweetAuthor.username
      // );
      res.status(200).json({ userdata: tweetAuthor });
    });
  } else {
    console.log("Error in fetching user");
    return res.status(301).json({ errors: { form: "zUser is undefined" } });
  }
});
router.post("/id", (req, res) => {
  //console.log("post user body by id");
  const uid = req.body.id; //"5e87a4aeec5ce0255c8c4b98";
  //console.log("uid", uid);
  if (uid) {
    User.findOne({ _id: mongoose.Types.ObjectId(uid) }).exec((err, user) => {
      if (err) {
        console.log("error", err);
      }
      if (!user) {
        console.log("error", "no user found");
      }
      let currentUser = {
        _id: user._id,
        email: user.email,
        username: user.username,
      };
      // console.log(currentUser.lastname);
      res.status(200).json({ user: currentUser });
    });
  } else {
    console.log("Error in fetching user");
    return res.status(301).json({ errors: { form: "zUser is undefined" } });
  }
});

router.post("/", (req, res) => {
  let user = new User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    name: req.body.name,
    lastname: req.body.lastname,
    role: 1,
  });
  //console.log(user);
  User.findOne({ email: req.body.username }, function (err, existingUser) {
    if (err) {
      console.log("ERROR", err);
      return res.status(400).json({ errors: { form: err } });
    }
    if (existingUser) {
      console.log("User already exists", existingUser);
      return res
        .status(400)
        .json({ errors: { form: "Username already in use" } });
    }
    user.save((err, doc) => {
      if (err) return res.json({ regSuccess: false, err });
      res.status(200).json({
        regSuccess: true,
      });
    });
  });
});
router.post("/edit", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) return res.json({ editSuccess: false, err });
      res.status(200).json({
        editSuccess: true,
      });
    }
  );
});

router.get("/by_id", (req, res) => {
  let type = req.query.type;
  let items = req.query.id;
  if (type === "array") {
    let ids = req.query.id.split(",");
    items = [];
    items = ids.map((item) => {
      return mongoose.Types.ObjectId(item);
    });
  }

  User.find({ _id: { $in: items } })
    //Product.find({ _id: items })
    .populate("following")
    .populate("favorites")
    .exec((err, docs) => {
      return res.status(200).send(docs);
    });
});

router.get("/logout", (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

module.exports = router;
