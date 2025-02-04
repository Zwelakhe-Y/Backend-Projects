const express = require('express');
const Product = require('../Models/application.model.js');
const router = express.Router();

//REQUIRES USER AUTHENTICATION SYSTEM SO APPLICANTS WONT EDIT JOBS // FAILED TO INTERGRATE THAT INTO APP
//IF USER AUTHENTICATION CAN BE MADE THE ID OF THE JOB WILL DO

//ADD EVERY FORMULA(E.G 'postProduct' to the curly brackets to define their location)
const {applyInJob, getCandidateAppliedJobs, getRecruiterJobsPost, updateJobStatus} = require('../Controller/application.controller.js')

//APPLY TO JOB (CREATE)(POST)
//For Applicants
router.post('/apply', applyInJob)

//GET APPLIED JOBS (READ)(GET)
//For Applicant
router.get('/applicant-jobs-applied', getCandidateAppliedJobs);

//GET RECRUITER JOBS-LIST  (READ)(GET)
//For Applicant
router.get('/recruiter-jobs-list', getRecruiterJobsPost);

//UPDATE JOB STATUS (UPDATE)(PUT)
//For Recruiter
router.put('/job-status/:id', updateJobStatus);



module.exports = router;