const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const ProfileSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please input Job title']
        },

        surname:{
            type:String,
            required:true
        },

        gender:{
            type:String
        },

        password:{
            type:String,
            required:true,
        },

        industry:{
            type:String,
            enum:['Medical', 'Legal', 'Tech', 'Commerce', 'Fashion', 'Entertainment', 'Beauty', 'Marketing']
        },

        role:{
            type:String, 
        },

        skills:{
            type:String,
            required: [true, 'Please input at least one skill']
        },

        introduction:{
            type:String,
            required: [true, "Please Provide Work History or Experiance summary"]
        },

        yearsOfExperiance:{
            type:Number,
            required: [true, 'Please provide years of experiance'],
            default:0
        },

        cv:{
            type:String,
            required:[true, 'Please input resume/cv']
        },

        pay:{
            type:String,
            required: false
        },


        
    },
    {
        timestamps:true
    }
);

// Password
ProfileSchema.pre("save", async function (next) {
    const password = this.password;
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = bcrypt.hashSync(password, salt);
    this.password = hashedPassword;
    next();
});

const SeekerProfile = mongoose.model("seeker-profile", ProfileSchema);

module.exports = SeekerProfile;