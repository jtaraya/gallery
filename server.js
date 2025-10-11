const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// Get environment and database URI
const env = process.env.NODE_ENV || 'development';
const dbURI = config.mongoURI[env];

console.log(`NODE_ENV = ${env}`);
console.log(`Connecting to: ${dbURI}`);

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log(`Database connected successfully [${env}]`))
  .catch(err => console.error('MongoDB connection error:', err));

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());

app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = app;