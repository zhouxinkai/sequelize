const Seq = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const Pets = sequelize.define('Pets', {
    id: {
      type: Seq.STRING(50),
      primaryKey: true,
    },
    name: Seq.STRING(100),
    gender: Seq.BOOLEAN,
    birth: Seq.DATE,
    version: Seq.BIGINT,
    createdAt: Seq.BIGINT,
    updatedAt: Seq.BIGINT,
  }, {
    timestamps: false,
  });
  return Pets;
};