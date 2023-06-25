import { GiHamburgerMenu } from 'react-icons/gi'
// import { AiOutlineSearch } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Logo } from '../Logo'
import { useNavigate } from 'react-router-dom'
export const HeaderMenu = ({clickBurgerButton,setClickBurgerButton}) => {
  
  const context = useContext(AppContext);
  // context.headerMenuHeight
  // context.setHeaderMenuHeight

  const headerMenuSize = useRef();

  const searchValue = (evento) => {
    evento.preventDefault();
    const newValue = evento.target.value;
    context.setSearchedLocal(newValue.toLowerCase());
  };

  useEffect(() => {
    if(!headerMenuSize.current?.clientHeight){
      return ;
    }
    context.setHeaderMenuHeight(headerMenuSize.current?.clientHeight);
  },[headerMenuSize.current?.clientHeight]);

  return (
    <div className='flex flex-row w-screen justify-around bg-primary
    items-center p-3'
    ref={headerMenuSize}
    >
      <button className='p-2 hover:bg-purple-500 active:bg-purple-600
      rounded-full text-lg text-white w-max ease-in-out duration-300 mr-2'
      onClick={() => setClickBurgerButton(!clickBurgerButton)}
      >
        <GiHamburgerMenu />
      </button>
      
      <input placeholder='search' className='w-4/5 rounded-lg p-2
      outline-none shadow-lg'
      onChange={searchValue}
      />

      <Logo
      urlImg={context.LOGO_APP}
      widthLogo={"small"}
      />      
    </div>
  )
}
