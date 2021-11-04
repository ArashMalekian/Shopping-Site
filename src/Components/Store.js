import React from 'react'
import { useContext } from 'react'

//components
import { Item } from './Item'

// //style
// import styles from "./Store.module.css"

//context
import {productsContext} from "../Contexts/ContextProducts"

//material
import { Grid } from '@mui/material'


export const Store = () => {

    const product = useContext(productsContext);

    return (
        <Grid container display="flex" justifyContent="space-around"  >
          
          { product.map(detail =>  <Item key={detail.id} details={detail}  />)} 
          
        </Grid >
    )
}
