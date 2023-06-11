import { GiHamburgerMenu } from 'react-icons/gi'
// import { AiOutlineSearch } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { SelectZone } from '../SelectZone'
export const HeaderMenu = ({clickBurgerButton,setClickBurgerButton}) => {
  
  const context = useContext(AppContext);
  // context.headerMenuHeight
  // context.setHeaderMenuHeight

  const headerMenuSize = useRef();

  const searchValue = (evento) => {
    evento.preventDefault();
    const nuevoValor = evento.target.value;
    context.setLocalBuscado(nuevoValor.toLowerCase());
  };

  useEffect(() => {
    if(!headerMenuSize.current?.clientHeight){
      return ;
    }
    context.setHeaderMenuHeight(headerMenuSize?.current?.clientHeight);
  },[headerMenuSize?.current?.clientHeight]);

  return (
    <div className='
    flex
    flex-row
    w-screen
    justify-around
    bg-orange-400
    items-center
    p-3
    '
    ref={headerMenuSize}
    >
      {/* <Link to={`local-list-menu`}>
      </Link> */}
      <button className='p-2 bg-transparent border-2
      border-white rounded-full text-lg text-white w-max'
      onClick={() => setClickBurgerButton(!clickBurgerButton)}
      >
        <GiHamburgerMenu/>
      </button>
      
      <input placeholder='search' className='w-4/5 rounded-lg p-2
      outline-none shadow-lg'
      onChange={searchValue}
      />
      <figure className='text-white'>
        <FaReact size={'2rem'}/>
      </figure>        
    </div>
  )
}
