import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import { ListCards } from '../../components/ListCards';
import { LocalCard } from '../../components/LocalCard';

export const LocalMenuPage = () => {
  const context = useContext(AppContext);
  return (
    <>
    <ListCards>
      {context.localsList
      .filter(local => 
        local.localName.toLowerCase().includes(context.searchedLocal))
      .map(local =>
        (
          <LocalCard
          localName = {local.localName}
          localStatus = {local.localStatus ? "abierto" : "cerrado"}
          buttonTextOne = "Productos"
          buttonTextTwo = "Ubicacion"
          key = {local.id}
          />
        )
      )}
    </ListCards>
    </>
  );
};
