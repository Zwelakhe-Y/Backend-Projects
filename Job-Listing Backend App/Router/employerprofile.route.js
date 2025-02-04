const express = require('express');
const EmployerProfileModel = require('../Models/employer-profile.model.js');
const router = express.Router();
// const mongoose = require('mongoose');


// AUTHENTICATION MIDDLEWARE
//Doesnt WORK NEED HELP
const {
    authenticateUser,
} = require("../Middleware/UserAuthenticationMiddleware.js");

//CONTROLLER IMPORT
const {postProfile, getProfile, updateProfile, deleteProfile} = require('../Controller/employer-profile.controller.js')

//ADD PROFILE (CREATE)(POST)
router.post('/add', postProfile)

//GET PROFILE (READ)(GET)
router.get('/:id', getProfile);

//UPDATE A PROFILE (UPDATE)(PUT)
router.put('/:id', updateProfile);

//DELETE A PROFILE(DELETE)
router.delete('/:id', deleteProfile)


module.exports = router;