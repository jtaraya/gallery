var config = {}

// MongoDB configuration using environment variables
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;

// Update to have your correct username and password
config.mongoURI = {
    production: `mongodb+srv://${username}:${password}@${cluster}/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://${username}:${password}@${cluster}/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://${username}:${password}@${cluster}/darkroom-test?retryWrites=true&w=majority`,
}
module.exports = config;
