const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  sourceURL: {
    type: String,
    required: true,
  },
  byteCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("URL", URLSchema);
