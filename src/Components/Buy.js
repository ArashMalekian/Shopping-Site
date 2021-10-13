import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Shop } from './Shop'

//context
import { shopContext } from '../Contexts/ContextShopping'
//style 
import styles from "./Buy.module.css"

export const Buy = () => {

const {state , dispatch } = useContext(shopContext)

    return (
        <div className={styles.bigcontainer} >
            <div>
            {state.selected.map(item => <Shop key={item.id}  data={item} /> )}
            </div>
           
            <div className={styles.container} >
                
            {
                state.itemCounter > 0 && <div>
                    <h4>you have selected {state.itemCounter} item(s)</h4>
                    <h4>total price : {state.total}$</h4>
                </div>

            }
            {
                state.checked && <div>
                    <h2>checked out successfully</h2>
                    <Link className={styles.link} to="/products" >Buy More</Link>
                </div>
            }
            {
                state.itemCounter === 0 && !state.checked && <div>
                    <h2> you cleared all items</h2>
                    <Link className={styles.link} to="/products" >go to shop</Link>
                </div>

            }
             <button onClick ={() => dispatch({type :"CHECKOUT"})} >check out</button>
            <button onClick ={() => dispatch({type :"CLEAR"})} >clear</button>
            </div>
            

        </div>
    )
}
