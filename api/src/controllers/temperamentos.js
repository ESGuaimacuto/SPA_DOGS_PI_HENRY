const {Temperament} = require("../db");
const axios = require("axios")
const {YOUR_API_KEY , URL} = process.env

const allTemperaments = async (req, res) => {
    try {
        if(req.query) {
            const {data} = (await axios.get(`${URL}/?api_key=${YOUR_API_KEY}`))
           
            const apiTemperaments = data.map((data) => data.temperament);
            
            const apiTemperamentsClean = new Set(apiTemperaments.join().replace(/\s/g, "")
            .split(",").sort()
            )
            
            const temperamentsDB = []
            for(const i of apiTemperamentsClean){
                if(i !== undefined && i !== ""){
                    const responseDB = await Temperament.findOrCreate({where:{name: i}})
                    if(responseDB) temperamentsDB.push(responseDB)
                }
            };             
            return res.status(200).json(temperamentsDB)
        } 

        else{
            throw Error("Información no disponible") 
        };               
    } catch (error) {
        return res.status(500).send(error.message)
    };
};

module.exports = allTemperaments;