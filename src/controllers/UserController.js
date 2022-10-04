const {
    registerUserService, loginUserService, getProfileService, updateProfileService
,deleteTodoService


} = require('../services/UserServices');
const jwt = require('jsonwebtoken');

const registerProfile = async (req, res) => {

    try {

        const data = await registerUserService(req.body);
        res.status(201).json({
            status: "Success",
            message: "Profile is created",
            data: data
        })

    } catch (error) {
        res.status(400).json({
            status: "Failed", message: 'Profile isn\'t created', error: error.message
        });
    }
}
const loginController = async (req, res) => {
    try {
        const data = await loginUserService(req.body);

        if (!data) {
            res.status(401).json({
                status: "Failed", message: "User doesn't exists",
            })
        }

        if (data) {
            const payload = {
                _id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                emailAddress: data.emailAddress,
                mobileNumber: data.mobileNumber,
                city: data.city,
                userName: data.userName

            }


            let token = jwt.sign(payload, 'secure321', {expiresIn: '4h'});
            res.status(200).json({
                status: "Success", message: "User login success", data, token
            })
        }
    } catch (error) {
        res.status(401).json({
            status: "Failed", message: "User doesn't exists", error: error.message
        })
    }
}
const getProfileController = async (req, res) => {
    try {
        const data = await getProfileService({userName: req.headers['userName']});

        res.status(200).json({
            status: "Success", message: "Profile success", data
        })

    } catch (error) {
        res.status(400).json({
            status: "Failed", message: "User doesn't exists", error: error.message
        })
    }
}
const updateProfileController = async (req, res) => {
    try {
        const data = await updateProfileService(req);
        res.status(200).json({
            status: "Success", message: "Profile updated success", data
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed", message: "Failed to updated", error: error.message
        })
    }
}



module.exports = {
    registerProfile, loginController, getProfileController, updateProfileController
}