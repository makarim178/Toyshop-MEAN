const express = require('express');
const route = express.Router();
const products = require('../models/productList');

// Get Router to get the productList
route.get('/', (req, res,next)=>{
    products.getAllProducts((err,doc)=>{
        if(err){
            res.json({success: false, msg:'Unable to fetch data'});
        } else {
            res.json(doc);
        }
    });
});

// Get Product by id
route.post('/prodById', (req,res,next)=>{
    console.log(req.body.id);
    products.getProdById(req.body.id, (err,doc)=>{
        if(err){
            res.json({success: false, msg:'Unable to fetch data!'});
        }else{
            res.json(doc);
        }
    });
});

// Get router to Add new product
route.post('/addProduct', (req,res,next)=>{
    let newProd = new products({
        productCode: req.body.productCode,
        productName : req.body.productName,
        productDesc: req.body.productDesc,
        productImage: req.body.productImage,
        categoryName: req.body.categoryName,
        subCategoryName: req.body.subCategoryName,
        brandsName: req.body.brandsName,
        minAge: req.body.minAge,
        gender: req.body.gender,
        productPrice: req.body.productPrice,
        availableQty: req.body.availableQty,
        minOrderQty: req.body.minOrderQty
    });
    
    products.addProduct(newProd, (err, doc)=>{
        if(err){
            res.json({success:false, msg:'Failed to Add!'});
        }else{
            res.json({success: true, msg: 'Successfully Added'});
        }
    });
});

// Route to update Product
route.put('/updateProduct', (req, res, next)=> {
    let newProd = new products({
        _id: req.body._id,
        productCode: req.body.productCode,
        productName : req.body.productName,
        productDesc: req.body.productDesc,
        productImage: req.body.productImage,
        categoryName: req.body.categoryName,
        subCategoryName: req.body.subCategoryName,
        brandsName: req.body.brandsName,
        minAge: req.body.minAge,
        gender: req.body.gender,
        productPrice: req.body.productPrice,
        availableQty: req.body.availableQty,
        minOrderQty: req.body.minOrderQty
    });

    products.updateProduct(newProd, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Update!'});
        }else{
            res.json({success: true, msg:'Successfully Updated!'});
        }
    });
});

// Route to remove product
route.delete('/removeProduct/:id', (req,res)=>{
    console.log('removing product');
    console.log(`body: ${req.body.id}`);
    console.log(`params: ${req.params.id}`);
    products.removeProduct(req.params.id, (err, doc)=>{
        if(err){
            res.json({success: false, msg:'Failed to Remove!'});
        }else{
            res.json({success: true, msg:'Successfully Removed!'});
        }
    });
});



module.exports = route;