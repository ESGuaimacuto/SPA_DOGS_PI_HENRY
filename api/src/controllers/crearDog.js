const {Dog, Temperament} = require("../db");

const crearDogs = async (req, res) => {
    console.log("Entre al controller de crear los perros");
    try {
        const {name, image, height, weight, life_span, temperament} = req.body;
    
        if(!name || !height || !weight || !life_span || !temperament) return res.status(400).send("No fueron recibidos todos los datos necesarios")

        //const temp = await Temperaments.findOrCreate({where: {name: temperament}})
       
        const dog = await Dog.findOne({where:{name}})
        if(!dog) {
            const dogCreate = await Dog.create({name, image, height, weight, life_span})
            dogCreate.addTemperaments(temperament)
            return res.status(200).json(dogCreate) 
        }
        else {
            return res.status(400).send("Perro ya agrado")
        }
       
        }
    catch (error) {
        return res.status(500).send(error.message)
    };
};

module.exports = crearDogs;