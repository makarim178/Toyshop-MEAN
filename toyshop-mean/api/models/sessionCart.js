const mongoose = require('mongoose');
const config = require('../config/database');

const cartSchema = mongoose.Schema({
    sessionId: {
        type: String,
        required: true
    },
    prodCode: {
        type: String,
        required: true
    },
    prodName: {
        type: String,
        required: true
    },
    prodImage: {
        type: String
    },
    brandName: {
        type:String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

const cartSession = module.exports = mongoose.model('cartSession', cartSchema);


// Function to get all cartItems by User
module.exports.getCartBySession = function(sessionId, callback){
    let query = {sessionId: sessionId};
    cartSession.find(query, callback);
}

// Function to add items into cart
module.exports.addToCart = function(cartItem, callback){
    //console.log(cartItem);
    cartItem.save(callback);
}

// Function to update Cart Items into carts
module.exports.updateCartItem = function(cartItem, callback){
    console.log(cartItem);
    let query = {_id: cartItem._id};
    cartSession.findByIdAndUpdate(query, cartItem, callback);
}

// Function to remove from cart Item by ID and sessionsiD
module.exports.removeCartItem = function(id, callback){
    let query = {_id: id};
    // console.log(id);
    cartSession.findByIdAndDelete(query, callback);
}