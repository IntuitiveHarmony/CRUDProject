const express = require('express')
const router = express.Router()
const methodOverride  = require('method-override');
const Schema = require('../models/schema.js')
const app = express ();
app.use(methodOverride('_method'))


//-----------------------------------------------
//        POST ROUTE
//-----------------------------------------------
router.post('/new', (req, res) => {
  Schema.create(req.body, (error, newItem) => {
    console.log(req.body)
    res.redirect('/collections')
  })
})


//-----------------------------------------------
//        NEW ROUTE
//-----------------------------------------------
router.get('/new', (req, res) => {
    res.render('new.ejs')
})


//-----------------------------------------------
//        EDIT ROUTE
//-----------------------------------------------
router.get('/edit/:id', (req, res) => {
    Schema.findById(req.params.id, (err, item ) =>{
        res.render('edit.ejs', {item: item})
    })
})

router.put('/edit/:id', (req,res) => {
    Schema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,update) => {
      console.log(update)
  
        res.redirect('/collections')
    })
})


//-----------------------------------------------
//        MAIN ROUTE
//-----------------------------------------------
router.get('/', (req, res) => {
    Schema.find({}, (err, item) => {
        res.render('index.ejs', {item: item})
    })
})


//-----------------------------------------------
//        COLLECTIONS ROUTE
//-----------------------------------------------
router.get('/collections', (req, res) => {
    Schema.find({}, (err, item) => {
        res.render('collections.ejs', {item: item})
    })
})


//-----------------------------------------------
//        SHOW ROUTE
//-----------------------------------------------
router.get('/show/:id', (req, res) => {
    Schema.findById(req.params.id, (err, item) => {
        res.render('show.ejs', {item: item})
    })
})


//-----------------------------------------------
//       DELETE ROUTE
//-----------------------------------------------
router.delete('/show/:id', (req, res) => {
    Schema.findByIdAndRemove(req.params.id, (err, deleted) =>{
        res.redirect('/')
    })
})





//-----------------------------------------------
//        CONTACT ROUTE
//-----------------------------------------------
router.get('/contact', (req, res) => {
    res.render('contact.ejs')
})















module.exports = router
