import { Avatar, Button, Divider, Grid, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system'
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
        <Grid container borderRadius={15} overflow="hidden" justifyContent="space-evenly" className={styles.container} >
            <Avatar src={image} alt="pimg"  sx={{width:"300px" , height:"300px" , margin:"10px" }}  />
            <Divider orientation="vertical" />
            <Grid item textAlign="center" m={1} marginTop={6}>
                <Typography variant="h4" fontWeight="bolder" >  {shorter(title)}  </Typography>
                <Typography variant="h4" fontWeight="bolder" color="darkblue" > {price} $ </Typography>
                <Box component="div" display="flex" >
            {
                    quantity > 1 ?
                    <Button variant="contained" color="warning" className={styles.btnchild} onClick={() => dispatch({type:"MINUS" , payload: props.data})} ><RemoveIcon/></Button> :
                    <Button variant="contained" color="warning"  className={styles.btnchild} onClick={() => dispatch({type:"REMOVE"  , payload:props.data})} ><DeleteIcon/></Button>

            }
            <Typography m={0.5}  variant="h4" alignSelf="center" >{quantity}</Typography>
            <Button variant="contained" color="warning"  className={styles.btnchild} onClick={()=> dispatch({type:"PLUS" , payload : props.data})} ><PlusOneIcon/></Button>
            </Box>
            </Grid>
           
           
        </Grid>
    )
}
