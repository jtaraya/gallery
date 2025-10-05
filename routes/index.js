const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');   // ✅ updated import
let upload = require('./upload');
const url = require('url');
let Image = require('../models/images');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

<<<<<<< HEAD
const app = express();
=======

>>>>>>> 18ece3ba0c11375ef695f05c8c5c46d1e83b4531

// MongoDB connection
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


var db = [];

router.get('/', (req, res) => {
    Image.find({}, function(err, images) {
        if (err) console.log(err);
        res.render('index', { images: images, msg: req.query.msg });
    });
});

router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.redirect(`/?msg=${err}`);
        } else {
            console.log(req.file);
            if (req.file == undefined) {
                res.redirect('/?msg=Error: No file selected!');
            } else {
                // Example: using uuid to generate an ID if needed
                // const imageObj = {
                //     id: uuidv4(),
                //     name: req.file.filename,
                //     path: 'images/' + req.file.filename
                // }
                // db.push(imageObj);

                let newImage = new Image({
                    name: req.file.filename,
                    size: req.file.size,
                    path: 'images/' + req.file.filename
                });

                newImage.save();

                res.redirect('/?msg=File uploaded successfully');
            }
        }
    });
});

module.exports = router;
