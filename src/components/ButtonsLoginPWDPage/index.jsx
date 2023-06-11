// import { ButtonType3 } from '../Buttons/ButtonType3';
import { ButtonType1 } from '../Buttons/ButtonType1';
import { Link } from "react-router-dom";

export const ButtonsLoginPWDPage = () => {
  return (
    <div className='mt-2 mb-2 flex flex-col'>
      <ButtonType1
      textButton="ingresar"
      actionButton={()=>{}}
      typeButton='submit'
      />
      <Link to={`/`}>
        <ButtonType1
        textButton="volver"
        actionButton={()=>{}}
        typeButton={`button`}
        />
      </Link>
    </div>
  );
};
