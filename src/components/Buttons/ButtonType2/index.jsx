export const ButtonType2 = (props) => {
  const texto = props.texto;
  const accion = props.accion;
  const margin = props.margin;
  const classStyle = 'bg-transparent text-lg '+margin;
  return (
    <button className={classStyle} onClick={accion}>
      {texto}
    </button>
  )
}
