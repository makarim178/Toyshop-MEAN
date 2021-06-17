const express = require('express');
const subCategory = require('../models/subCategory');
const router = express.Router();

// Get route for All sub-categeries
router.get('/', (req,res,next)=>{

    subCategory.getAllSubCat((err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to fetch sub-Categories'});
        }else{
            res.json(doc);
        }
    });
});

// Get route for sub-categopries by ID
router.get('/subCatById', (req,res,next)=>{
    subCategory.getSubCatById(req.body.id, (err, doc)=>{
        if (err){
            res.json({success: false, msg: 'Failed to fetch sub-category'});
        }else{
            res.json(doc);
        }
    });
});

// Get route for sub-categories by categoryName
router.get('/subCatByCatName', (req,res,next)=>{
    subCategory.getSubCatByCatName(req.body.categoryName, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Could not fetch sub-categories'});
        }else{
            res.json({success: true, doc});
        }
    });
});

// Get route to Add new Sub-category
router.post('/addSubCat', (req,res,next)=>{
    let newSubCat = new subCategory({
        subCategoryName: req.body.subCategoryName,
        categoryName: req.body.categoryName
    });

    subCategory.addSubCat(newSubCat, (err, doc)=>{
        if(err){
            res.json({success: false, msg:'Failed to create Sub-Category'});
        }else{
            res.json({success:true, msg:'Successfully Created!'});
        }
    });
});

// Get route to Update sub-category
router.put('/updateSubCat', (req,res,next)=>{
    let newSubCat = new subCategory({
        _id: req.body.id,
        subCategoryName: req.body.subCategoryName,
        categoryName: req.body.categoryName
    });

    subCategory.updateSubCat(newSubCat, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to update!'});
        }else{
            res.json({success: true, msg: 'Successfully Updated!'});
        }
    });
});

// Get router to remove sub-category
router.delete('/removeSubCat', (req,res,next)=>{
    subCategory.removeSubCat(req.body.id, (err,doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to remove!'});
        }else{
            res.json({success: true, msg: 'Successfully removed!'});
        }
    });
});


// Export router
module.exports = router;