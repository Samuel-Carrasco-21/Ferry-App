import { useEffect, useContext  } from "react";
import { LocalState } from '../LocalState';
import { AppContext } from "../../context/AppContext";
import { ButtonType1 } from "../Buttons/ButtonType1";

export const ProductCard = ({product,setProductChecked}) => {
  const {productName,productState} = product;
  const context = useContext(AppContext);

  const clickedButton = () => {
    setProductChecked(product);
    context.setPushedButtonProduct(!context.pushedButtonProduct);
  };

  useEffect(() => {
    window.addEventListener("resize", context.handleResize);
  },[window.innerWidth]);

  return (
  <Card
  nombreItemlist={productName}
  >
    <LocalState
    width={context.widthScreen}
    estadoLocal={productState}
    />
    <ButtonType1
    textButton='descripción'
    typeButton="button"
    actionButton={() => clickedButton}
    />
  </Card>
  );
};
