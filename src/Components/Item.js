import {  Button, Card, CardActions, CardContent, CardMedia,  Divider,  Tooltip,  Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {React , useContext } from 'react'
import { Link } from 'react-router-dom'
//context
import { shopContext } from '../Contexts/ContextShopping'
//funcs
import { shorter , isIn, quantityCount } from '../Funcs/shorter'
//style
import styles from "./Item.module.css"

export const Item = ({details}) => {


   const {state , dispatch} = useContext(shopContext);
  

    return (
        <Card  className={styles.container} >
            <Tooltip  title={details.description} arrow >
            <CardMedia  variant="outlined" 
                component="img"
                image={details.image}  alt="productimg" height="200"        
            /></Tooltip>
           <CardContent>
            <Typography variant="h5" textAlign="center" fontWeight="bold"  >{shorter(details.title)}</Typography >
            <Typography variant="h6" textAlign="center" fontWeight="bolder" color="blue" >$ {details.price}</Typography>
            {/* <Typography variant="body2"  color="text" >{(details.description).slice(0,380)}</Typography>  */}
            </CardContent>
            <Divider/>
 
            <CardActions className={styles.btncontainer}  >
                     <Link className={styles.link} to={`/products/${details.id}`} >
                         <Button variant="outlined" color="warning"  >More</Button>
                     </Link>
            <div>
                {
                    quantityCount(state , details.id) === 1 && <Button variant="contained" color="warning" onClick={() => dispatch({type: "REMOVE" , payload:details})} ><DeleteIcon/></Button>}
                   { quantityCount(state , details.id) > 1 && <Button variant="contained" color="warning" onClick={() => dispatch({type: "MINUS" , payload:details})} ><RemoveIcon/></Button>
                }
                <Typography variant="h4" m={2} className={styles.quantity} >{quantityCount(state , details.id)}</Typography>
                { 
                    isIn(state , details.id) ?
                    <Button variant="contained" color="warning"  className={styles.pbtn} onClick={() => dispatch({type :"PLUS" , payload :details}) } ><PlusOneIcon/></Button>
                    :
                    <Button variant="contained" color="warning" onClick={() => dispatch({type :"ADD" , payload :details}) } ><AddIcon/></Button>
                }

            </div>
            </CardActions>
        </Card>
    )
}
