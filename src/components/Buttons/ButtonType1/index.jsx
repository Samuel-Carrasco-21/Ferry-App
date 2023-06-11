export const ButtonType1 = ({actionButton,textButton,typeButton}) => {
  return (
    <button className="text-white h-12 w-48 rounded-lg mt-2 mb-2 font-bold
    bg-orange-600 hover:bg-orange-500 active:bg-orange-700 m-1
    ease-in-out duration-300 justify-center items-center lowercase"
    onClick={actionButton}
    type={typeButton}>
      {textButton}
    </button>
  );
};
