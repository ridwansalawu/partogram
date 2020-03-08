const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drugsDirectorySchema = new Schema({
    brand: {
        type: String
    },
    generic: {
        type: String
    },
    route: [

    ],
    class:[
        
    ]


    


});

var DrugsDirectory = mongoose.model("DrugsDirectory", drugsDirectorySchema);

module.exports = DrugsDirectory;