const express = require('express');
const cartSession = require('../models/sessionCart');
const router = express.Router();

// Get route for sub-categories by categoryName
router.post('/cartItems', (req,res,next)=>{
    cartSession.getCartBySession(req.body.sessionId, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Could not fetch cart-tems'});
        }else{
            res.json(doc);
        }
    });
});

// Get route to Add new Sub-category
router.post('/addCartItem', (req,res,next)=>{
    let cartItem = new cartSession({
        sessionId: req.body.sessionId,
        prodCode: req.body.prodCode,
        prodName: req.body.prodName,
        prodImage: req.body.prodImage,
        brandName: req.body.brandName,
        qty: req.body.qty,
        price: req.body.price
    });    
    cartSession.addToCart(cartItem, (err, doc)=>{
        if(err){
            res.json({success: false, msg:'Failed to create Sub-Category'});
        }else{
            res.json({success:true, msg:'Successfully Created!'});
        }
    });
});


// Route to update Product
router.put('/updateCart', (req, res, next)=> {

    let cartItem = new cartSession({
        _id: req.body.id,
        sessionId: req.body.sessionId,
        prodCode: req.body.prodCode,
        prodName: req.body.prodName,
        prodImage: req.body.prodImage,
        brandName: req.body.brandName,
        qty: req.body.qty,
        price: req.body.price
    }); 

    cartSession.updateCartItem(cartItem, (err, doc)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Update!'});
        }else{
            res.json({success: true, msg:'Successfully Updated!'});
        }
    });
});

// Route to remove product
router.delete('/removeCartItem', (req,res,next)=>{
    
    cartSession.removeCartItem(req.query.id, (err, doc)=>{
        if(err){
            res.json({success: false, msg:'Failed to Remove!'});
        }else{
            res.json({success: true, msg:'Successfully Removed!'});
        }
    });
});



module.exports = router;