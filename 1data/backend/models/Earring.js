const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const earringSchema = new Schema({

  color: {
    type: String
  },
  kind: {
    type: String,
    enum: ["large", "small", "stud", "hoop"]
  },
  price: {
    type: Number,
    default: 20,
    min: 0
  },
  profile: {
    type: Object,
    default: null
  },
  title: {
    type: String,
  }
});

module.exports = mongoose.model("earring", earringSchema);


