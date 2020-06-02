const User = require("../models/user");
const router = require("express").Router();
const mongoose = require("mongoose");
//const { auth } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    username: req.user.username,
    role: req.user.role,
    favorites: req.user.favorites,
    following: req.user.following,
  });
});

router.post("/", (req, res) => {
  console.log(req.body);

  User.findOne({ username: req.body.username }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Login failed, username not found",
      });
    else {
      console.log("user found");
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        console.log("wrong password");
        return res.json({
          loginSuccess: false,
          message: "Login failed. Wrong password",
        });
      }
      console.log("login successful");
      // res.status(200).json({
      //   loginSuccess: true
      // });
      user.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }
        // res.cookie("w_auth", user.token).status(200).json({
        //   loginSuccess: true,
        // });
        let currentUser = {
          _id: user._id,
          email: user.email,
          username: user.username,
        };

        res
          .status(200)
          .json({ loginSuccess: true, user: currentUser, token: user.token });
      });
    });
  });
});

module.exports = router;
