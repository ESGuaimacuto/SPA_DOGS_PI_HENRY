const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('Temperaments', {
    Id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};