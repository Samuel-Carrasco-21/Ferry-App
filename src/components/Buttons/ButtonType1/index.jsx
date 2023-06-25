export const ButtonType1 = ({actionButton,textButton,typeButton}) => {
  return (
    <button className="text-white h-12 w-[100%] rounded-lg mt-2 mb-2 font-bold
    bg-secondary-two hover:bg-secondary-three active:bg-secondary-one m-1
    ease-in-out duration-300 justify-center items-center uppercase text-sm"
    onClick={actionButton}
    type={typeButton}>
      {textButton}
    </button>
  );
};
