var config = {}

config.mongoURI = {
  production: process.env.MONGODB_URI || 'mongodb://localhost:27017/darkroom-prod',
  development: 'mongodb://localhost:27017/darkroom-dev',
  test: 'mongodb://localhost:27017/darkroom-test',
}

module.exports = config;
