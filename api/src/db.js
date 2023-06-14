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

const { Dog, Temperament } = sequelize.models;

Dog.belongsToMany(Temperament, {through: "dogs_temperaments"});
Temperament.belongsToMany(Dog, {through: "dogs_temperaments"});

module.exports = {
...sequelize.models,
Dog,
Temperament,
conn: sequelize,
};
