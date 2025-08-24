const { findUser, createUser } = require("../repository/userRepository");

async function signUpUserService(userDetail) {
    const user = await findUser({
        email : userDetail.email,
        password  : userDetail.password,
    })
    if(!user){
        throw {reason : "not find user in userService", statusCode : 404}
    }
    const newUser = await createUser(userDetail)({
        name : userDetail.name,
        email : userDetail.email,
        password : userDetail.password
    })
    if(!newUser){
        throw {reason : "not able to create user in userService", statusCode : 500}
    }
    return newUser;
}


module.exports = {
    signUpUserService
}