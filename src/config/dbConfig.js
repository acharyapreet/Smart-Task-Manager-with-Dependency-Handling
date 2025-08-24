const mongoose = require('mongoose')
const serverConfig = require('./serverConfig')

async function connectDB() {
    try{
        await mongoose.connect(serverConfig.DB_URL);
        console.log('successfully connected to database');
    } catch(error){
        console.log('not able to connect to db',error)
    }
}

module.exports = {connectDB};