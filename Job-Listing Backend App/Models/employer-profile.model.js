const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const EmployerProfileSchema = new mongoose.Schema (
    {
        username:{
            type:String,
            required: [true, 'Please input Account Username']
        },

        email:{
            type:String,
            required:[true, 'Please input your email']
        },

        password:{
            type:String,
            required:true
        },

        company:{
            type:String,
            required:[true, 'Please input Company/Business name']
        },

        industry:{
            type:String,
            enum:['Medical', 'Legal', 'Tech', 'Commercial', 'Fashion', 'Entertainment']
        },

        role:{
            type:String,
        }
    },

    {
        timestamps: true
    }
)

//Password
EmployerProfileSchema.pre("save", async function (next) {
    const password = this.password;
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = bcrypt.hashSync(password, salt);
    this.password = hashedPassword;
    next();
});

const EmployerProfileModel = mongoose.model("employer-profile", EmployerProfileSchema);

module.exports = EmployerProfileModel;
