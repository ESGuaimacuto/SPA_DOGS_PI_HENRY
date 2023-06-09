const {Dogs} = require("../db")

 const nameDogs = async (req, res) => {
    try {
        const {name} = req.query;
        const dogsRazas = await Dogs.findOne({where:{name}})
        
        if(!dogsRazas) throw Error("Información insuficiente")
        return res.status(200).json(dogsRazas)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = nameDogs;