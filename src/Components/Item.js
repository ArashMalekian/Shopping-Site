import {React , useContext } from 'react'
import { Link } from 'react-router-dom'
//context
import { shopContext } from '../Contexts/ContextShopping'
//funcs
import { shorter , isIn, quantityCount, splitter } from '../Funcs/shorter'
//style
import styles from "./Item.module.css"

export const Item = ({details}) => {


   const {state , dispatch} = useContext(shopContext);
  

    return (
        <div className={styles.container} >
            <img src={details.image} alt="productimg"  className={styles.img} /> 
            <div className={styles.titlecontainer} >
            <h2>{shorter(details.title)}</h2>
            <h4 className={styles.price} >{details.price}$</h4>
            </div >
            <p className={styles.more} >{splitter(details.description)}</p>  
            <div className={styles.btncontainer} >
            <Link className={styles.link} to={`/products/${details.id}`} >More</Link>

            <div>
                {
                    quantityCount(state , details.id) === 1 && <button onClick={() => dispatch({type: "REMOVE" , payload:details})} >trash</button>}
                   { quantityCount(state , details.id) > 1 && <button onClick={() => dispatch({type: "MINUS" , payload:details})} >-</button>
                }
                <h3 className={styles.quantity} >{quantityCount(state , details.id)}</h3>
                { 
                    isIn(state , details.id) ?
                    <button  className={styles.pbtn} onClick={() => dispatch({type :"PLUS" , payload :details}) } >+</button>
                    :
                    <button onClick={() => dispatch({type :"ADD" , payload :details}) } >ADD</button>
                }

            </div>
            </div>
        </div>
    )
}
