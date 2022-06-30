import axios from "axios";
import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionType"

export const getBooks=(params)=>(dispatch)=>{
    dispatch({type:GET_BOOKS_REQUEST});
    axios.get("http://localhost:8080/Books",params)
    .then((r)=>dispatch({type:GET_BOOKS_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_BOOKS_FAILURE}))
}
    