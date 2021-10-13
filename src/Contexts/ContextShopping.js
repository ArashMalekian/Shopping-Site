import React, { createContext } from 'react'
import { useReducer } from 'react'

const initialState = {
    selected :[],
    itemCounter:0,
    total:0,
    checked:false,
}

const sumItems = items => {
    const itemCounter =items.reduce((total , product) => total + product.quantity , 0 );
    const total = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return {itemCounter , total}
}

const calcFunc =(state , action) =>{
    switch(action.type) {
        case "ADD" :
            if (!state.selected.find(item => item.id === action.payload.id)) {
                state.selected.push({...action.payload , quantity : 1})
            }
        return {
            ...state, selected:[...state.selected] ,
            ...sumItems(state.selected)
        }

        case "REMOVE" : 
        { 
            const newSelectedItem = state.selected.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selected:[...newSelectedItem]
                ,
            ...sumItems(newSelectedItem)
            }
        }
        case "PLUS" :{
            const indexP = state.selected.findIndex(item => item.id === action.payload.id);
            state.selected[indexP].quantity++;
            return{
                ...state,
                ...sumItems(state.selected)
            }
        }
        case "MINUS" : {
            const indexM = state.selected.findIndex(item => item.id === action.payload.id);
            state.selected[indexM].quantity--;
            return{
                ...state,
                ...sumItems(state.selected)
            }
        }
        case "CLEAR" :
            return{
                selected :[],
                 itemCounter:0,
                 total:0,
                checked:false,
            }

        case "CHECKOUT" : 
        return{
            selected :[],
            itemCounter:0,
            total:0,
            checked:true,
        }
        default : return state;

        
        
    }

}

export const shopContext = createContext()


export const ContextShopping = (props) => {

    const [state, dispatch] = useReducer(calcFunc, initialState)

    return (
        <div>
            <shopContext.Provider value={{state, dispatch}} >
            {props.children}
            </shopContext.Provider>
        </div>
    )
}
