export const ButtonType2 = ({texto,accion}) => {
  return (
    <button
    className='bg-transparent text-base ml-3 font-sans p-0.5 rounded-lg pt-0
    ease-in-out duration-300 active:text-secondary-one
  hover:text-secondary-two'
    onClick={accion}>
      {texto}
    </button>
  )
}
