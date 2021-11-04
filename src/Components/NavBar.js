import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
//context
import { shopContext } from '../Contexts/ContextShopping'
//style 
import styles from "./NavBar.module.css"

export const NavBar = () => {

    const {state} = useContext(shopContext)

    return (
        <Grid container className={styles.container} >
            <Grid item >
                <Button href="/products" color="warning" variant="contained" fontWeight="bold" >PRODUCTS</Button>
            </Grid>            
            <Grid item  justifyContent="space-between" display="flex">
                
                <Link  to="/buy" style={{textDecoration:"none" }} >
                <Button color="warning" variant="outlined" fontWeight="bold" >GO TO SHOP</Button>
                </Link>
                <Box component="span" color="white" backgroundColor="orange" fontWeight="bold" borderRadius={25} p={1.5}  >
                    {state.itemCounter}
                </Box>
            </Grid>
        </Grid>
    )
}
