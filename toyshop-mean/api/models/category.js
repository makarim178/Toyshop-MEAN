const mongoose = require('mongoose');
const config = require('../config/database');

// CREATE SCHEMA categories
const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
});

const category = module.exports = mongoose.model('category', categorySchema);

// Function to call categories by id
module.exports.getCatById = function(id, callback){
    category.findById(id,callback);
}

// Function to get all categories
module.exports.getAllCat = function(callback){
    category.find(callback);
}

// Function to add categories
module.exports.AddCat = function(newCat, callback){
    newCat.save(callback);
}

// Function to update one category
module.exports.updateCat = function(id, newCat, callback){
    let query = {_id: id};
    category.findByIdAndUpdate(query,newCat, callback);
}

// Function to remove one category
module.exports.removeCat = function(id, callback){
    let query = {_id: id};
    
    category.findByIdAndRemove(query, callback);
}