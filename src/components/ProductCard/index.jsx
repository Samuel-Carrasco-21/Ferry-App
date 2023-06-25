import { useEffect, useContext, memo  } from "react";
import { LocalState } from '../LocalState';
import { AppContext } from "../../context/AppContext";
import { ButtonType1 } from "../Buttons/ButtonType1";
import { Card } from "../Card";

export const ProductCard = memo(({product,setProductChecked}) => {
  const {productName,productStatus,productLogo} = product;
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
  nameItemList={productName}
  urlImg={productLogo}
  typeCard={"product"}
  >
    <LocalState
    typeStatus={"product"}
    localStatus={productStatus}
    />
    <ButtonType1
    textButton='descripción'
    typeButton="button"
    actionButton={clickedButton}
    />
  </Card>
  );
},(prevProps, nextProps) => {
  return (
    prevProps.product.productStatus === nextProps.product.productStatus
  );
});
