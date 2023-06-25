import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { LocalMenuPage } from '../LocalMenuPage';
import { useContext, useEffect, useState } from 'react';
import { SideBarMenu } from '../../components/SideBarMenu';
import { AppContext } from '../../context/AppContext';
import { getLocals } from '../../services/ferryServices';
import { ModalPage } from '../ModalPage';
import { Loading } from '../ModalPage/Loading';

export const PrincipalMenuPage = () => {
  const { pathname } = useLocation();
  const [clickBurgerButton, setClickBurgerButton] = useState(false);
  const context = useContext(AppContext);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    context.setPushedButtonLogin(true);
    context.setPushedButtonLoginPwd(true);
  },[context.pushedButtonLoginPwd]);
  return (
    <>
      {
        useEffect(() => {
          setTimeout(() => {
            if(context.localsList.length===0){
              const f = async () => {
                const data = await getLocals();
                context.setLocalsList(data);
                context.setOriginalLocalList(data);
              };
              f();
            }
            setLoading(false);
          },10000);
        },[loading])
      }
      {
        loading && (
          <ModalPage>
            <Loading/>
          </ModalPage>
        )
      }
      <HeaderMenu
      clickBurgerButton={clickBurgerButton}
      setClickBurgerButton={setClickBurgerButton}
      />
      <section className='flex flex-row justify-start'>
        <SideBarMenu
        typeBar={pathname==="/principal-menu/local-list-menu" ?
        "local" : "product"}
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
