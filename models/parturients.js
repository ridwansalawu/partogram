const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parturientSchema = new Schema({
    medId: {
        type: String 
    },
    firstName: {
        type: String
    },
    otherName: {
        type: String
    },
    lastName: {
        type: String
    },
    lmp: {
        type: String
       
    },
    dob: {
        type: String
       
    },
    email: {
        type: String
    },
    telnum: {
        type: String
    },
    address: {
        type: String
    },
    nok: {
        type: String
    },
    email: {
        type: String
    },
    cervix: {
        type: Number
        
    },
    time: {
        type: Number
    },
    comment: {
        type: String,
       default: ""
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

var Parturients = mongoose.model("Parturients", parturientSchema);

module.exports = Parturients;