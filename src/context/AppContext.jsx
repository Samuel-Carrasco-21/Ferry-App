import { useEffect, createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const saludo = (message) => alert(message);

  const [pushedButtonLogin, setPushedButtonLogin] = useState(false);
  const [pushedButtonIngresar, setPushedButtonIngresar] = useState(false);
  const [pushedButtonSignUp, setPushedButtonSignUp] = useState(false);

  const [datosLoginPwdEmail, setDatosLoginPwdEmail] = useState("");
  const [datosLoginPwdPwd, setDatosLoginPwdPwd] = useState("");

  const[localBuscado, setLocalBuscado] = useState("");

  const datosSingUp = useState({
    nombre: "",
    email: "",
    password_1: "",
    password_2: "",
  });

  const INSTRUCCIONES = [
    {
      enunciado: "Escriba su nombre",
      placeHolder: "nombre",
      tipoDato: (evento) => {
        datosSingUp.nombre = evento.target.value;
      },
      valorPregunta: datosSingUp.nombre,
    },
    {
      enunciado: "Escriba su email",
      placeHolder: "email",
      tipoDato: (evento) => {
        datosSingUp.email = evento.target.value;
      },
      valorPregunta: datosSingUp.email,
    },
    {
      enunciado: "Escriba una contraseña (8 caracteres mínimo con 2 letras)",
      placeHolder: "contraseña",
      tipoDato: (evento) => {
        datosSingUp.password_1 = evento.target.value;
      },
      valorPregunta: datosSingUp.password_1,
    },
    {
      enunciado: "Escriba nuevamente su contraseña",
      placeHolder: "contraseña",
      tipoDato: (evento) => {
        datosSingUp.password_2 = evento.target.value;
      },
      valorPregunta: datosSingUp.password_2,
    },
  ];

  // const writingEmailLoginPwd = (newValue) => {
  //   setDatosLoginPwdEmail(newValue);
  // };

  // const writingPwdLoginPwd = (newValue) => {
  //   setDatosLoginPwdPwd(newValue);
  // };

  let productsList = [
    
  ];

  class InstructionsPWD{
    constructor(textQuestion,placeHolder,typeInput,actionQuestion,questionValue){
      this.textQuestion = textQuestion;
      this.placeHolder = placeHolder;
      this.typeInput = typeInput;
      this.actionQuestion = actionQuestion;
      this.questionValue = questionValue;
    }

    runAction(newValue){
      this.actionQuestion(newValue);
    }
  }

  const INSTRUCCIONES_LOGIN_PWD = [
    new InstructionsPWD("Escriba su email",
    "email","text",setDatosLoginPwdEmail,datosLoginPwdEmail)
    ,
    new InstructionsPWD("Escriba su contraseña","contraseña",
    "text",setDatosLoginPwdPwd,datosLoginPwdPwd)
  ];

  const Inicio = () => {
    alert("INICIO");
  };

  const AcercaNosotros = () => {
    alert("ACERCA DE NOSOTROSO");
  };

  const Contactos = () => {
    alert("CONTACTOS");
  };

  class Producto {
    constructor(
      nombreProducto,
      estadoProducto,
      cantidadDisponible,
      precioProducto
    ) {
      this.nombreProducto = nombreProducto;
      this.estadoProducto = estadoProducto;
      this.cantidadDisponible = cantidadDisponible;
      this.precioProducto = precioProducto;
    }
    getProducto() {
      console.table(this);
    }
  }

  class Local {
    constructor(listaProductos, nombreLocal, estadoLocal, id) {
      this.listaProductos = [...listaProductos];
      this.nombreLocal = nombreLocal;
      this.estadoLocal = estadoLocal;
      this.id = id;
    }
  }

  const generarListaProductos = () => {
    const arreglo = [];
    for (let index = 0; index < 9; index++) {
      arreglo.push(
        new Producto(
          "producto - " + (index + 1),
          index % 2 === 0 ? "disponible" : "agotado",
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 50)
        )
      );
    }
    return arreglo;
  };

  const [listaLocales,setListaLocales] = useState([]);

  const [heightFooter, setHeightFooter] = useState(0);
  const [headerMenuHeight, setHeaderMenuHeight] = useState(0);

  useEffect(() => {
    if(listaLocales.length===0){
      const auxiliarList = [];
      for (let index = 0; index < 9; index++) {
        auxiliarList.push(
          new Local(
            generarListaProductos(),
            "Local - " + (index + 1),
            index % 2 === 0,
            uuidv4()
          )
        );
      }
      setListaLocales([...auxiliarList]);
    }
  },[pushedButtonIngresar]);

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [heightScreen, setHeightScreen] = useState(window.innerHeight);
  
  const HEIGHT_MOBILE = heightScreen*0.20;
  const HEIGHT_DESKTOP = heightScreen*0.25;

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
    setHeightScreen(window.innerHeight);
  };

  const MAIN_CONTENT_HEIGHT = {height: (widthScreen>=800 ?
    heightScreen-heightScreen*0.25 :
    heightScreen-heightScreen*0.20)};

  return (
    <AppContext.Provider
      value={{
        saludo,
        pushedButtonLogin,
        setPushedButtonLogin,
        pushedButtonIngresar,
        setPushedButtonIngresar,
        pushedButtonSignUp,
        setPushedButtonSignUp,
        INSTRUCCIONES,
        datosLoginPwdEmail,
        setDatosLoginPwdEmail,
        datosLoginPwdPwd,
        setDatosLoginPwdPwd,
        datosSingUp,
        Inicio,
        AcercaNosotros,
        Contactos,
        listaLocales,
        heightFooter,
        setHeightFooter,
        headerMenuHeight,
        setHeaderMenuHeight,
        INSTRUCCIONES_LOGIN_PWD,
        localBuscado,
        setLocalBuscado,
        widthScreen,
        heightScreen,
        HEIGHT_MOBILE,
        HEIGHT_DESKTOP,
        handleResize,
        MAIN_CONTENT_HEIGHT
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
