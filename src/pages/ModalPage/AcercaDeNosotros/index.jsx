import { ButtonType1 } from "../../../components/Buttons/ButtonType1";

export const AcercaDeNosotros = ({action}) => {
  return (
    <section className="bg-white rounded-lg p-4 m-2 font-semibold
    flex flex-col justify-center items-center w-64 h-max">
      <h1 className="text-2xl uppercase mb-5 text-center">
        Acerca de Nosotros
      </h1>
      <p className="text-lg font-normal">
        Ferry App tiene como objetivo facilitarte el encontrar herramientas
        tanto de ferreterias, como de librerias en la ciudad de La Paz
      </p>
      <ButtonType1
      actionButton={action}
      typeButton={"button"}
      textButton={"volver"}
      />
    </section>
  );
};
