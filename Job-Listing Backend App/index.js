const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const cors = require("cors");
// const cookieParser = require("cookieparser");


// app.use(cookieParser(process.env.COOKIE_SECRET));

//PORT NOTIFICATION
const Port = 3000;
app.listen(Port, () => {
    console.log(`Port is running on Port:${Port}`)
});

//SERVER TEST
app.get('/', (req, res) =>{
    res.send("Hello from my server")
});


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// AUTHENTICATION MIDDLEWARE
//DOESNT WORK
const {
    authenticateUser,
} = require("./Middleware/UserAuthenticationMiddleware");


// ROUTERS
const ApplicationRouter = require('./Router/application.route')
const employerprofileRouter =require('./Router/employerprofile.route')
const jobSeekerProfileRouter = require('./Router/jobseekerProfile.route')
const JobRouter = require('./Router/Job-list.route')

//CONNECTING/LINKING ROUTERS
app.use('/api/jobs/application', ApplicationRouter)
app.use("/api/jobs", JobRouter);
app.use("/api/profile/employer", employerprofileRouter);
app.use("/api/profile/seeker", jobSeekerProfileRouter);


// MODEL SCHEMA
const  applicationModel = require('./Models/application.model');
const  employerProfileModel = require('./Models/employer-profile.model');
const  jobListModel = require('./Models/job-list.model');
const  jobSeekerModel = require('./Models/job-seeker-profile.model');






mongoose.connect('') 
.then (() => {
    console.log('Database: Connected')
})
.catch(() => {
    console.log('Database: Connection Failed')
})
