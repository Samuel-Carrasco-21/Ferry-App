import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import { ListCards } from '../../components/ListCards';
import { LocalCard } from '../../components/LocalCard';

export const LocalMenuPage = () => {
  const context = useContext(AppContext);
  return (
    <>
    <ListCards>
      {context.listaLocales
      .filter(local => 
        local.nombreLocal.toLowerCase().includes(context.localBuscado))
      .map(local =>
        (
          <LocalCard
          nombreLocal = {local.nombreLocal}
          estadoLocal = {local.estadoLocal ? "abierto" : "cerrado"}
          textoBotonUno = "Productos"
          textoBotonDos = "Ubicacion"
          key = {local.id}
          />
        )
      )}
    </ListCards>
    </>
  );
};
