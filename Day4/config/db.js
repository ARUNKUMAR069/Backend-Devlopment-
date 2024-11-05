const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb://localhost:27017/user-db').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

module.exports = connection;