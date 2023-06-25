import { Link } from "react-router-dom";
import { ButtonType1 } from "../../../components/Buttons/ButtonType1";

export const ModalMessage = ({textOne,textTwo,actionButton,typeButton,
  textButton,navigateTo}) => {
  return (
    <section className="bg-white rounded-lg p-4 m-2 font-semibold
    flex flex-col justify-center items-center w-96 h-max">
      <h1 className="text-2xl uppercase mb-5">{textOne}</h1>
      <p className="text-lg">{textTwo}</p>
      <div className="w-[50%]">
        <Link to={navigateTo}>
          <ButtonType1
          actionButton={actionButton}
          typeButton={typeButton}
          textButton={textButton}
          />
        </Link>
      </div>
    </section>
  );
};
