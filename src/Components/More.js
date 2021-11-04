import { Avatar, Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
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
        <Container>
        <Grid container display="flex" alignItems="center" justifyContent="center" borderRadius={10} overflow="hidden" className={styles.container} >
            <Grid item >
                <Avatar src={item.image} alt="imgitm"  sx={{width:"330px" , height:"330px"}}  />
            </Grid>
            <Grid item textAlign="center"  >
            <Box component="div" md={5}  >
                    <Typography variant="h6" color="darkorange" >{item.category}</Typography>
                    <Typography variant="h5" fontWeight="bold" >{item.title}</Typography>
                    <Typography  color="darkblue" fontWeight="bold" variant="h4" > $ {item.price} </Typography>
                    <Typography variant="body"> {item.description} </Typography>
            </Box>
          
            <Link className={styles.back} to="/products" >
                <Button variant="contained" color="warning" >Back</Button>
            </Link>
            </Grid>
        </Grid>
        </Container>
    )
}
