import { Link } from "react-router-dom";
import { ButtonType1 } from "../../../components/Buttons/ButtonType1";

export const ModalSuccess = ({textOne,textTwo,actionButton,typeButton,
  textButton,navigateTo}) => {
  return (
    <section className="bg-white rounded-lg p-4 m-2 font-semibold
    flex flex-col justify-center items-center w-max h-max">
      <h1 className="text-2xl">{textOne}</h1>
      <p className="text-lg">{textTwo}</p>

      <Link to={navigateTo}>
        <ButtonType1
        actionButton={actionButton}
        typeButton={typeButton}
        textButton={textButton}
        />
      </Link>
    </section>
  );
};
