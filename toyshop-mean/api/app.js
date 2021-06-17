const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
mongoose.connect(config.database);

// On Connection 
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to DB: ${config.database}`);
});

// On Error 
mongoose.connection.on('error', (err)=>{
    console.log('database error: ' + err);
});

const app = express();
const adminUsers = require('./routes/adminUsers');
const categories = require('./routes/categories');
const subCategories = require('./routes/subCategories');
const brands = require('./routes/brands');
const products = require('./routes/products');
const uuid = require('./routes/uuid');
const cartSession = require('./routes/cartSession');

const port = process.env.port | 3000;

// Middleware CORS
app.use(cors());

// Add static folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware body-parser
app.use(bodyParser.json());

// Middleware Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Users route
app.use('/adminUsers', adminUsers);

// Categories route
app.use('/categories', categories);

// Sub-Categories route
app.use('/subCategories', subCategories);

// Brands Route
app.use('/brands', brands);

// CartSession Route
app.use('/cart', cartSession);

// Products Route
app.use('/products', products);

// generate UUID
app.use('/uuid', uuid);

// Index Route
app.get('/', (req,res)=>{
    res.send('Invalid entrypoint!');
});



// Listen
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`);
})