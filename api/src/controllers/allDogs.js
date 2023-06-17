const {Dog, Temperament} = require("../db");
const axios = require("axios")
const {YOUR_API_KEY , URL} = process.env
const cleanArray = require("../controllers/clean")

//Solicitud DB
const allDogs = async (req, res) => { 
    console.log("Entre al controller de todos los perros");
    try {
          const responseDB = await Dog.findAll({
                attributes: [
                  "id",
                  "name",
                  "height",
                  "weight",
                  "life_span",
                  "image",
                  "created",
                ],
                include: {
                  model: Temperament,
                  attributes: ['name'],
                  through: {
                    attributes: [],
                },
            },
        });
        console.log(responseDB); 
        
        //Solicitud API            
        const apiDogsRaw = (await axios.get(`${URL}/?api_key=${YOUR_API_KEY}`)).data; 
        const apiDogs = cleanArray(apiDogsRaw)   
        return res.status(200).json([...responseDB, ...apiDogs].flat())
       
    } catch (error) {
        return res.status(500).send(error.message)
    };  
};
module.exports = allDogs;

