const express = require('express');
const SeekerProfile = require('../Models/job-seeker-profile.model.js');
const router = express.Router();


//ADD EVERY FORMULA(E.G 'postProduct' to the curly brackets to define their location)
const {postProfile, getProfiles, getaProfile, updateProfile, deleteProfile} = require('../Controller/jobseeker-profile.controller.js')

//ADD PROFILE (CREATE)(POST)
router.post('/add', postProfile)

//GET ALL JOBS (READ)(GET)
router.get('/', getProfiles);

//GET A PROFILE (READ)(GET)
router.get('/:id', getaProfile);

//UPDATE A PROFILE (UPDATE)(PUT)
router.put('/:id', updateProfile);

//DELETE A PROFILE(DELETE)
router.delete('/:id', deleteProfile)


module.exports = router;