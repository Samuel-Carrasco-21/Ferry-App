export const LocalState = ({widthStatus, localStatus}) => {
  return (
    <p className={`
    p-0.5
    text-center
    ${widthStatus<500 && "ml-1 mr-1"}
    ${widthStatus>=500 && "ml-0 mr-0.5"}
    ${(widthStatus>=500 && localStatus==="abierto") && "pl-1.5 pr-1"}
    ${localStatus==="abierto" && "bg-green-400"}
    ${localStatus!=="abierto" && "bg-red-500"}
    rounded-md
    font-bold
    `}>
      {localStatus}
    </p>
  );
};
