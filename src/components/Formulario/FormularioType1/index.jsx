export const FormularioType1 = (props) => {

  const accion = props.accion;
  return (
    <form onSubmit={accion} className="flex bg-transparent border-2
    border-orange-600 pl-5 pr-5 rounded-lg shadow-lg ml-5 mr-5
    mt-2 h-max flex-col items-start outline-none">
      {props.children}
    </form>
  );
};
