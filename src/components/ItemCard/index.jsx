import { useState, useEffect } from "react";
import { LocalState } from '../LocalState';
import { ButtonType3 } from '../Buttons/ButtonType3';
import { NavLink } from 'react-router-dom';

export const ItemCard = (props) => {

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const nombreProducto = props.nombreProducto;
  const estadoProducto = props.estadoProducto;
  const cantidadDisponible = props.cantidadDisponible;
  const precioProducto = props.precioProducto;

  return (
  <Card
  nombreItemlist={nombreProducto}
  >
    <LocalState
    width={width}
    estadoLocal={estadoProducto}
    />
    <NavLink to={""}>
      <ButtonType3
      texto="descripción"
      />
    </NavLink>
  </Card>
  );
};
