import { useContext, useMemo } from 'react';
import Select from 'react-select';
import { AppContext } from '../../context/AppContext';

export const SelectZone = ({typeBar}) => {

  const context = useContext(AppContext);

  const getOpenLocals = () => {
    return [...context.originalLocalList.filter(local => local.localStatus)];
  };

  const getLocalsWithManyProducts = () => {
    return [...context.originalLocalList
      .sort((a,b) => b.productsList.length - a.productsList.length)];
  }

  const openLocals = useMemo(() => {
    return getOpenLocals();
  },[context.originalLocalList]);

  const localsManyProducts = useMemo(() => {
    return getLocalsWithManyProducts();
  },[context.originalLocalList]);

  const LOCAL_OPTIONS = [
    {label:'todos los locales',value:context.originalLocalList},
    {label:'abiertos',value:openLocals},
    {label:'mayor cantidad de productos',value:localsManyProducts}
  ];

  const getAvailableProducts = () => {
    return [...context.localStore.filter(product => product.productStatus)];
  };

  const getEconomicProducts = () => {
    return [...context.localStore.sort((a,b) => a.productPrice - b.productPrice)];
  };

  const getHighQuantityProducts = () => {
    return [...context.localStore.sort((a,b) =>
      b.quantityAvailable - a.quantityAvailable)];
  };

  const availableProducts = useMemo(() => {
    return getAvailableProducts();
  },[context.localStore]);

  const economicProducts = useMemo(() => {
    return getEconomicProducts();
  },[context.localStore]);

  const highQuantity = useMemo(() => {
    return getHighQuantityProducts();
  },[context.localStore]);

  const PRODUCT_OPTIONS =[
    {label:'todos los productos',value:context.localStore},
    {label:'disponibles',value:availableProducts},
    {label:'economicos',value:economicProducts},
    {label:'mayor cantidad',value:highQuantity}
  ];

  const handleChange = (selectedOption) => {
    if(typeBar==='local'){
      context.setLocalsList(selectedOption.value);
    }else{
      context.setActualLocalStore(selectedOption.value);
    }
  };

  return (
    <Select
    onChange={handleChange}
    className='font-thin w-48 active:outline-none'
    defaultValue={
      typeBar==="local" ? LOCAL_OPTIONS[0] : PRODUCT_OPTIONS[0]
    }
    options={typeBar==="local" ? LOCAL_OPTIONS : PRODUCT_OPTIONS}
    />
  );
};
