const express = require('express');
const category = require('../models/category');
const router = express.Router();

// route to get all categories

router.get('/', (req,res,next)=>{
    //res.send('get all categories here!');
    category.getAllCat((err,doc)=>{
        if(err){
            res.json({success: false, msg: 'Error fetching data!'});
        }else{
            res.json(doc);
        }
    });
});


// route to get categories by id
router.get('/category', (req,res,next)=>{
    category.getCatById(req.body.id, (err, doc)=>{
        if(err){
            //res.json({success: false, msg: 'Category not found!'});
        } else {
            res.json(doc);
        }
    });
});

// route to create a category
router.post('/addCategories', (req,res,next)=>{
    let newCat = new category({
        categoryName: req.body.categoryName
    });
    // send requests to appropriate functions to create categories
    category.AddCat(newCat, (err,cat)=>{
        if(err){
            res.json({success: false, msg:'Failed to create Category'});
        }else{
            res.json({success:true, msg:'Successfully Created!'});
        }
    });
});

// route to update a category
router.put('/updateCategories', (req,res,next)=>{
    let newCat = new category({
        _id: req.body.id,
        categoryName: req.body.categoryName
    });
    // send requests to appropriate functions to create categories
    category.updateCat(req.body.id, newCat, (err,cat)=>{
        if(err){
            res.json({success: false, msg:'Failed to update Category'});
        }else{
            res.json({success:true, msg:'Successfully Updated!'});
        }
    });
});

// route to remove a category
router.delete('/removeCategories', (req,res,next)=>{

    // send requests to appropriate functions to create categories
    category.removeCat(req.body.id, (err,cat)=>{
        if(err){
            res.json({success: false, msg:'Failed to remove Category'});
        }else{
            res.json({success:true, msg:'Successfully Removed!'});
        }
    });
});

// Expot router
module.exports = router;