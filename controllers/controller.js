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


//-----------------------------------------------
//        SHOW PAGE
//-----------------------------------------------
router.get('/show/:id', (req, res) => {
    Schema.findById(req.params.id, (err, item) => {
        res.render('show.ejs',
        {
          item: item
        })
    })

})















module.exports = router
