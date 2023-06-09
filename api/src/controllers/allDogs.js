const {Dogs, Temperaments} = require("../db");
const axios = require("axios")
const {YOUR_API_KEY , URL} = process.env
const cleanArray = require("../controllers/clean")

const allDogs = async (req, res) => { //Falta la consulta a la API para el envío de la información de los perros disponibles. PENDIENTE
    try {
        if(req.query){
            const responseDB = await Dogs.findAll({
                attributes: [
                  'id',
                  'name',
                  'altura',
                  'peso',
                  'añosDeVida',
                  'imagen',
                  'created',
                ],
                include: {
                  model: Temperaments,
                  attributes: ['name'],
                  through: {
                    attributes: [],
                  },
        },
        }); //Solicitud DB
        const apiDogsRaw = (await axios.get(`${URL}/?api_key=${YOUR_API_KEY}`)).data; 
        
        const apiDogs = cleanArray(apiDogsRaw)
        
    
        // const { data } = await axios.get(`${URL}/?api_key=${YOUR_API_KEY}`);
        // const {id, name, image, weight, height, temperament} = data
        // let responseAPI = [{
        //         id,
        //         name,
        //         image,
        //         weight,
        //         height,
        //         temperament
        //     }];
        // let combiteResponse = {
        // responseDB,
        // responseAPI
        // }
        return res.status(200).json([...responseDB, ...apiDogs].flat())
        }            
        else{
            res.status(404).send("Información no disponible")
        }
    } catch (error) {
        return res.status(500).send(error.message)
    };
    
};

module.exports = allDogs;

