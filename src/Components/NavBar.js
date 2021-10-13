import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
//context
import { shopContext } from '../Contexts/ContextShopping'
//style 
import styles from "./NavBar.module.css"

export const NavBar = () => {

    const {state} = useContext(shopContext)

    return (
        <div className={styles.container} >
            <div>
                <Link className={styles.products} to="/products" >PRODUCTS</Link>
            </div>
            <div>
                <Link className={styles.shop} to="/buy" >GO TO SHOP</Link>
                <span>
                    {state.itemCounter}
                </span>
            </div>
        </div>
    )
}
