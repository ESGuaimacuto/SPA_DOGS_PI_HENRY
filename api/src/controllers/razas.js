const {Dogs} = require("../db")
const axios = require("axios")
const {YOUR_API_KEY} = process.env
const URL = "https://api.thedogapi.com/v1/breeds/search?q={raza_perro}"


 const razas = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) throw Error("Información insuficiente")
        if(id === error) throw Error("Id no existente")
        
        const allRazas = await Dogs.findOne({where:{id}})

        const razasAPI = await axios.get(`${URL}/${id}/$?api_key=${YOUR_API_KEY}`)

        let combinacionDB_API = {
            allRazas,
            razasAPI
        }
        return res.status(200).json(combinacionDB_API)

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = razas;