import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
//context
import { productsContext } from '../Contexts/ContextProducts'

//style
import styles from "./More.module.css"

export const More = (props) => {
    const id = props.match.params.id
    const data = useContext(productsContext)
    const item = data[id-1]
    
    return (
        <div className={styles.container} >
            <img src={item.image} alt="imageofitem" />
            <div className={styles.txt} >
                <div>
            <h3 className={styles.category} >{item.category}</h3> 
            <h2>{item.title}</h2>
                </div>
            <h2 className={styles.price} >{item.price}</h2>
            <p>{item.description}</p>
            </div>
            <Link className={styles.back} to="/products" >Back</Link>


        </div>
    )
}
