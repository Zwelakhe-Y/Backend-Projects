const mongoose =require('mongoose');


const JobListingSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, 'Please input Job title']
        },

        description:{
            type:String,

        },

        requirements:{
            type:String,
            required: true
        },

        location:{
            type:String,
            required:true
        },

        pay:{
            type:String,
            required: false
        },

        industry:{
            type:String,
        },

        skills:{
            type:String,
            required: [true, 'Please input at least one skill']
        },

        closingDate:{
            type:String
        }
    },
    {
        timestamps:true
    }
);

const JobListing = mongoose.model("job-listing", JobListingSchema);

module.exports = JobListing;