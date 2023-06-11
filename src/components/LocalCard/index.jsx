import { useState, useEffect } from "react";
import { Card } from "../Card";
import { LocalState } from "../LocalState";
import { ButtonType1 } from '../Buttons/ButtonType1'
export const LocalCard = ({nombreLocal,textoBotonUno,textoBotonDos,
  estadoLocal}) => {

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },[window.innerWidth]);

  const ingresarLocal = () => {
    alert("INGRESANDO LOCAL");
  };
  
  const obtenerUbicacionLocal = () => {
    alert("OBTENIENDO UBICACION");
  };

  return (
    <Card
    nombreItemList={nombreLocal}
    >
      <LocalState
      width={width}
      estadoLocal={estadoLocal}
      />
      <ButtonType1
      textButton={textoBotonUno}
      typeButton="button"
      actionButton={ingresarLocal}
      />
      <ButtonType1
      textButton={textoBotonDos}
      typeButton="button"
      actionButton={obtenerUbicacionLocal}
      />
    </Card>
  );
};
