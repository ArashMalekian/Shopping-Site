import React , {useContext} from 'react'
//context
import { shopContext } from '../Contexts/ContextShopping'
//func
import { shorter  } from '../Funcs/shorter'

//style
import styles from "./Shop.module.css"

export const Shop = (props) => {
    const {dispatch} = useContext(shopContext)
    const {image , title , price , quantity } = props.data
    return (
        <div className={styles.container} >
                <img src={image} alt="pimg" />
            <div className={styles.details} >
                <h2>{shorter(title)}</h2>
                <h3 className={styles.price} >{price}$</h3>
                <div className={styles.btn} >
            {
                    quantity > 1 ?
                    <button className={styles.btnchild} onClick={() => dispatch({type:"MINUS" , payload: props.data})} >-</button> :
                    <button  className={styles.btnchild} onClick={() => dispatch({type:"REMOVE"  , payload:props.data})} >trash</button>

            }
            <h2>{quantity}</h2>
            <button  className={styles.btnchild} onClick={()=> dispatch({type:"PLUS" , payload : props.data})} >+</button>
            </div>
            </div>
           
           
        </div>
    )
}
