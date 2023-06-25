import { BsCircle } from "react-icons/bs";

export const LocalState = ({localStatus,typeStatus}) => {
  return (
    <div className='flex flex-row w-max items-center'>
      <BsCircle
      className={`${localStatus ? "bg-green-400" : "bg-red-400"}
      rounded-full p-1 m-1 text-black border-black`}/>
      <p className='p-1 text-center rounded-md font-bold text-black'>
        {typeStatus==="product" ? localStatus ?
        "disponible" : "agotado" :
        localStatus ? "abierto" : "cerrado"}
      </p>
    </div>
  );
};
