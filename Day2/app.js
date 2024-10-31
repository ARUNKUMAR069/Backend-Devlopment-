const express = require('express');
const morgan = require('morgan');
// express is a framework for building web applications
const app = express();

// set the view engine to ejs
// app.set() is used to set the view engine
app.set('view engine', 'ejs');

// Middleware
// Middleware is functions between request and response
// Types of Middleware

// 1. Custom Middleware
// 2. Third Party Middleware
// 3. Built-in Middleware


// Third Party Middleware
app.use(morgan('dev'));

// Custom Middleware
// app.use((req, res, next) => {
//     console.log('Middleware is running');
//     const a = 10;
//     const b = 20;
//     const c = a + b;
//     console.log(c);
//     return next();
// });

// routes
app.get('/',
    // Route Middleware
    (req, res, next) => {
        console.log('Route is running');
        next();
    },
    (req, res) => {
        // Render the index.ejs file
        // res.render() is used to render the ejs file
        res.render('index');
    });
app.get('/about', (req, res) => {
    // send the response to the client
    // res.send() is used to send the response to the client
    res.send('About page by Express JS');
});
app.get('/contact', (req, res) => {

    res.send('Contact page by Express JS');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
