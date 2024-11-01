import { configureStore, createSlice } from "@reduxjs/toolkit";
import NonVeg from "./NonVeg";
import Veg from "./Veg";


    const ProductsSlice=createSlice({
        name:'products',
        initialState:{
            veg:[
                {name:'Tomato',price:200.5},
                {name:'potato',price:100.8},
                {name:'carrot',price:150.8},
                {name:'beetroot',price:180.8},
                {name:'cucumber',price:120.8}

            ],
            nonveg:[
                {name:'chicken',price:800.0},
                {name:'fish',price:1000.0},
                {name:'prawns',price:1000.0},
                {name:'egg',price:1000.0},
                {name:'mutton',price:1000.0}
            ],

        },
        reducers:{}
    }
   
    
)
   
    const cartSlice=createSlice({
        name:'cart',
        initialState:[],
        reducers:{
            addToCart:(state,action)=>{
                const item=state.find(item=>item.name===action.payload.name);
                if(item){
                    item.quantity+=1;
    
                }
                else{
                    state.push({...action.payload,quantity:1});
                }
            },
        
            increment:(state,action)=>{
                const item=state.find((item)=>item.name===action.payload.name);
                if(item)item.quantity+=1;
                   },
                   decrement:(state,action)=>{
                    const item=state.find((item)=>item.name===action.payload.name);
                    if(item&&item.quantity>1)
                        {
                            item.quantity-=1;
                        }

                   else{
                        return state.filter(item=>item.name!==action.payload.name);
                    }
                },
                  removeitem:(state,action)=>{
                    return state.filter((item)=>item.name!==action.payload.name);
                  },
                }
            });  
                    
                    
              
    export const {addToCart,increment,decrement,removeitem,applyDiscount} =cartSlice.actions;
    const store=configureStore({
        reducer:{
            products:ProductsSlice.reducer,
            cart:cartSlice.reducer,
       }
    });
    


export default store;

