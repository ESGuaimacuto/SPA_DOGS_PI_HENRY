const {Temperaments} = require("../db");

const allTemperaments = async (req, res) => {
    try {
        if(req.query)  return res.status(200).json(await Temperaments.findAll())
        else{
            throw Error("Información no disponible") //los temperamentos deben ser buscados en la API y guardados en la DB para su posterior consulta. PENDIENTE
        };
            // if((await Temperaments.findAll()).length !== 0) return res.status(200).json(await Temperaments.findAll())
            // else { throw Error("Información no disponible")
            // }
                
    } catch (error) {
        return res.status(500).send(Error.message)
    };
};

module.exports = allTemperaments;