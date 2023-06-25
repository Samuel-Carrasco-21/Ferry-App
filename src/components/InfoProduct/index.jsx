import { v4 as uuidv4 } from 'uuid';

export const InfoProduct = ({product}) => {
  const INFO_PRODUCT =
    ['Nombre:','Estado:','Cantidad Disponible:','Precio:'];

  return (
    <section className="flex flex-col justify-start items-start p-1 m-1
    text-lg text-white">
      {INFO_PRODUCT.map((item,index) => (
        <div key={uuidv4()} className="flex flex-row text-black">
          <p className="font-semibold">
            {item}
          </p>
          <p className="font-medium">
            {index === 3 ? product[Object.keys(product)[index+1]]+" Bs."
            : index === 1 ? product[Object.keys(product)[index+1]] ?
            "disponible" : "agotado" : product[Object.keys(product)[index+1]]}
          </p>
        </div>
      ))}
    </section>
  );
};
