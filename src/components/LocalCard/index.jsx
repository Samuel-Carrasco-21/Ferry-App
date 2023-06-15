import { useEffect, useContext } from "react";
import { Card } from "../Card";
import { LocalState } from "../LocalState";
import { ButtonType1 } from '../Buttons/ButtonType1';
import { AppContext } from "../../context/AppContext";
export const LocalCard = ({localName,buttonTextOne,buttonTextTwo,
  localStatus}) => {

  const context = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("resize", context.handleResize);
  },[window.innerWidth]);

  const getIntoLocal = () => {
    alert("INGRESANDO LOCAL");
  };
  
  const getLocalLocation = () => {
    alert("OBTENIENDO UBICACION");
  };

  return (
    <Card
    nameItemList={localName}
    urlImg={''}
    >
      <LocalState
      width={context.widthScreen}
      localStatus={localStatus}
      />
      <ButtonType1
      textButton={buttonTextOne}
      typeButton="button"
      actionButton={getIntoLocal}
      />
      <ButtonType1
      textButton={buttonTextTwo}
      typeButton="button"
      actionButton={getLocalLocation}
      />
    </Card>
  );
};
