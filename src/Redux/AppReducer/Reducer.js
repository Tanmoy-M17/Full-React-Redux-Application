import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionType"

const intialState={
    Books:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case GET_BOOKS_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_BOOKS_SUCCESS:{
            return {
                ...state,
                Books:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_BOOKS_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
            
    
        default:
            return {...state}
    }
}