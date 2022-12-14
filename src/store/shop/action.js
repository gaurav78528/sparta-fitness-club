import axios from "axios"
import * as type from "./actionType";

 export const getAllgift=()=>(dispatch)=>{
   dispatch ({type:type.get_Gift_loading})
   return axios.get("http://localhost:3001/gift")
   .then((res)=>{
    dispatch({type:type.get_Gift_Success,payload:res.data})
})
    .catch((err)=>{
        dispatch({type:type.get_Gift_Error})
   })
 }