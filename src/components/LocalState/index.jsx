export const LocalState = ({width, estadoLocal}) => {
  return (
    <p className={`
    p-0.5
    text-center
    ${width<500 && "ml-1 mr-1"}
    ${width>=500 && "ml-0 mr-0.5"}
    ${(width>=500 && estadoLocal==="abierto") && "pl-1.5 pr-1"}
    ${estadoLocal==="abierto" && "bg-green-400"}
    ${estadoLocal!=="abierto" && "bg-red-500"}
    rounded-md
    font-bold
    `}>
      {estadoLocal}
    </p>
  );
};
