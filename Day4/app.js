const express = require('express');
const morgan = require('morgan');
const userModel = require('./models/user');
const connection = require('./config/db');
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
app.get('/register', (req, res) => {
    res.render('register');
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
// CRUD Operations
// 1. Create
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await userModel.create({
        username: username,
        email: email,
        password: password
    });
    console.log(user);
    res.send('Form data received');
});
// Create end

// 2. Read
app.get('/get-users', async (req, res) => {
    // Find can find all the users from the database
    // you can also conditionally find the users from the database
    // e.g find all the users with the username 'John'
    userModel.find({ username: 'John' }).then((users) => {
        res.send(users);
    }).catch((err) => {
        res.send(err);
    });
});
// Read end
// 3. Update
app.get('/update-user', async (req, res) => {
    const user = await userModel.findOneAndUpdate({
        username: 'aa'
    }, {
        email: 'jatt@gmail.com'
    }
    )
    res.send('User updated');
})
// Update end
// 4. Delete
app.get('/delete-user', async (req, res) => {
    const user = await userModel.findOneAndDelete({
        username: 'aa'
    })
    res.send('User deleted');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
