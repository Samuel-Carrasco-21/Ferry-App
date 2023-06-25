import { ButtonType1 } from "../../components/Buttons/ButtonType1";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { TituloApp } from "../../components/TituloApp";

export const LoginPage = () => {

  const context = useContext(AppContext);

  useEffect(() => {
    context.setPushedButtonLogin(false);
    context.setPushedButtonLoginPwd(false);
    context.setPushedButtonIngresar(false);
    context.setPushedButtonSignUp(false);
  },[]);

  return (
    <section
    className="flex flex-col fixed top-0 left-0 right-0 bottom-0
    justify-center items-center bg-primary">
      <div className="w-max h-max p-5 flex flex-col justify-center
      items-center bg-slate-100 rounded-3xl shadow-xl">
        <TituloApp/>
        <Logo
        widthLogo={"big"}
        urlImg={context.LOGO_APP}
        />
        <div className="w-40 flex flex-col">
        <Link to={`/login-pwd`}>
          <ButtonType1
          textButton="login"
          actionButton={()=>context.setPushedButtonLogin(true)}
          typeButton={`button`}
          />
        </Link>
        <Link to={`/login-sign-up`}>
          <ButtonType1
          textButton="sign up"
          actionButton={()=>context.setPushedButtonSignUp(true)}
          typeButton={`button`}
          />
        </Link>
      </div>
      </div>
    </section>
  );
}
