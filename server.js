//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');


// controller-----------------------------------------------
const appController = require('./controllers/controller.js')
//----------------------------------------------------------
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;






//---trying uploading 1=------------------------------------
// const multer = require('multer');
// const upload = multer({dest: 'public/images/phots/'});
//
// app.use(express.json());
// // app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));
//-----------------------------------------

// trial 2
const multer = require('multer');
const upload = multer({dest: 'public/images/phots2/'});
// const imageUpload = multer({
//       storage: imageStorage,
//       limits: {
//         fileSize: 1000000 // 1000000 Bytes = 1 MB
//       },
//       fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(png|jpg)$/)) {
//            // upload only png and jpg format
//            return cb(new Error('Please upload a Image'))
//          }
//        cb(undefined, true)
//     }
// })
// const imageStorage = multer.diskStorage({
//     // Destination to store image
//     destination: '/uploads/photos',
//       filename: (req, file, cb) => {
//           cb(null, file.fieldname + '_' + Date.now()
//              + path.extname(file.originalname))
//             // file.fieldname is name of the field (image)
//             // path.extname get the uploaded file extension
//     }
// });




// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))



// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
app.use('/', appController)


//localhost:3000
app.get('/' , (req, res) => {
  res.render('index.ejs');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
