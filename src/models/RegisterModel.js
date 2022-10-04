const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    emailAddress: {type: String},
    mobileNumber: {type: String},
    city: {type: String},
    userName: {type: String, unique: true},
    password: {type: String},
},
    {
        timestamps: true
    },
    {
        versionKey: false
    })

const RegisterModel = mongoose.model("Profile", schema);

module.exports = RegisterModel;