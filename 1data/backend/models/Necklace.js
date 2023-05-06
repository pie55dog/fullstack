// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const necklaceSchema = new Schema({
    location: {
        type: String,
        enum:["closet" , "gray box" , "desk",]
    },

    color: {
        type: String,
    },

    type: {
        type: String,
        enum: ["pendent" ,  "chocker",]
    },

    price: {
        type: Number,
        default: 20,
        min: 2,
    },

    profile: {
        type: Object,
        default: null

        
    },
    title: {
        type: String, 
        required: true,

    }

});




module.exports = mongoose.model("Necklace", necklaceSchema);
