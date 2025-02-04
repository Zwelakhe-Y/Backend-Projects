//IMPORTS THE MODEL SCHEMA AND HOW DATA SHOULD BE HANDLED
const SeekProfile = require('../Models/job-seeker-profile.model');

//C
const postProfile = async (req, res) => {
    try{
        const profile = await SeekProfile.create(req.body);
        res.status(200).json(profile)
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

//R
const getProfiles = async (req, res) => {
    try {
        const profile = await SeekProfile.find({});
        res.status(200).json(profile)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}
//R
const getaProfile = async (req, res) => {
    try {
        const { id } = req.params;
       const profile = await SeekProfile.findById(id);
       res.status(200).json(profile);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

//U
const updateProfile = async (req, res) => {
    try{
        const {id} = req.params;
        const profile = await SeekProfile.findByIdAndUpdate(id, req.body);
        if (!profile) {
            return res.status(404).json({message: "Profile not found"});
        }

        //RETURNS THE UPDATED OBJECT/PRODUCT AS A RESPONSE
        const updatedProfile = await SeekProfile.findById(id);
        res.status(200).json(updatedProfile);

        } catch(error){
        res.status(500).json({message: error.message})
    }
};

//D

const deleteProfile = async(req, res) => {
    try {
        const {id} = req.params;
        const profile =await SeekProfile.findByIdAndDelete(id)
        //CHECK IF THE PRODUCT EXISTS FIRST

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
    getProfiles,
    getaProfile,
    updateProfile,
    deleteProfile

}