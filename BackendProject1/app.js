const express = require('express');
const app = express();
const indexRouter =require('./routes/index.routes');
const cookieParser = require('cookie-parser')
app.use(cookieParser());
const userRoutes = require('./routes/user.routes');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// routes

app.use('/',  indexRouter);
app.use('/user', userRoutes);

// PORT
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})