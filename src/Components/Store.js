import React from 'react'
import { useContext } from 'react'

//components
import { Item } from './Item'

//style
import styles from "./Store.module.css"

//context
import {productsContext} from "../Contexts/ContextProducts"

export const Store = () => {

    const product = useContext(productsContext);

    return (
        <div className={styles.container} >
          { product.map(detail =>  <Item key={detail.id} details={detail}  />)} 
        </div>
    )
}
