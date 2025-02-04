//IMPORTS THE MODEL SCHEMA AND HOW DATA SHOULD BE HANDLED
const Jobs = require('../Models/job-list.model');

//C
const postJob = async (req, res) => {
    try{
        const Job = await Jobs.create(req.body);
        res.status(200).json(Job)
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

//R
const getJobs = async (req, res) => {
    try {
        const Job = await Jobs.find({});
        res.status(200).json(Job)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

const getSingleJob = async (req, res) => {
    try {
        const { id } = req.params;
       const Job = await Jobs.findById(id);
       res.status(200).json(Job);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

//U
const updateJob = async (req, res) => {
    try{
        const {id} = req.params;
        const Job = await Jobs.findByIdAndUpdate(id, req.body);
        if (!Job) {
            return res.status(404).json({message: "Job not found"});
        }

        //RETURNS THE UPDATED OBJECT/JOB AS A RESPONSE
        const updatedJob = await Jobs.findById(id);
        res.status(200).json(updatedJob);

        } catch(error){
        res.status(500).json({message: error.message})
    }
};

//D

const deleteJob = async(req, res) => {
    try {
        const {id} = req.params;
        const Job =await Jobs.findByIdAndDelete(id)
        //CHECK IF THE JOB EXISTS FIRST

        if(!Job){
            return res.status(404).json({message: "Job has expired/Job is not found"});
        }

        res.status(200).json({message: "Job deleted succesfully"})


    } catch(error){
        res.status(500).json({message: error.message})
    }
};


//This exports all the functions/controllers you want to use
module.exports = {
    postJob,
    getJobs,
    getSingleJob,
    updateJob,
    deleteJob

}