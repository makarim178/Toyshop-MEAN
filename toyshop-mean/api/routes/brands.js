const express = require('express');
const router = express.Router();

const brands = require('../models/brand');

// Route to get all brands
router.get('/', (req,res,next)=>{
    brands.getAllBrands((err,doc)=>{
        if(err){
            res.json({success: false, msg: 'Could not fetch brands!'});
        } else {
            res.json(doc);
        }
    });
});

// Route to get brands by ID
router.get('/brandsById', (req, res, next)=>{
    brands.getBrandsById(req.body.id, (err, doc)=>{
        if (err){
            res.json({success: false, msg: 'Could not fetch brands!'});
        }else{
            res.json(doc);
        }
    });
});


// Route to Add brands
router.post('/addBrands', (req, res, next)=>{
    let newBrands = new brands({
        brandsName: req.body.brandsName
    });

    brands.addBrands(newBrands, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to  Add!'});
        }else{  
            res.json({success: true, msg: 'Successfully Added!'});
        }
    });
});

// Route to Update Brands
router.put('/updateBrands', (req, res, next)=>{
    let newBrands = new brands({
        _id: req.body.id,
        brandsName: req.body.brandsName
    });
    console.log();
    brands.updateBrands(newBrands, (err, doc)=>{
        if(err){
            res.json({success: false, msg:'Failed to Update!'});
        }else{
            res.json({success: true, msg:'Successfully Updated!'});
        }
    });
});

// Route to remove Brands
router.delete('/removeBrands', (req,res,next)=>{
    brands.removeBrands(req.body.id, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Remove!'});
        }else{
            res.json({success: true, msg:'Successfully Removed!'});
        }
    });
});

module.exports = router;