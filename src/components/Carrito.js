import React, {Fragment, useState, useEffect} from 'react'
import styled from '@emotion/styled';

import Objetos from './Objetos';

import checkout from '../checkout.png'
import cartImage from '../yourcart.png'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import shortid from 'shortid';


const BotonCarrito = styled.button`
height: auto;
margin: 1rem 1.5rem 0 0;
background-color: Transparent;
border-radius: 10px;
border-color: white;
font-weight: bold;
font-family: 'Darker Grotesque', sans-serif;
font-size: 16px;
width: 80px;
color: white;
`;

const Cierre = styled.button`
color: white;
align-self: flex-start;
float: right;
background: transparent;
font-family: 'Darker Grotesque', sans-serif;
font-size: 19px;
border: 0;
margin-top: 1px;
&:hover{
    cursor: pointer;
}
`;

const ImagenCarrito = styled.img`
margin-top: 1rem;
margin-bottom: 1rem;
width:100%;
`;

const Informacion = styled.div `
border: solid 1px;
border-color: white;
`;

const Total = styled.span`
margin-left: 30px;
    font-size: 30px;
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: bold;
`;

const ContenedorTotal = styled.div`
border: solid 1px white;
display: flex;
justify-content: space-between;
margin-top: 1rem;
margin-left: -2rem;
margin-right: -2rem;
border-left: none;
border-bottom: none;
border-right: none;
`;

const Checkout = styled.img`
width: 70%;
align-self: center;
&:hover{
    cursor:pointer;
}
`;

const ContenedorCheckout = styled.div`
border: solid 1px white;
border-bottom: none;
border-right: none;
border-top: none;
width: 40%;
display: flex;
justify-content: center;
`;


function getModalStyle() {

    const left = 60;
  
    return {
      
      left: `${left}%`,
      
      backgroundColor: 'black',
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      width: 450,
      height: 'fit-content',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 0),
      border: 'solid 1px white',
    },
    scroll: { 
        maxHeight: '500px', 
        overflowY: 'scroll',
        padding: theme.spacing(3),
        }
}));


const Carrito = ({mercaderia, guardarMercaderia, handleChange}) => {

   
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        mercaderia.map((producto) => (ans += producto.cantidad * producto.precio));
        setPrice(ans);
      };

      useEffect(() => {
        handlePrice();
      });


    const [modalStyle] = useState (getModalStyle);
    const [open, setOpen] = useState (false);

    const clases = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen (false);
    }

    const mercaderiaCero = () => {
        if(mercaderia.length === 0){
            setOpen(false);
            return;
         } 
    }

      // Funcion para remover del carrito
      const eliminarProductos = id => {
        const nuevosProductos = mercaderia.filter((producto) => producto.id == id );
        guardarMercaderia(nuevosProductos);
        }


    return ( 
        
<Fragment>
        <BotonCarrito
            type="button"
            onClick={()=>{
                handleOpen();
                mercaderiaCero();
            }}
        > CART ({mercaderia.length}) </BotonCarrito>

        <Modal
        open = {open}
        >
            
            <div style={modalStyle} className={clases.paper}>
                <div {...mercaderia.length > 2 ? {className:`${clases.scroll}`}: null}> 
                    <Cierre
                    onClick = {() => {
                        handleClose();
                    }}
                    > - Close </Cierre>
                        <ImagenCarrito
                        src = {cartImage}
                        />
                            <Informacion> 
                            {mercaderia.map(producto => (
                                <Objetos 
                                key = {producto.id}
                                producto= {producto}
                                mercaderia = {mercaderia}
                                guardarMercaderia = {guardarMercaderia}
                                handleChange = {handleChange}
                                price = {price}
                                />
                            ))}
                            
                            </Informacion>
                </div>
                            <ContenedorTotal> 
                                <Total>TOTAL : $ {price}</Total> <ContenedorCheckout> <Checkout 
                                src = {checkout} 
                                alt ="checkout"
                                onClick = {() => {eliminarProductos ()}}
                                /> </ContenedorCheckout> 
                            </ContenedorTotal>
            </div>
        </Modal>
</Fragment>

     );
}
 
export default Carrito;