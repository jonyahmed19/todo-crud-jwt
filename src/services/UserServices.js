const UserModel = require('../models/RegisterModel');

const registerUserService = async (data) => {
    const profile = await UserModel.create(data);
    return profile;
}

const loginUserService = async (data) => {
    const projection = {
        firstName: 1,
        lastName: 1,
        emailAddress: 1,
        mobileNumber: 1,
        city: 1,
        userName: 1
    }
    const login = await UserModel.findOne(data, projection);
    return login;
}

const getProfileService = async (data) => {

    const projection = {
        firstName: 1,
        lastName: 1,
        emailAddress: 1,
        mobileNumber: 1,
        city: 1,
        userName: 1
    }
    const profiles = await UserModel.find(data, projection);
    return profiles;
}
const updateProfileService = async (data) => {
    const id = data.params.todoid;
    const body = data.body;
    console.log('body', body)
    const profile = await UserModel.updateOne({
            id: id
        },
        body
    )
    return profile;
}




module.exports = {
    registerUserService,
    loginUserService,
    getProfileService,
    updateProfileService,
}