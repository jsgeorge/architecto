const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  name: {
    requried: true,
    type: String,
    unique: 1,
    maxlength: 100,
  },
});
const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
