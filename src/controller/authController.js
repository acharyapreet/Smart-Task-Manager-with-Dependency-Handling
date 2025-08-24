const { authService } = require("../service/authService");

async function authController(req, res){
    try {
        const payload = req.body;
        const response = await authService(payload)
        res.cookie('authToken', response, {
            maxAge : 12*60*60*1000,
            secure : true
        })
        return res.status(200).json({
            success : true,
            error : {},
            data : {},
            message : "user login successfully"
        })
    } catch(error){
        console.log('error at authController',error);
        return res.status(error.statusCode ||500).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        })
    }
}

module.exports = {
    authController
}