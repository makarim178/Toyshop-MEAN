const express = require('express');
const jwt = require('jsonwebtoken');
const adminUser = require('../models/adminUser');
const config = require('../config/database');
const passport = require('passport');
const router = express.Router();


// Register Route
router.post('/register', (req,res, next)=>{
    // Create newUser Object from requests
    let newAdminUser = new adminUser({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        username: req.body.username,
        password: req.body.password
    });
    
    // send requests to appropriate functions to create users for admin panel
    adminUser.addAdminUser(newAdminUser, (err,user)=>{
        if(err){
            res.json({success: false, msg: 'Failed to register Admin User'});
        }else{
            res.json({success: true, msg: 'Admin user registered'});
        }
    });
});

// Authenticate Route
router.post('/authenticate', (req,res, next)=>{
    // res.send('AUTHENTICATE');

    const username = req.body.username;
    const password = req.body.password;

    adminUser.getAdminUserByUsername(username, (err, user) => {
        if(err) throw err;

        if(!user) {
            return res.json({success: false, msg: 'User not found!'});
        }

        adminUser.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;

            if (isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password!'});
            }
        });
    });
});

// Profile Route
router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next)=> {
    res.json({
        user: req.user
    });
})

// Export route
module.exports = router;