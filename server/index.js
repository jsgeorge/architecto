//server index file
const express = require("express");
const bodyParser = require("body-parser");
//const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");

//Routes
const users = require("./routes/users");
const auth = require("./routes/auth");
const projects = require("./routes/projects");
const categories = require("./routes/categories");
const properties = require("./routes/properties.js");
const app = express();
//const async = require("async");

require("dotenv").config();

//Mongooose
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react/mongodb/archdesigns"
);

//bodypasrer
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("/projects", projects);
app.use("/projects/add", projects);
app.use("/projects/article", projects);
app.use("/projects/articles", projects);
app.use("/projects/articles_by_id", projects);
app.use("/projects/view", projects);
app.use("/projects/update", projects);
app.use("/projects/delete", projects);
app.use("/projects/uploadimage", projects);
app.use("/projects/feature", projects);
// //cattegories
app.use("/categories", categories);
app.use("/categories/update", categories);
app.use("/categories/name", categories);

// //properties
app.use("/properties", properties);
app.use("/properties/id", properties);
app.use("/properties/name", properties);
app.use("/properties/update", properties);

//users
app.use("/auth", auth);
app.use("/users", users);

//default
if (process.env.NODE_ENV === "production") {
  // const path = require("path");
  // app.get("/*", (req, res) => {
  //   res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
  // });
  //Exprees will serve up production assets
  app.use(express.static("client/build"));

  //Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  app.get("*", function (_, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"), function (
      err
    ) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
