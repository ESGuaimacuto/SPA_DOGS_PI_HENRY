const {Dog} = require("../db")
const axios = require("axios")
const {YOUR_API_KEY, URL} = process.env


 const razas = async (req, res) => {
    console.log("Entre al controller de busqueda por ID");
    
    try {
        const {id} = req.params;
        if(!id) throw Error("Información insuficiente")
        //if() return res.status(400).send("Número del indentificador incorrecto o inexistente")
        if(id) {
            const {name, height, weight, life_span, image, temperament} = (await axios.get(`${URL}/${id}`)).data;
            
            const razasAPI = {
                id,
                name,
                height: height.metric, 
                weight: weight.metric, 
                life_span, 
                image, 
                created: false, 
                temperament
            };
            
          const responseDB = await Dog.findAll({where:{id}},{
                attributes: [
                    "id",
                    "name",
                    "height",
                    "weight",
                    "life_span",
                    "image",
                    "created",
                    "temperament"
                ]
            }
            );
            return res.status(200).json([razasAPI, ...responseDB])
        };      

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = razas;