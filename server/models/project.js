const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 100,
      requried: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    location: {
      type: String,
      maxlength: 100,
      required: true,
    },
    city: {
      type: String,
      maxlength: 50,
    },
    state: {
      type: String,
      maxlength: 2,
    },
    area: {
      type: Number,
      default: 0,
    },
    cost: {
      type: Number,
      default: 0,
    },
    headline: {
      type: String,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    createdAt: {
      type: Date,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
    },
    featured: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
