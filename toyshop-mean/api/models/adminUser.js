const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

// CREATE SCHEMA 'AdminUser'
const AdminUserSchema = mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const AdminUser = module.exports = mongoose.model('AdminUser', AdminUserSchema);

// Function to add All users

// Function to get Admin user by ID
module.exports.getAdminUserId = function(id, callback){
    AdminUser.findById(id,callback);
}

// Function to get Admin user by username
module.exports.getAdminUserByUsername = function(username, callback){
    const query = {username: username};
    AdminUser.findOne(query,callback);
}

// Function to add new Admin User 
module.exports.addAdminUser = function(newAdminUser, callback){
    // Generate bcrypt
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newAdminUser.password, salt, (err,hash)=>{
            if(err) throw err;
            newAdminUser.password = hash;
            newAdminUser.save(callback);
        });
    });
}

// Function to compare password

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
