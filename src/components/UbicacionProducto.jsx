import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/reglas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar
} from "@fortawesome/free-solid-svg-icons";



export default function UbicacionProducto() {
    const [dataUbicacion, setDataUbicacion] = useState([]);
    const {id} = useParams();
        
    useEffect( () => {
    axios.get(`http://localhost:8080/productos/buscarProductoPorId/${id}`)
    .then(response => {
        setDataUbicacion(response.data.ciudad)})

}, [])

  return (
      <>
        <div className="contenedorDireccion">
            <dt>
              <FontAwesomeIcon icon={faLocationDot} style={{"paddingRight":"5px"}}/>
              <p>{dataUbicacion.provincia}, {dataUbicacion.nombre}, {dataUbicacion.pais}.</p>
            </dt>
            <dd>A 940 m del centro</dd>
          </div>
          <div className="calificacionProductos">            
            <div className="contenedorEstrellas">
              <dt style={{ fontWeight: "700" }}>Muy bueno</dt>
              <dd><FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" />
              <FontAwesomeIcon icon={faStar} className="estrella" /></dd>             
            </div>
            <span className="puntaje">8</span>
        </div>
    </>
  )
}
