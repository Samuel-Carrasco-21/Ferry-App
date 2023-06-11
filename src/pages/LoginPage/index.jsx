import "./Login.css";
import { ButtonType1 } from "../../components/Buttons/ButtonType1";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const LoginPage = () => {

  const context = useContext(AppContext);

  return (
    <section
    className="flex flex-wrap flex-col items-center fixed -top-4 -left-4
    -right-4 -bottom-4 justify-center">
      <h1
      className="text-white text-4xl font-bold">
        Ferry App
      </h1>
      <Logo/>
      
      
      <Link to={`/login-pwd`}>
        <ButtonType1
        textButton="login"
        actionButton={()=>{}}
        typeButton={`button`}
        />
      </Link>
      <Link to={`/login-sing-up`}>
        <ButtonType1
        textButton="sign up"
        actionButton={()=>{}}
        typeButton={`button`}
        />
      </Link>
    </section>
  );
}
