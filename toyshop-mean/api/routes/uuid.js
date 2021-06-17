const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


router.get('/', (req,res,next) => {
    //console.log("i'm here");
    const sessionId = {'id': uuidv4()};
    console.log(sessionId);
    res.send(sessionId);
});

module.exports = router;