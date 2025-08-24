const express = require('express')
const serverConfig = require('./config/serverConfig');
const {connectDB} = require('./config/dbConfig');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./route/userRoute');
const authRouter = require('./route/authRoute');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())

app.use('/users', userRouter);
app.use('/auth',authRouter);

app.listen(serverConfig.PORT,async () =>{
    connectDB();
 console.log(`server is running on port ${serverConfig.PORT}`);
});