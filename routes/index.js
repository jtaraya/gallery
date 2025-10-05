const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let upload = require('./upload');
const url = require('url')
let Image = require('../models/images');

// GET - List all images (FIXED: converted to async/await)
router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});  // ← Changed from callback to await
    res.render('index', { images: images, msg: req.query.msg });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching images');
  }
});

// POST - Upload image (FIXED: converted to async/await)
router.post('/upload', (req, res) => {
  upload(req, res, async (err) => {  // ← Made the callback async
    if (err) {
      res.redirect(`/?msg=${err}`);
    } else {
      console.log(req.file);
      
      if (req.file == undefined) {
        res.redirect('/?msg=Error: No file selected!');
      } else {
        try {
          // create new image
          let newImage = new Image({
            name: req.file.filename,
            size: req.file.size,
            path: 'images/' + req.file.filename
          });
          
          // save the uploaded image to the database (FIXED: added await)
          await newImage.save();  // ← Added await here
          res.redirect('/?msg=File uploaded successfully');
        } catch (saveErr) {
          console.log(saveErr);
          res.redirect('/?msg=Error saving file to database');
        }
      }
    }
  });
});

module.exports = router;
