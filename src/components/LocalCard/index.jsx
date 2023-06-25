import { useContext, memo } from "react";
import { Card } from "../Card";
import { LocalState } from "../LocalState";
import { ButtonType1 } from '../Buttons/ButtonType1';
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
export const LocalCard = memo(({buttonTextOne,localGotten}) => {
  const {localName,localStatus,localLogo,_id,productsList,localLocation}
  = localGotten;

  const context = useContext(AppContext);

  const getIntoLocal = () => {
    if(productsList!==undefined){
      context.setActualLocalStore(productsList);
      context.setLocalStore(productsList);
    }else{
      context.setActualLocalStore([]);
      context.setLocalStore([]);
    }
    context.setChangeToLocal(localName);
  };

  return (
    <Card
    nameItemList={localName}
    urlImg={localLogo}
    >
      <LocalState
      typeStatus={"local"}
      localStatus={localStatus}
      />
      <Link className="w-[100%] right-1 relative" to={`${_id}`}>
        <ButtonType1
        textButton={buttonTextOne}
        typeButton="button"
        actionButton={getIntoLocal}
        />
      </Link>
      <a
      className="text-white h-12 w-[100%] rounded-lg mt-2 mb-2 font-bold
      bg-secondary-two hover:bg-secondary-three active:bg-secondary-one
      m-1 ease-in-out duration-300 flex justify-center items-center uppercase
      text-sm"
      href={localLocation}>
        ubicación
      </a>
    </Card>
  );
},(prevProps, nextProps) => {
  return (
    prevProps.localGotten.localStatus === nextProps.localGotten.localStatus
  );
});
