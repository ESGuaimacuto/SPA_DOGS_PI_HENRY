const {Dog, Temperament} = require("../db")
const axios = require("axios")
const { response } = require("express")
const {YOUR_API_KEY } = process.env
const URL = "https://api.thedogapi.com/v1/breeds/search?q="
const {Op} = require("sequelize") 

const nameDogs = async (req, res) => {
    console.log("Entré a al ruta de busqueda por nombre");
    try {
        const {name} = req.query;
        console.log(name)
        if(!name) throw Error("Información insuficiente")
        const result = []
		//consulta a la base de datos
        const dogsRazas = await Dog.findAll({
            where:{
                name:{
                [Op.iLike]:`%${name}%` 
                }
            },
            include:{
                model: Temperament,
                attributes:["name"],
                through:{
                    attributes:[],
                },
            },
        })
        if(dogsRazas[0] === undefined) result
        else{
            result.push(dogsRazas)
        }
       
        if(name){
            const respuesta = await axios.get(`${URL}${name}`)
            const {data} = respuesta
            //console.log(data[0]);
            if(data[0] === undefined) result
            else{
                const {id, height, weight, life_span, image, temperament} = respuesta.data[0]
                const nameByApi = {
                    id,
                    name,
                    height: height.metric, 
                    weight: weight.metric, 
                    life_span, 
                    image, 
                    created: false, 
                    temperament
                };
                result.push(nameByApi)
            }
		}
        
        if(result.length < 1) return res.status(400).send("Información no encontrada")
        else{
            return res.status(200).json(result)
        }
    
    } catch (error) {
        return res.status(500).send(error.message)
    }
};
module.exports = nameDogs;