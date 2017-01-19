const path = require('path');

const config = {
  db: {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, './test.sqlite'),
  },
};
module.exports = config;