const mongoose = require('mongoose');
const config = require('../config/database');

// Create Schema
const brandSchema = mongoose.Schema({
    brandsName: {
        type: String,
        required: true
    }
});

const brands = module.exports = mongoose.model('brands', brandSchema);

// Function to get all brands
module.exports.getAllBrands = function(callback){
    brands.find(callback);
}

// Function to get brands by ID
module.exports.getBrandsById = function(id, callback){
    let query = {_id: id};
    brands.findOne(query, callback);
}

// Function to Add Brands
module.exports.addBrands = function(newBrands, callback){
    //console.log(newBrands.brandsName);
    newBrands.save(callback);
}

// Function to Update one Brands
module.exports.updateBrands = function(newBrands, callback){
    let query = {_id: newBrands._id};
    brands.findByIdAndUpdate(query, newBrands, callback);
}

// Function to Remove one Brands
module.exports.removeBrands = function(id, callback){
    let query = {_id: id};
    brands.findOneAndRemove(query, callback);
}