import React from 'react'
import { useState,useEffect } from 'react';

//API
import { fakeProducts } from '../Services/API';

export const productsContext = React.createContext();

export const ContextProducts = (props) => {


    const [products, setproducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setproducts(await fakeProducts());
        };
        fetchData();
        
    }, [])

    return (
        <div>
            <productsContext.Provider value={products} >
                {props.children}
            </productsContext.Provider>
        </div>
    )
}
