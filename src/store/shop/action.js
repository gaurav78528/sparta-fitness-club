import axios from "axios"
import * as type from "./actionType";

 export const getAllgift=()=>(dispatch)=>{
   dispatch ({type:type.get_Gift_loading})
   return axios.get("http://localhost:8080/gift")
   .then((res)=>{
   // console.log(res.data);
    dispatch({type:type.get_Gift_success,payload:res.data})
    
})

    .catch((err)=>{
        dispatch({type:type.get_Gift_failure})
   })
 }