import React, { useState , useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FormularioType1 } from "../../components/Formulario/FormularioType1";
import { getUser, setUser } from "../../services/ferryServices";
import { ModalPage } from "../ModalPage";
import { ModalMessage } from "../ModalPage/ModalMessage";
import { QuestionType2 } from "../../components/Questions/QuestionType2";
import { Link } from "react-router-dom";
import { ButtonType1 } from "../../components/Buttons/ButtonType1";

export const LoginSignUpPage = () => {
  const context = useContext(AppContext);

  const [errorFinded, setErrorFinded] = useState(
    {estado:false,tipo:''}
  );
  const [userCreated, setUserCreated] = useState(false);

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const emailVerificator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordVerificator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/;

    const oldEmail = await getUser(context.datesSignUp.email);

    if (emailVerificator.test(context.datesSignUp.email) && oldEmail === null) {
      if (passwordVerificator.test(context.datesSignUp.password_1)) {
        if (context.datesSignUp.password_1 === context.datesSignUp.password_2) {
          setUser({
          userName: context.datesSignUp.name,
          userEmail: context.datesSignUp.email,
          userPassword: context.datesSignUp.password_1,
          });
          setErrorFinded({...errorFinded,estado:false});
          setUserCreated(true);
        }else {
          setErrorFinded({estado:true,tipo:"equal-password"});
        }
      }else {
        setErrorFinded({estado:true,tipo:"password"});
      }
    }else{
      setErrorFinded({estado:true,tipo:"email"});
    }
  };

  return (
    <section className="flex justify-center items-center fixed top-0 left-0
    right-0 bottom-0 bg-primary">
      { 
        (errorFinded.estado || userCreated) &&
        (
          <ModalPage>
          {errorFinded.estado ? (
            <ModalMessage
            textOne={"ERROR"}
            textTwo={errorFinded.tipo==="email" ?
            "Direccion de Email Invalida" :
            errorFinded.tipo==="password" ?
            "La contraseña debe tener al menos 1 minúscula, 1 mayúscula, 1 número, y debe tener una extensión de 8 caracteres" :
            "Las contraseñas no son iguales"
            }
            actionButton={() => setErrorFinded({...errorFinded,estado:false})}
            typeButton={"button"}
            textButton={"ACEPTAR"}
            navigateTo={'/login-sign-up'}
            />
          ) : (
            <ModalMessage
            textOne={"USUARIO CREADO"}
            textTwo={"El usuario fue creado exitosamente"}
            actionButton={() => setUserCreated(true)}
            typeButton={"button"}
            textButton={"ACEPTAR"}
            navigateTo={'/login'}
            />
          )
          }
          </ModalPage>
        )
        
      }
      <section
      className="flex justify-center items-center fixed
      top-0 left-0 right-0 bottom-0"
      >
        <section
        className="flex flex-col justify-center items-center
        w-max"
        >
          <FormularioType1 accion={handleSubmit}>
          <h1 className="text-gray-900 text-3xl font-bold">
            Ingrese sus datos
          </h1>
          <div className="flex flex-col items-start">
            {context.INSTRUCTIONS.map((element) => (
              <QuestionType2
              instruction={element}
              key={element.textQuestion}
              />
            ))}
          </div>
          <div className="flex flex-row items-center">
            <input
              type="submit"
              className="text-white h-12 w-36 rounded-lg mt-4 mb-4
                font-bold bg-secondary-two hover:bg-secondary-three
                active:bg-secondary-one self-center ease-in-out
                duration-300 uppercase text-xs"
              value="crear cuenta"
            />
            <Link to={"/login"}>
              <ButtonType1
              actionButton={()=>{}}
              textButton={"volver"}
              typeButton={"button"}
              />
            </Link>
          </div>
          </FormularioType1>
        </section>
      </section>
    </section>
  );
};
