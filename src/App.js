import React, {useState} from 'react';
import './App.css';
import styled from '@emotion/styled';
import Carrito from './components/Carrito';
import Shirt from './components/Shirt';
import Hoodie from './components/Hoodie';
import Cap from './components/Gorra';

import logo from './logo.svg';
import logochico from './favicon.ico'
import principal from './header.svg';


import footer from './footer.svg';


// Productos
const ContenedorImagenes = styled.div`
display:flex;
flex-direction: row;
margin: 1rem;
justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
}
`;

// Header
const Texto = styled.p`
color: white;
white-space: nowrap;
border-top:2px solid;
border-bottom:2px solid;
border-color: white;
font-size: 35px;
font-weight: bold;
font-family: 'Darker Grotesque', sans-serif;
padding-bottom: 0.7rem;
cursor: default;
@media (max-width: 600px){
  font-size: 20px;
}

`;

const ContenedorImagenPrincipal = styled.div`
width: 97.1%;
`;

const ImagenPrincipal = styled.img`
width: 100%;
height: auto;
margin: 1rem 1rem 0 1rem;
`;

const Header = styled.header`
height: auto;
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: nowrap;
`;


const ContenedorGeneral = styled.div`
display:flex;
flex-direction: column;
`;

const Logo = styled.img`
margin: 1rem 1rem 0;
width: 130px;
@media ( max-width: 600px ){
  display:none;
}
`;

const Logochico = styled.img`
margin: 1rem 1rem 0;
width: 35px;
@media ( min-width: 600px ){
  display:none;
}
`;

// footer

const Footer = styled.img`
width: 97%;
margin-left: 1rem;
margin-right: 1rem;
@media (max-width: 600px) {
  width: 95%;
}
`;

function App() {

  const [mercaderia, guardarMercaderia] = useState([]);

  const handleChange = (producto, d) => {
    const ind = mercaderia.indexOf(producto);
    const arr = mercaderia;
    arr[ind].cantidad += d;

    if (arr[ind].cantidad === 0) arr[ind].cantidad = 1;
    guardarMercaderia([...arr]);
  };

  return (
    
    <ContenedorGeneral>

      <Header>
        <Logo 
        src = {logo}
        alt = "logo challenge"/>

        <Logochico 
        src = {logochico}
        alt = "logo challenge"/>
        
        <Carrito 
        mercaderia = {mercaderia}
        guardarMercaderia = {guardarMercaderia}
        handleChange = {handleChange}
        /> 
        
      </Header>

      <ContenedorImagenPrincipal>

        <ImagenPrincipal 
        src = {principal}
        alt = "principal"
        />

      </ContenedorImagenPrincipal>
    
      <div>

        <Texto><span className = "loop"> -- A man can't have enough basement. swag -- &nbsp;
         -- A man can't have enough basement. swag -- </span></Texto>

      </div>

      <ContenedorImagenes>

        <div> 

            <Shirt 
            guardarMercaderia = {guardarMercaderia}
            mercaderia = {mercaderia}
            />

        </div>

        <div className = "buzo"> 

          <Hoodie 
          guardarMercaderia = {guardarMercaderia}
          mercaderia = {mercaderia}
          />

        </div>

        <div> 

          <Cap 
          guardarMercaderia = {guardarMercaderia}
          mercaderia = {mercaderia}
          />

        </div>
      </ContenedorImagenes>

        <footer>
          <Footer 
          src = {footer}
          alt= "footer"
          />
        </footer>
      

    </ContenedorGeneral>
  );
}

export default App;
