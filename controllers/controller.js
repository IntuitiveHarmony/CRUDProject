const express = require('express')
const router = express.Router()
const methodOverride  = require('method-override');
const Schema = require('../models/schema.js')
const app = express ();

//--------------------- upload trial 1--------------------
// const morgan = require('morgan')
// const multer = require('multer');
// const upload = multer({dest: 'public/images/phots/'});
//
// app.use(express.json());
// // app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));

// app.use(express.static(__dirname, 'public'));
//--------------------------------------------------------

//trial 2
const multer = require('multer');
// const imageStorage = multer.diskStorage({
//     // Destination to store image
//     destination: 'images',
//       filename: (req, file, cb) => {
//           cb(null, file.fieldname + '_' + Date.now()
//              + path.extname(file.originalname))
//             // file.fieldname is name of the field (image)
//             // path.extname get the uploaded file extension
//     }
// });



app.use(methodOverride('_method'))

//-----------------------------------------------
//       Upload ROUTE  trial 1
//-----------------------------------------------
// router.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     console.log("No file received");
//     return res.send({
//       success: false
//     });
//
//   } else {
//     console.log('file received');
//     return res.send({
//       success: true
//     })
//   }
// });



//-----------------------------------------------
//        POST ROUTE
//-----------------------------------------------
router.post('/new', (req, res) => {
  Schema.create(req.body, (error, newItem) => {
    res.redirect('/collections', {test:''})
  })
})


//-----------------------------------------------
//        NEW ROUTE
//-----------------------------------------------
router.get('/new', (req, res) => {
    res.render('new.ejs', {test:''})
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
        res.redirect('/collections', {test:''})
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
      res.redirect('/archives', {test:''})
    })
})
router.get('/unarchive/:id', (req, res) => {
    Schema.findByIdAndUpdate(req.params.id, {archive: false}, {new: true}, (err, item ) =>{
      res.redirect('/collections', {test:''})
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
//       DELETE ROUTE
//-----------------------------------------------
router.delete('/show/:id', (req, res) => {
    Schema.findByIdAndRemove(req.params.id, (err, deleted) =>{
        res.redirect('/collections', {test:''})
    })
})


//-----------------------------------------------
//        CONTACT ROUTE
//-----------------------------------------------
router.get('/contact', (req, res) => {
    res.render('contact.ejs', {test:''})
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
