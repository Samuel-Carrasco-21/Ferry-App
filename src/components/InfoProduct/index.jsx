export const InfoProduct = ({product}) => {
  const INFO_PRODUCT =
    ['Nombre: ','Estado: ','Cantidad Disponible: ','Precio: '];
  return (
    <div className="flex flex-col justify-start items-start p-1 m-1
    text-lg text-white">
      {
        INFO_PRODUCT.map((item,index) => (
          <p className="font-semibold">{item}
            <p className="font-medium">
              {product[Object.keys(product)[index]]}
            </p>
          </p>
        ))
      }
    </div>
  );
};
