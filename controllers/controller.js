const express = require('express')
const router = express.Router()
const methodOverride  = require('method-override');
const Schema = require('../models/schema.js')
const app = express ();

//-------~~~~~~~~~~~~~~~~~~~~~~~~~~
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/photos/')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})



app.use(methodOverride('_method'))



//-----------------------------------------------
//        UPLOAD ROUTE ~~~~~~~~~~~~~~~
//-----------------------------------------------
router.post('/upload', upload.single('image'), (req, res) => {
  res.redirect('/new')
})

//-----------------------------------------------
//        POST ROUTE
//-----------------------------------------------
router.post('/new', (req, res) => {
  Schema.create(req.body, (error, newItem) => {
    res.redirect('/collections')
  })
})


//-----------------------------------------------
//        NEW ROUTE
//-----------------------------------------------
router.get('/new', (req, res) => {
    res.render('new.ejs', {test:'add'})
})


//-----------------------------------------------
//        EDIT ROUTE
//-----------------------------------------------
router.get('/edit/:id', (req, res) => {
    Schema.findById(req.params.id, (err, item ) =>{
        res.render('edit.ejs', {item: item, test:''})
    })
})

router.put('/edit/:id', (req,res) => {
    Schema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,update) => {
        res.redirect('/collections')
    })
})


//-----------------------------------------------
//        INDEX ROUTE
//-----------------------------------------------
router.get('/', (req, res) => {
    Schema.find({}, (err, item) => {
        res.render('index.ejs', {item: item, test:''})
    })
})


//-----------------------------------------------
//        COLLECTIONS ROUTE
//-----------------------------------------------
router.get('/collections', (req, res) => {

    Schema.find({archive: false}, (err, item) => {
        res.render('collections.ejs',{item: item, test:'coll'})
    })
})


//-----------------------------------------------
//        ARCHIVES/UNARCHIVE ROUTES
//-----------------------------------------------
router.get('/archives', (req, res) => {
    Schema.find({archive: true}, (err, item) => {
        res.render('collections.ejs', {item: item, test:'arch'})
    })
})
router.get('/archives/:id', (req, res) => {
    Schema.findByIdAndUpdate(req.params.id, {archive: true}, {new: true}, (err, item ) =>{
      res.redirect('/archives')
    })
})
router.get('/unarchive/:id', (req, res) => {
    Schema.findByIdAndUpdate(req.params.id, {archive: false}, {new: true}, (err, item ) =>{
      res.redirect('/collections')
    })
})

//-----------------------------------------------
//        SHOW ROUTE
//-----------------------------------------------
router.get('/show/:id', (req, res) => {
    Schema.findById(req.params.id, (err, item) => {
        res.render('show.ejs', {item: item, test:''})
    })
})


//-----------------------------------------------
//       DELETE ROUTES
//-----------------------------------------------
router.delete('/show/:id', (req, res) => {
    Schema.findByIdAndRemove(req.params.id, (err, deleted) =>{
        res.redirect('/collections')
    })
})
router.delete('/edit/:id', (req, res) => {
    Schema.findByIdAndRemove(req.params.id, (err, deleted) =>{
        res.redirect('/collections')
    })
})


//-----------------------------------------------
//        CONTACT ROUTE
//-----------------------------------------------
router.get('/contact', (req, res) => {
    res.render('contact.ejs', {test:'cont'})
})

//-----------------------------------------------
//        SEED THE DATA
//-----------------------------------------------
// const Data = require('./models/seed.js')
// Schema.create(Data, (err, data) => {
//     console.log ('added provided data into collections')
// })
//-----------------------------------------------
//        UPDATE ARCHIVE INFO
//-----------------------------------------------
// Schema.updateMany({}, {archive: false}, {new:true}, (err,update) => {
//   console.log('Updated archive info to all false')
// })













module.exports = router
