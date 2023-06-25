import { ProductCard } from '../../components/ProductCard';
import { ListCards } from '../../components/ListCards';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { ModalPage } from '../ModalPage';
import { ProductDescription } from '../ModalPage/ProductDescription';
import { Navigate } from 'react-router-dom';
import { Loading } from '../ModalPage/Loading';

export const LocalProductsPage = () => {
  const context = useContext(AppContext);
  const [productChecked,setProductChecked] = useState({});
  const [loading,setLoading] = useState(true);

  return (
    <>
      {
        useEffect(() => {
          setTimeout(() => {
            setLoading(false);
          },10000);
        },[loading])
      }
      {
        loading && (
          <ModalPage>
            <Loading/>
          </ModalPage>
        )
      }
      <ListCards>
        { (context.actualLocalStore.length!==0) ?
          context.actualLocalStore.map(item => (
            <ProductCard
            key={item._id}
            product={item}
            setProductChecked={setProductChecked}
            />
          )) :
          <>
          {
            <Navigate to={'/principal-menu/local-list-menu'}/>
          }
          </>
        }
        {context.pushedButtonProduct && (
          <ModalPage>
            <ProductDescription
            product={productChecked}
            />
          </ModalPage>
        )}
      </ListCards>
    </>
    
  );
};
