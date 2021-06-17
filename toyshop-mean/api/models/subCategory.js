const mongoose = require('mongoose');
const config = require('../config/database');
const e = require('express');
const { query } = require('express');

// CREATE SCHEMA categories
const subCategorySchema = mongoose.Schema({
    subCategoryName: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        require: true
    }
});

const subCategory = module.exports = mongoose.model('subcategory', subCategorySchema);

// Function to get all sub categories
module.exports.getAllSubCat = function(callback){
    subCategory.find(callback);
}

// Function to get sub categories by Id
module.exports.getSubCatById = function(id, callback){
    subCategory.findById(id, callback);
}

// Function to get sub-category by categoryName
module.exports.getSubCatByCatName = function(catName, callback){
    let query = {categoryName: catName};
    subCategory.find(query, callback);
}

// Function to add new sub category
module.exports.addSubCat = function(newSubCat, callback){
    newSubCat.save(newSubCat, callback);
}

// Function to update one sub category
module.exports.updateSubCat = function(newSubCat, callback){
    let query = {_id: newSubCat._id};
    subCategory.findByIdAndUpdate(query, newSubCat, callback);
}

// Function to remove one sub category
module.exports.removeSubCat = function(id, callback){
    let query = {_id: id};
    subCategory.findByIdAndRemove(query, callback);
}