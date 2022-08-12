const express = require('express')
const router = express.Router()
const Schema = require('../models/schema.js')


//-----------------------------------------------
//        MAIN PAGE
//-----------------------------------------------
router.get('/', (req, res) => {
    Schema.find({}, (err, item) => {
        res.render('index.ejs',
        {
          item: item
        })
    })

})
//-----------------------------------------------


//-----------------------------------------------
//        COLLECTIONS PAGE
//-----------------------------------------------
router.get('/collections', (req, res) => {
    Schema.find({}, (err, item) => {
        res.render('collections.ejs',
        {
          item: item
        })
    })

})














module.exports = router
