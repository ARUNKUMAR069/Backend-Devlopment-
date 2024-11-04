const express = require('express');
const morgan = require('morgan');
// express is a framework for building web applications
const app = express();
// express.json() is used to parse the body of the request
app.use(express.json());
// express.urlencoded() is used to parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// set the view engine to ejs
// app.set() is used to set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

//  Create a route to get the form data
// app.get('/get-form-data', (req, res) => {
//     // In Get request, the data is sent in the query string
//     console.log(req.query);
//     res.send('Form data received');
// });



// But this is a get request
// We need to change it to a post request
// Because the form data is sent in the body of the request
app.post('/get-form-data', (req, res) => {
    // In Post request, the data is sent in the body of the request
    console.log(req.body);
    res.send('Form data received');
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
