import React,{useState, Fragment} from 'react';
import shortid from 'shortid';

import styled from '@emotion/styled';
import hoodie from '../products/hoodie.png';

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

const Hoodie = ({guardarMercaderia, mercaderia}) => {

    const [producto, guardarBuzo] = useState ({
        precio: 13,
        nombre: 'Black Hoodie',
        imagen: `${hoodie}`,
        id: shortid(),
        cantidad: 1,
        descripcion: 'Unisex Basic Sofstyle Hoodie'
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
            alt = "buzo"
            onClick = {() => arrayMercaderias(producto)}
        />

            <ContenedorTexto>
          <TextoProductos>{nombre}</TextoProductos>
          <TextoProductos>${precio}</TextoProductos>
            </ContenedorTexto>

    </Fragment>

     );
}
 
export default Hoodie;
