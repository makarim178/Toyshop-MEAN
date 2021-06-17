const mongoose = require('mongoose');
const config = require('../config/database');

// Create Schema for productList

const prodListSchema = mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    subCategoryName: {
        type: String
    },
    brandsName: {
        type: String,
        required: true
    },
    minAge:{
        type: Number
    },
    gender: {
        type: String
    },
    productPrice: {
        type: Number,
        required: true
    },
    availableQty: {
        type: Number,
        required: true
    },
    minOrderQty:{
        type:Number,
        required: true
    }
});


const productList = module.exports = mongoose.model('ProductList',prodListSchema);

// Function to get All Products
module.exports.getAllProducts = function(callback){
    productList.find(callback);
}

// Function to get product by ID
module.exports.getProdById = function(id, callback){
    let query = {_id:id};
    productList.findById(query, callback);
}

// Function to add new Product
module.exports.addProduct = function(newProdList, callback){
    newProdList.save(callback);
}

// Function to update Product
module.exports.updateProduct = function(newProd, callback){
    let query = {_id: newProd._id};
    productList.findByIdAndUpdate(query, newProd, callback);
}

// Function to remove product
module.exports.removeProduct = function(id, callback){
    let query = {_id: id}
    productList.findByIdAndRemove(query, callback);
}