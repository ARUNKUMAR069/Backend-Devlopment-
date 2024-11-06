const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Validation
const { body, validationResult } = require('express-validator');


// Routes
// 1. Register Get
router.get('/register', (req, res) => {
    res.render('register');
})
// 2. Register Post
router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 4 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            });
        }
        // Destructuring
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,

        });
        res.json(newUser);
    })


// 3. Login Get
router.get('/login', (req, res) => {
    res.render('login');
})
// 4. Login Post
router.post('/login',
    body('email').trim().isEmail().isLength({ min: 1 }),
    body('password').trim().isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            });
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email: email
        });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        },
            process.env.JWT_SECRET, {
        });

        res.cookie('token', token)
        res.send('Logged in')
    })


        module.exports = router;