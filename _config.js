var config = {}

// MongoDB configuration using environment variables
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://jtaraya:Code_Zone$23@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://jtaraya:Code_Zone$23@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://jtaraya:Code_Zone$23@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
