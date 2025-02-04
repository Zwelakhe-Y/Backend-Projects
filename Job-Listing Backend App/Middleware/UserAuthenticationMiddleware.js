const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const employerModel = require("../Models/employer-profile.model.js");
const SeekerModel = require("../Models/job-seeker-profile.model.js");
const EmployerProfileModel = require("../Models/employer-profile.model.js");


const mongoAccountPassword = require('../Models/employer-profile.model.js');

exports.authenticateUser = async (req, res, next) => {
    const token = req.body
    

    if (token === mongoAccountPassword ) {
        res.send("Access Granted");
    } else{
        next(createHttpError(401, "Unauthorized User"));
    }
};
