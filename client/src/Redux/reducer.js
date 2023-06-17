import { GET_DOGS, ORDER_BY_NAME, ORDER_BY_WEIGHT, DOGS_DETAIL, SEARCH_BY_NAME, SEARACH_BY_ID, FILTER_BY_CREATED, FILTER_BY_TEMPERAMENT, POST_DOG, CREATED_DOG, GET_TEMPERAMENTS } from "./actionTypes";

const initialState = {
    temperaments: [],
    dogs: [], 
    detail: [],
    respaldoDogs: [],
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
                detaul: action.payload
            }

        case SEARCH_BY_NAME:

            return{
                ...state
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

            return {
                ...state,

            }

        case FILTER_BY_TEMPERAMENT:

            return{
                ...state,

            }

        default:
            return {...state}
    }
};

export default reducer;