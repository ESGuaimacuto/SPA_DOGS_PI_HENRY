import axios from "axios"
import { 
GET_DOGS,
ORDER_BY_NAME,
ORDER_BY_WEIGHT,
DOGS_DETAIL,
SEARCH_BY_NAME,
GET_TEMPERAMENTS,
FILTER_BY_CREATED,
FILTER_BY_TEMPERAMENT,
POST_DOG,
} from "./actionTypes"
const LocalHost = 'http://localhost:3001/dogs'

export const getDogs = ()=>{
    try {
        return async function(dispatch){
            let resGetDogs = await axios.get(`${LocalHost}`)
            return dispatch({
                type: GET_DOGS,
                payload: resGetDogs.data
            })
        }
    } catch (error) {
        console.log(error);       
        }
    };

export const orderByName = (value)=>{
    return {
        type: ORDER_BY_NAME,
        payload: value
        }     
    };

export const orderByWeight = (payload)=>{
    return {
        type: ORDER_BY_WEIGHT,
        payload,
        }     
    };

export const dogsDetail = (id)=>{
    try {
        return async function(dispatch){
            let resDogsDetail = await  axios.get(`${LocalHost}/${id}`)
            return dispatch({
                type: DOGS_DETAIL,
                payload: resDogsDetail.data
            })
        }
    } catch (error) {
        console.log(error);       
        }
    };

export const searchByName = (name)=>{
    try {
        return async function(dispatch){
            let resSearchByName = await  axios.get(`${LocalHost}/name?name=${name}`)
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: resSearchByName.data
            })
        }
    } catch (error) {
        alert("Dog not found");       
        }
    };

export const getTemperaments = ()=>{
    try {
        return async function(dispatch){
            let resGetTemperaments = await axios.get('http://localhost:3001/temperaments')

            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: resGetTemperaments.data
            })
        }
    } catch (error) {
        console.log(error);;       
        }
    };

export const postDog = ({name, image, height, weight, life_span, temperament})=>{
    try {
        return async function(dispatch){
            let resPostDog = await axios.post(`${LocalHost}`, {
                name,
                image,
                height: + "kg",
                weight: + "cm",
                life_span: + "years",
                temperament})
            
            alert("Created succesfull")
            return dispatch({
                type: POST_DOG,
                payload: resPostDog.data
            })
        }
    } catch (error) {
        alert("Can´t created the dog");       
        }
    };

export const filterByCreated = (payload)=>{
    return {
        type: FILTER_BY_CREATED,
        payload
        }     
    };

export const filterByTemperament = (payload)=>{
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload,
        }     
    };