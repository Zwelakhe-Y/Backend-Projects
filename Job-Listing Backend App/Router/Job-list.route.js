const express = require('express');
const JobListing = require('../Models/job-list.model.js');
const router = express.Router();


//ADD EVERY FORMULA(E.G 'postProduct' to the curly brackets to define their location)
const {postJob, getJobs, getSingleJob, updateJob, deleteJob} = require('../Controller/Job-List.controller.js')

//ADD JOB (CREATE)(POST)
router.post('/add', postJob)

//GET ALL JOBS (READ)(GET)
router.get('/', getJobs);

//GET ONE SPECIFIC JOB (READ)(GET)
router.get('/:id', getSingleJob);

//UPDATE A PRODUCT (UPDATE)(PUT)
router.put('/:id', updateJob);

//DELETE A PRODUCT(DELETE)
router.delete('/:id', deleteJob)


module.exports = router;