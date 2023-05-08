// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { earring } = require('./Earring.js')
// const earringSchema = new Schema({
    
//     color: {
//       type: String
//     },
//     kind: {
//       type: String,
//       enum: ["large", "small", "stud", "hoop"]
//     },
//     price: {
//       type: Number,
//       default: 20,
//       min: 0
//     },
//     profile: {
//       type: Object,
//       default: null
//     },
//     title: {
//       type: String
//     }
//   });
  
  
  
  
const outSchema = new Schema({
   
    boxmaster: {
        type: String,
        required: true
    },

    items: {
        type: [earring]
    }

    });


module.exports = mongoose.model("box", outSchema);
