import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { LocalMenuPage } from '../LocalMenuPage';
import { useContext, useState } from 'react';
import { SideBarMenu } from '../../components/SideBarMenu';

export const PrincipalMenuPage = () => {
  const { pathname } = useLocation();
  const [clickBurgerButton, setClickBurgerButton] = useState(false);
  return (
    <>
      <HeaderMenu
      clickBurgerButton={clickBurgerButton}
      setClickBurgerButton={setClickBurgerButton}
      />
      <section className='flex flex-row justify-start'>
        <SideBarMenu
        clickBurgerButton={clickBurgerButton}/>
        {
        pathname==='/principal-menu' && (<LocalMenuPage/>)
        }
        <Outlet/>
      </section>
      <Footer/>
    </>
  );
};
