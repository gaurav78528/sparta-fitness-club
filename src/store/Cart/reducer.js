
import * as types from "./CartType"
const initstate={
    product:[],
    TotalPrice:0,
    TotalQuantity:0
}
const reducer=(state=initstate,action)=>{
   const {type,payload}=action
   switch(type){
   
    case types.Cart_Update:
       
    
//    console.log(state,"state");
    let newProduct = [...state.product,payload]
    console.log(state)
    const totalPrice= newProduct.reduce((prev,next)=>{ return Number(prev)+ Number(next.price)},0)
    console.log(totalPrice)

    return {...state,product:newProduct ,TotalPrice:totalPrice,TotalQuantity:newProduct.length}

   case types.cart_Delete : 
   let filterdata=state.product.filter((el)=>el.id!==payload)
   const Afterdelete= filterdata.reduce((prev,next)=>{ return Number(prev)+ Number(next.price)},0)
   return{...state,product:filterdata,TotalPrice:Afterdelete}
   

  //return [...state.product,payload]
    // case types.cart_length:
    // c=
    // console.log(length);
    // return {TotalQuantity:length}

    default : return state;
   }
}
export {reducer}