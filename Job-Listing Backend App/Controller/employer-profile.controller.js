//IMPORTS THE MODEL SCHEMA AND HOW DATA SHOULD BE HANDLED
const Profile = require('../Models/employer-profile.model');
// const mongoose = require('mongoose');


//C
const postProfile = async (req, res) => {
    try{
        const profile = await Profile.create(req.body);
        res.status(200).json(profile)
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

//R
const getProfile = async (req, res) => {
    try {
        const { id } = req.params
        const profileD = await Profile.findById(id)
        res.status(200).json(profileD);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

//U
const updateProfile = async (req, res) => {
    try{
        const {id} = req.params;
        const profile = await Profile.findByIdAndUpdate(id, req.body);
        if (!profile) {
            return res.status(404).json({message: "Profile not found"});
        }

        //RETURNS THE UPDATED OBJECT/PROFILE AS A RESPONSE
        const updatedProfile = await Profile.findById(id);
        res.status(200).json(updatedProfile);

        } catch(error){
        res.status(500).json({message: error.message})
    }
};

//D

const deleteProfile = async(req, res) => {
    try {
        const {id} = req.params;
        const profile =await Profile.findByIdAndDelete(id)
        //CHECK IF THE PROFILE EXISTS FIRST

        if(!profile){
            return res.status(404).json({message: "Profile not found"});
        }

        res.status(200).json({message: "Profile deleted succesfully"})


    } catch(error){
        res.status(500).json({message: error.message})
    }
};


//This exports all the functions/controllers you want to use
module.exports = {
    postProfile,
    getProfile,
    updateProfile,
    deleteProfile

}