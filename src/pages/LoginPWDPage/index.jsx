import { AppContext } from "../../context/AppContext";
import "../LoginPage/Login.css";
import "./LoginPWD.css";
import { FormularioType1 } from "../../components/Formulario/FormularioType1";
import { QuestionType1 } from "../../components/Questions/QuestionType1";
import { useContext } from "react";
import { TituloApp } from "../../components/TituloApp";
import { Logo } from "../../components/Logo";
import { ButtonsLoginPWDPage } from "../../components/ButtonsLoginPWDPage";
import { ModalPage } from "../ModalPage"
import { ModalSuccess } from "../ModalPage/ModalSuccess";
import { ferryTechUri } from "../../services/ferryTechUri";

export const LoginPWDPage = () => {
  // const API = ferryTechUri;
  const context = useContext(AppContext);

  const getUsers = async (directionDB,userName,userPassword) => {
    const result = 0;
    return result;
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(![context.datesLoginPwdEmail,context.datesLoginPwdPwd].includes('')){
      // alert(
      //   "Email: " +
      //     context.datesLoginPwdEmail +
      //     "\nPWD: " +
      //     context.datesLoginPwdPwd
      // );
      console.log(getUsers
        ('users',context.datesLoginPwdEmail,context.datesLoginPwdPwd));
      context.setPushedButtonIngresar(true);
      context.setDatesLoginPwdEmail('');
      context.setDatesLoginPwdPwd('');
    }else{
      alert("DEBE LLENAR LOS CAMPOS REQUERIDOS");
    }
  };

  return (
    <>
      <section
      className="flex flex-col justify-center items-center fixed top-0
      left-0 right-0 bottom-0">
        <TituloApp/>
        <Logo/>
        <FormularioType1 accion={handleSubmit}>
        {
          context.INSTRUCTIONS_LOGIN_PWD.map(instruction => (
            <QuestionType1
            key={instruction.textQuestion}
            instruction={instruction}
            />
          ))
        }
          <ButtonsLoginPWDPage/>
        </FormularioType1>
      </section>
      {
        context.pushedButtonIngresar && (
          <ModalPage>
            <ModalSuccess
            textOne="Login exitoso"
            textTwo="Su sesión se inició correctamente"
            actionButton={() => context.setPushedButtonIngresar(false)}
            typeButton="button"
            textButton="ACEPTAR"
            navigateTo="/principal-menu"
            />
          </ModalPage>
        )
      }
    </>
  );
};
