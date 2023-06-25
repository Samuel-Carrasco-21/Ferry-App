import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const LogOut = () => {
  return (
    <Link className='w-full h-14 hover:bg-secondary-three active:bg-secondary-two
    text-center flex flex-row justify-center items-center'
    to={`/login`}>
      <p className='text-white text-lg font-semibold mr-5 uppercase'>
        Salir
      </p>
      <button>
        <BiLogOut className='text-white text-4xl'/>
      </button>
    </Link>
  );
};
