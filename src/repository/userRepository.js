const User = require("../model/userSchema");

async function createUser(userDetail) {
    try {
        const response = await User.create(userDetail);
        return response;
    } catch (error) {
        console.log('not able to create user problem in userRepo', error);
    }
}
async function findUser(parameter){
    try {
        const user = await User.findOne(
            {...parameter}
        );
        return user
    } catch (error) {
        console.log('not able to findUser in userRepo', error);
    }
}

module.exports = {
    createUser,
    findUser
}