const Seq = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define('Users', {
    name: Seq.TEXT,
    phone: Seq.TEXT,
    mis: Seq.TEXT,
    expressCompany: Seq.TEXT,
    time: Seq.DATE,
    pickupCode: Seq.TEXT,
    status: Seq.INTEGER,
  }, {
    timestamps: false,
    instanceMethods: {}
  });

  return Users;
};
