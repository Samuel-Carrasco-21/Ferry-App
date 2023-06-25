import { Logo } from "../../../components/Logo";
import imagen_jose from "../../../assets/imagen_jose.jpg";
import { ButtonType1 } from "../../../components/Buttons/ButtonType1";

export const Contactos = ({action}) => {

  const DATOS_AUTOR = [
    {
      textOne:'Autor:',
      textTwo:'José Samuel Carrasco Encinas'
    },
    {
      textOne:'Correo:',
      textTwo:'jsce2021@gmail.com'
    }
  ];

  return (
    <section className="bg-white rounded-lg p-4 m-2 font-semibold
    flex flex-col justify-center items-center w-max h-max">
      <h1 className="text-2xl uppercase mb-5">
        Contactos
      </h1>
      {
        DATOS_AUTOR.map(dato => (
          <div key={dato.textOne} className="flex flex-row text-lg">
            <p className="font-semibold">
              {dato.textOne}
            </p>
            <span className="text font-normal">
              {dato.textTwo}
            </span>
          </div>
        ))
      }
      <Logo
      urlImg={imagen_jose}
      widthLogo={"bigger"}
      />
      <ButtonType1
      actionButton={action}
      typeButton={"button"}
      textButton={"volver"}
      />
    </section>
  );
};
