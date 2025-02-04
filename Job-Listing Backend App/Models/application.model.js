const mongoose = require("mongoose");
const { STATUS } = require("../Utils/Application-Constants.js");

const ApplicationProcessSchema = new mongoose.Schema(
    {
        applicantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "seeker-profile",
            required: true,
        },
        recruiterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "employer-profile",
            required: true,
        },
        jobAppId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "job-listing",
            required: true,
        },
        status: {
            type: String,
            enum: Object.values(STATUS),
            default: STATUS.PENDING,
            required: true,
        },
        cv: {
            type: String,
            required: true,
        },
        dateOfApplication: {
            type: Date,
            default: Date.now,
        },
        dateOfJoining: {
            type: Date,
            validate: [
                {
                    validator: function (value) {
                        return this.dateOfApplication <= value;
                    },
                    message:
                        "You cannot apply the same day you joined",
                },
            ],
        },
    },
    
    { 
        timestamps: true 
    }
);

const ApplicationSchema = mongoose.model("application", ApplicationProcessSchema);
module.exports = ApplicationSchema;
