const Seq = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('../config');

const sequelize = new Seq(config.db);

fs
  .readdirSync(path.resolve(__dirname, '../models'))
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    try {
      sequelize.import(path.resolve(__dirname, '../models', file));
    } catch (e) {
      console.log(e);
    }
  });

sequelize.sync();

module.exports = sequelize;

/**
 * 连接mysql
 */

/* 常用连接方式 */
/*const db = new Seq('myExpress', 'root', '683004', {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: '3306',
});*/
/* 通过URL连接 */
/*const db = new Seq('mysql://root:683004@localhost:3306/myExpress', {});
const db = new Seq('mysql://root:683004@52.193.105.230:3306/awesome', {});
*/

/**
 * 连接sqlite
 */
/*const db = new Seq({
  dialect: 'sqlite',
  storage: 'test.sqlite',
  logging: function() {},
});*/