const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parturientSchema = new Schema({
    hospitalId: {
        type: String 
    },
    firstName: {
        type: String
    },
    middleName: {
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