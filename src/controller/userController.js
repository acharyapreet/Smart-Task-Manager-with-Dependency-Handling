async function signUpUSerController(req, res) {
    const userDetail = req.body;
    try{
        const response = await signUpUSerController(userDetail);
        return res.status(201).json({
            success : true,
            error : {},
            data : response,
            message : "user created"
        })
    } catch(error){
        console.log('error at userController',error);
        return res.status(error.statusCode ||500).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        })
    }
}
module.exports = {
    signUpUSerController
}