import { AppContext } from '../../context/AppContext';
import { useEffect,useContext } from "react";
import { SelectZone } from '../SelectZone';
import { Link } from 'react-router-dom';

export const SideBarMenu = ({clickBurgerButton}) => {

  const context = useContext(AppContext);

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

    // <section className='relative'>
    //   <section
    //   className='w-max flex flex-col shadow-lg absolute z-10
    //   h-full bg-white'
    //   style={context.MAIN_CONTENT_HEIGHT}>
    //     <SelectZone/>
    //     <Link className='font-semibold p-1 m-1'
    //     to={`/principal-menu/local-list-menu`}>
    //       Locales
    //     </Link>
    //   </section>
    // </section>

    // <div
    //   className={`top-0 right-0 w-[35px] bg-blue-600 p-10 pl-20
    //   text-white fixed h-full z-40  ease-in-out duration-1000 ${
    //     clickBurgerButton ? "translate-x-0 " : "translate-x-full"
    //   }`}
    // >
    //   <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
    // </div>

    <section
      className={`w-max bg-blue-600 p-10 fixed h-full z-40 ease-linear duration-300 ${
        clickBurgerButton ? "translate-x-0" : "-translate-x-52"
      }`}
      style={context.MAIN_CONTENT_HEIGHT}
    >
      <section className='flex flex-col justify-center items-center'>
        <Link className='font-semibold p-1 m-1 mb-5 uppercase text-white'
          to={`/principal-menu/local-list-menu`}>
            Locales
        </Link>
        <SelectZone/>
      </section>
    </section>
  );
};
