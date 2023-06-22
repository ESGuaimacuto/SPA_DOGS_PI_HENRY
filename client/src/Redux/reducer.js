import { GET_DOGS, ORDER_BY_NAME, ORDER_BY_WEIGHT, DOGS_DETAIL, SEARCH_BY_NAME, FILTER_BY_CREATED, FILTER_BY_TEMPERAMENT, POST_DOG, GET_TEMPERAMENTS} from "./actionTypes";

const initialState = {
    temperaments: [],
    dogs: [], 
    detail: [],
    respaldoDogs: [],
    currentPage: 1
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs:action.payload,
                respaldoDogs: action.payload
            };
            
        case ORDER_BY_NAME:
            let orden = [...state.dogs];
            orden.sort((a, b) => {
                if (action.payload === 'AZ') {
                    return a.name.localeCompare(b.name);
                  } else if (action.payload === 'ZA') {
                    return b.name.localeCompare(a.name);
                  }
                  return 0;
            });
            return {
                ...state,
                dogs: orden
            }
        case ORDER_BY_WEIGHT:
            let ordenarPeso = [...state.dogs];
            ordenarPeso.sort((a, b)=>{
                const pesoA = Number(a.weight.split("-")[0])
                const pesoB = Number(b.weight.split("-")[0])

                if(action.payload === "HIGH"){
                    return pesoB - pesoA;
                } else if (action.payload === "LESS"){
                    return pesoA - pesoB
                } else {
                    return 0
                }
            })
            return{
                ...state,
                dogs: ordenarPeso,
            }

        case DOGS_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case SEARCH_BY_NAME:
            return{
                ...state,
                dogs: action.payload
            }

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments:action.payload,
            }

        case POST_DOG:
            return {
                ...state,
            }

        case FILTER_BY_CREATED:
        const prueba = state.respaldoDogs;
            let createFilter;
            if (action.payload === 'ALL') {
                createFilter = prueba;
            } else {
                createFilter =
                action.payload === 'true'
                    ? prueba.filter((e) => e.created)
                    : prueba.filter((e) => !e.created);
            }
            return {
                ...state,
                dogs: createFilter,
            };



            // if(action.payload === "false"){
            //     console.log("Entre a la action de los traidos de la API")
            //     const API = state.dogs.filter(element => element.created === action.payload)
            //     console.log(API);
            //     let byAPI = API
            //     return {
            //         ...state,
            //         dogs: byAPI
            //     }  
            // }
            // if(action.payload === "true"){
            //     console.log("Entre a la action de los creados");
            //     const creados = state.dogs.filter(element => element.created === action.payload)
            //     let byCreated = creados
            //     if(byCreated.length === 0) return alert("No existen perros Creados")
            //     console.log(byCreated);
            //     return {
            //         ...state,
            //         dogs: byCreated
            //     }
            // }else{
            //     console.log("Tengo que devolver todos los perros");
            //     return {
            //         ...state,
            //         dogs: state.respaldoDogs
            //     }
            // }

            
        case FILTER_BY_TEMPERAMENT:
            let allDogs = state.dogs;
            let filterTemp = 
            action.payload === "ALL"
            ? allDogs 
            : allDogs.filter((dogi) => dogi.temperament?.includes(action.payload))
            if(filterTemp.length === 0) filterTemp = []
            return{
                ...state,
                dogs: filterTemp
            }

        default:
            return {...state}
    }
};

export default reducer;