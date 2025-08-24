const express = require('express')
const serverConfig = require('./config/serverConfig');
const {connectDB} = require('./config/dbConfig');
const app = express();

app.listen(serverConfig.PORT,async () =>{
    connectDB();
 console.log(`server is running on port ${serverConfig.PORT}`);
});