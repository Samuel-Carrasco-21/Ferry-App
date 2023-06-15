import { useContext } from 'react';
import { ButtonType1 } from '../../../components/Buttons/ButtonType1';
import { InfoProduct } from '../../../components/InfoProduct';
import { AppContext } from '../../../context/AppContext';
export const ProductDescription = ({product}) => {
  const context = useContext(AppContext);
  return (
    <section className="bg-white rounded-lg p-4 m-2 font-semibold
    flex flex-col justify-center items-center w-max h-max">
      <h1 className="text-2xl">{product.productName}</h1>
      <InfoProduct
      product={product}
      />
      <ButtonType1
      actionButton={() =>
      context.setPushedButtonProduct(!context.pushedButtonProduct)}
      typeButton='button'
      textButton='aceptar'
      />
    </section>
  );
};
