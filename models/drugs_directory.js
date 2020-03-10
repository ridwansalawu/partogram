const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drugsDirectorySchema = new Schema({
    brand: {
        type: String
    },
    generic: {
        type: String
    },
    route: [],
    class:[]


    


});

drugsDirectorySchema.index({"brand":"text", "generic":"text"})

var Drugs = mongoose.model("Drugs", drugsDirectorySchema);

module.exports = Drugs;