import { AppContext } from "../../context/AppContext";
import "./LoginPWD.css";
import { FormularioType1 } from "../../components/Formulario/FormularioType1";
import { useContext, useState } from "react";
import { TituloApp } from "../../components/TituloApp";
import { Logo } from "../../components/Logo";
import { ButtonsLoginPWDPage } from "../../components/ButtonsLoginPWDPage";
import { ModalPage } from "../ModalPage"
import { ModalMessage } from "../ModalPage/ModalMessage";
import { getUser } from "../../services/ferryServices";
import { QuestionType2 } from "../../components/Questions/QuestionType2";

export const LoginPWDPage = () => {
  const context = useContext(AppContext);
  const [incorrectDates,setIncorrectDates] = useState(false);
  const [loginUserName,setLoginUserName] = useState("");

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const data = await getUser(context.datesLoginPwdEmail);
    if(![context.datesLoginPwdEmail,context.datesLoginPwdPwd].includes('')){
      if(data!==null){
        if(data.userEmail === context.datesLoginPwdEmail &&
          data.userPassword === context.datesLoginPwdPwd){
          setLoginUserName(data.userName);
          context.setPushedButtonIngresar(true);
          context.setDatesLoginPwdEmail('');
          context.setDatesLoginPwdPwd('');
        }else{
          setIncorrectDates(true);
        }
      }else{
        setIncorrectDates(true);
      }
    }else{
      setIncorrectDates(true);
    }
  };

  const madeMistake = () => {
    if(incorrectDates){
      setIncorrectDates(false);
    }else{
      context.setPushedButtonLoginPwd(true);
      context.setPushedButtonIngresar(false);
    }
  }

  return (
    <>
      <section
      className="flex flex-col justify-center items-center fixed top-0
      left-0 right-0 bottom-0 bg-primary">
        <FormularioType1 accion={handleSubmit}>
        <TituloApp/>
        <Logo
        urlImg={context.LOGO_APP}
        />
        {
          context.INSTRUCTIONS_LOGIN_PWD.map(instruction => (
            <QuestionType2
            key={instruction.textQuestion}
            instruction={instruction}
            />
          ))
        }
          <ButtonsLoginPWDPage/>
        </FormularioType1>
      </section>
      {
        (context.pushedButtonIngresar || incorrectDates) && (
          <ModalPage>
            <ModalMessage
            textOne={`${incorrectDates ? "Error" : "Login exitoso"}`}
            textTwo={`${incorrectDates ? "Email o Password Incorrectos"
            : `Bienvenido ${loginUserName}`}`}
            actionButton={madeMistake}
            typeButton="button"
            textButton="ACEPTAR"
            navigateTo={`${incorrectDates ? "/login-pwd" : "/principal-menu/local-list-menu"}`}
            />
          </ModalPage>
        )
      }
    </>
  );
};
