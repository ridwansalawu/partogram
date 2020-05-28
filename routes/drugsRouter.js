const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");
const Drugs = require("../models/drugs_directory");

const drugsRouter = express.Router();
// drugsRouter.use(bodyParser.json());

drugsRouter
    .route("/:drug")
    .get((req,res) => {
        // eval(require("locus"))
        console.log("finding .......")
         Drugs.find({

             generic : {"$regex":req.params.drug, "$options": "i" }
            //  brand: req.params.drug
         }, "brand generic", (err, result)=>{
             err ? console.log(err) : console.log(result[1])
         })
         .limit(5)
         .sort({brand: 1})
        .then(
            response => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                let final = response.map(res => {
                    return (res.generic)
                })
                res.json(final);

            }
        )


    })

    module.exports = drugsRouter;
    
