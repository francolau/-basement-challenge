import React,{Fragment, useState} from 'react';
import shortid from 'shortid';
import styled from '@emotion/styled';

import shirt from '../products/shirt.png';

const Productos = styled.img`
width: 100%;
display:block;
border-bottom: 4px white solid;
background: linear-gradient(0deg, rgba(83,83,83,1) 0%, rgba(1,1,1,1) 58%);
&:hover{
  background: linear-gradient(0deg, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 67%, rgba(0,0,0,1) 67%);
  cursor:pointer;
}
`;

const TextoProductos = styled.p`
color: white;
margin-top: 4px;
margin-right: .8rem;
font-size: 25px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
@media (max-width: 600px) {
  margin-top: 4px;
}
`;

const ContenedorTexto = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Shirt = ({guardarMercaderia, mercaderia}) => {

    const [producto, guardarRemera] = useState ({
        precio: 7.95,
        nombre: 'Black t-shirt',
        imagen: `${shirt}`,
        id: shortid(),
        cantidad: 1,
        descripcion: 'Unisex Basic Sofstyle T-Shirt'
    })
    

    const {precio, nombre, imagen, id} = producto;

    const arrayMercaderias = () => {
      guardarMercaderia([
        ...mercaderia,
        producto
      ]);
    }

    return ( 

        <Fragment>

        <Productos 
            src = {imagen}
            alt = "remera"
            onClick = {() => arrayMercaderias(producto)}
        />

            <ContenedorTexto>
          <TextoProductos>{nombre}</TextoProductos>
          <TextoProductos>${precio}</TextoProductos>
            </ContenedorTexto>

        </Fragment>

     );
}
 
export default Shirt;