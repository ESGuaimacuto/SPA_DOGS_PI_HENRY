const {Dogs} = require("../db");

const crearDogs = async (req, res) => {
    try {
        const {name, imagen, altura, peso, añosDeVida} = req.body;
    
        if(!name || !altura || !peso || !añosDeVida) return res.status(400).send("No fueron recibidos todos los datos necesarios")

        const newDog = await Dogs.findOrCreate({where:{name, imagen, altura, peso, añosDeVida}}) 
        return res.status(200).json(newDog)
        }
    catch (error) {
        return res.status(500).send(error.message)
    };
};

module.exports = crearDogs;