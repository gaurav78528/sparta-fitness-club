import { get_Gift_failure, get_Gift_loading, get_Gift_success } from "./actionType";

const initstate={
    isloading:false,
    isError:false,
    gift:[]
};
export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case get_Gift_loading:{
            return {...state,isloading:true}
        }
        case get_Gift_success:{
          //  console.log(payload);
            return {...state,isloading:false,gift:payload}
        }
        
        case get_Gift_failure:{
            return {...state,isError:true}
        }
        default:
    return state;
    }
}