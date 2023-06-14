const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 sequelize.define('Temperament', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      //type: DataTypes.ENUM(),
      allowNull: false,
    },
  },{
    timestamps: false
  });
};