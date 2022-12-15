import * as types from "./actionType"
const initstate={
    isloading:false,
    isError:false,
    gift:[]
};
export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case type.get_Gift_loading:{
            return {...state,isloading:true}
        }
        case type.get_Gift_success:{
            return {...state,isloading:false,gift:payload}
        }
        case type.get_Gift_failure:{
            return {...state,isError:true}
        }
        default:
    return state;
    }
}