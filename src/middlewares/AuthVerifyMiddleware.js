const jwt = require('jsonwebtoken');

const tokenVerifyMiddleware = (req, res, next) => {
    try{
    const token = req.headers['authorization'].split(' ')[1]
    const verify = jwt.verify(token, 'secure321');
    if(verify){

        req.headers['userName'] = verify.userName;
        req.headers['id'] = verify.id;
       req.headers
        next()
    }

    }catch (error){
        res.status(401).json({
            status: "Unauthorized",
            message: "Unauthorized User",
            error: error.message
        })
    }








}

module.exports = tokenVerifyMiddleware