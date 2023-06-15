import { ProductCard } from '../../components/ProductCard';
import { ListCards } from '../../components/ListCards';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { ModalPage } from '../ModalPage';
import { ProductDescription } from '../ModalPage/ProductDescription';

export const LocalProductsPage = () => {
  const context = useContext(AppContext);
  const [productChecked,setProductChecked] = useState({});
  
  return (
    <ListCards>
      <ProductCard
      setProductChecked={setProductChecked}
      />
      {context.pushedButtonProduct && (
        <ModalPage>
          <ProductDescription
          product={productChecked}
          />
        </ModalPage>
      )}
    </ListCards>
  );
};
