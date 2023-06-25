import { AppContext } from '../../context/AppContext';
import { useEffect,useContext } from "react";
import { SelectZone } from '../SelectZone';
import { Link, useLocation } from 'react-router-dom';
import { LogOut } from '../LogOut';

export const SideBarMenu = ({clickBurgerButton,typeBar}) => {

  const context = useContext(AppContext);

  const {pathname} = useLocation();

  const WIDTH = context.widthScreen;

  useEffect(() => {
    if(WIDTH<800){
      context.setHeightFooter(context.HEIGHT_MOBILE);
    }else{
      context.setHeightFooter(context.HEIGHT_DESKTOP);
    }
    window.addEventListener("resize",context.handleResize);
  },[window.innerWidth]);

  return (
    <section
      className={`w-max bg-secondary-one fixed h-full z-40 ease-linear
      duration-300
      ${clickBurgerButton ? "translate-x-0" : "-translate-x-60"}`}
      style={context.MAIN_CONTENT_HEIGHT}
    >
      <section className='flex flex-col justify-center items-center'>
        <LogOut/>
        <h1 className='font-semibold p-1 m-1 mb-5 uppercase text-white
        text-xl mt-3 w-56 text-center'>
          {pathname==="/principal-menu/local-list-menu" ?
          "Locales" : "Productos"}
        </h1>
        <SelectZone typeBar={typeBar}/>
        {
          pathname!=="/principal-menu/local-list-menu" && (
            <Link className='w-56 h-14 hover:bg-secondary-three
            active:bg-secondary-two text-center flex flex-row
            justify-center items-center mt-3'
            to={"/principal-menu/local-list-menu"}>
              <p className='text-white text-lg font-semibold mr-5
              uppercase'>
                Volver
              </p>
            </Link>
          )
        }
      </section>
    </section>
  );
};
