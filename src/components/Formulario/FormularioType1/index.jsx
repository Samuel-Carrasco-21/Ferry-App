export const FormularioType1 = (props) => {

  const accion = props.accion;
  return (
    <form onSubmit={accion} className="flex bg-slate-100 p-5 rounded-lg
    shadow-lg ml-5 mr-5 mt-2 h-max flex-col justify-center items-center
    outline-none w-max">
      {props.children}
    </form>
  );
};
