import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';


const TextoInformacion = styled.p`
margin: 0;
font-size: 30px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
margin-right:auto;
height: fit-content; 
`;

const TextoInformacion2 = styled.p`
margin: 0;
color: gray;
font-size: 20px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
margin-right:auto;
height: fit-content; 
`;

const Precio = styled.p`
font-size: 25px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
align-self: auto;
margin: 0;
padding-right: 5px;
`;

const ContenedorInformacion = styled.div`
display: flex;
width: 100%;
`;

const Imagen = styled.img`
width: 30%;
height: 30%;
background: linear-gradient(0deg, rgba(83,83,83,1) 0%, rgba(1,1,1,1) 85%);
margin: .5rem;
`;

const Boton = styled.button`
margin-top: 12px;
font-size: 15px;
width: 61px;
height: 25px;
color: white;
background-color: transparent;
border-radius: 10px;
border-color: white;
`;

const BotonSecundario = styled.a`
height: 25px;
margin: 5px;
color: white;
background-color: transparent;
    &:hover{
        cursor:pointer;
    }
`;

const BotonSecundario2 = styled.button`
margin: 0;
font-size: 25px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
color: white;
background-color: transparent;
border: 0;
margin-bottom: 50px;
    &:focus{
        border: solid 1px white;
        border-radius: 50%;
    }
    &:hover{
        cursor: pointer;
        border: solid 1px white;
        border-radius: 50%;
    }
`;

const ContenedorBoton = styled.div`
display: flex;
position: relative;
top: 20px;
align-items: center;
`;

const ContenedorCosas = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: flex-start;
width:100%;
@media (max-width: 600px){
 justify-content: flex-start;
}
`;

const ContenedorCosas2 = styled.div`
display: flex;
flex-direction: column;
height: 40px; 
`;

const ContenedorCosas3 = styled.div`
    display: flex;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    @media (max-width: 600px){
        
}
`;

const TextoTalles = styled.a`
margin: 0;
display: inline-flex;
font-size: 25px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
`;

const TextoCantidad = styled.p`
height: fit-content;
padding-top: 10px;
font-size: 25px;
font-family: 'Darker Grotesque', sans-serif;
font-weight: bold;
`;


const Objetos = ({producto, mercaderia, guardarMercaderia, handleChange}) => {

    const { imagen, nombre, precio, descripcion } = producto;
    
    const tab = <>&nbsp;</>;


      

    return ( 


<ContenedorInformacion>
    
        <Imagen 
        src = {imagen}
        /> 
        <ContenedorCosas> 
            <ContenedorCosas2>

                <TextoInformacion> {nombre}  </TextoInformacion>
                <TextoInformacion2> {descripcion} </TextoInformacion2>
                
            </ContenedorCosas2>
        
        <ContenedorBoton> 

            <TextoCantidad> QUANTITY: {tab} </TextoCantidad> 
            <Boton> 
                <BotonSecundario onClick={() => handleChange(producto, 1)}>+</BotonSecundario>
                <span style={{marginTop:2}}>{producto.cantidad}</span>
                <BotonSecundario onClick={() => handleChange(producto, -1)}>-</BotonSecundario>
            </Boton>

        </ContenedorBoton>

            <ContenedorCosas3>
                <TextoTalles> SIZE: <BotonSecundario2>S</BotonSecundario2><BotonSecundario2> M </BotonSecundario2> <BotonSecundario2> L </BotonSecundario2> <BotonSecundario2> XL </BotonSecundario2></TextoTalles>
                <Precio> $ {precio} </Precio>
            </ContenedorCosas3>

        </ContenedorCosas>

</ContenedorInformacion>


     );
}
 
export default Objetos;