import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Shop } from './Shop'

//context
import { shopContext } from '../Contexts/ContextShopping'
//style 
import styles from "./Buy.module.css"
import { Button, Drawer, Grid, Typography } from '@mui/material'

export const Buy = () => {

const {state , dispatch } = useContext(shopContext)

    return (
        <Grid container display="flex" justifyContent="center" >
            <Grid item  >
            {state.selected.map(item => <Shop key={item.id}  data={item} /> )}
            </Grid>
           
            <Drawer sx={{
          width: 240,
          flexShrink: 0,
          
          
        }}
        variant="permanent"
        anchor="bottom" 
        m={65}>
            {
                state.itemCounter > 0 && <Grid contaier textAlign="center" display="flex" justifyContent="space-evenly" >
                    <Typography variant="h5" fontWeight="bold"  >you have selected {state.itemCounter} item(s)</Typography>
                    <Typography variant="h5" fontWeight="bold"  >total price : {state.total} $</Typography>
                </Grid>

            }
            {
                state.checked && <Grid container >
                    <Typography variant="h5" fontWeight="bold" >checked out successfully</Typography>
                    <Link className={styles.link} to="/products" >
                        <Button variant="text"  color="warning" >Buy More</Button>
                    </Link>
                </Grid>
            }
            {
                state.itemCounter === 0 && !state.checked && <Grid>
                    <Typography variant="h5" fontWeight="bold" > you cleared all items</Typography>
                    <Link className={styles.link} to="/products" >
                        <Button variant="text" color="warning"  >Products</Button>
                    </Link>
                </Grid>

            }
             <Button variant="contained" color="warning"  onClick ={() => dispatch({type :"CHECKOUT"})} >check out</Button>
            <Button variant="contained" color="warning"  onClick ={() => dispatch({type :"CLEAR"})} >clear</Button>
            
            </Drawer>

        </Grid>
    )
}
