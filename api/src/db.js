require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {  DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const DogsModel = require("./models/Dog")
const TempModel = require("./models/Tempramentos")

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, native: false, 
});

DogsModel(sequelize)
TempModel(sequelize)

const { Dogs, Temperaments } = sequelize.models;

Dogs.belongsToMany(Temperaments, {through: "dogs_temperamentos"});
Temperaments.belongsToMany(Dogs, {through: "dogs_temperamentos"});

module.exports = {
...sequelize.models,
Dogs,
Temperaments,
conn: sequelize,
};
