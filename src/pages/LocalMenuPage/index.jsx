import { AppContext } from '../../context/AppContext';
import { useContext, useEffect } from 'react';
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
          localStatus = {local.localStatus}
          buttonTextOne = "Productos"
          buttonTextTwo = "Ubicacion"
          localLogo = {local.localLogo}
          _id = {local._id}
          localGotten = {local}
          key = {local._id}
          />
        )
      )}
    </ListCards>
    </>
  );
};
