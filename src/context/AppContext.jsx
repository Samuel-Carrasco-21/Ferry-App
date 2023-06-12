import { useEffect, createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const saludo = (message) => alert(message);

  const [pushedButtonLogin, setPushedButtonLogin] = useState(false);
  const [pushedButtonIngresar, setPushedButtonIngresar] = useState(false);
  const [pushedButtonSignUp, setPushedButtonSignUp] = useState(false);

  const [datesLoginPwdEmail, setDatesLoginPwdEmail] = useState("");
  const [datesLoginPwdPwd, setDatesLoginPwdPwd] = useState("");

  const[searchedLocal, setSearchedLocal] = useState("");

  const [datesSignUp,setDatesSignUp] = useState({
    nombre: "",
    email: "",
    password_1: "",
    password_2: "",
  });

  const INSTRUCTIONS = [
    {
      enunciado: "Escriba su nombre",
      placeHolder: "nombre",
      tipoDato: (evento) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.nombre = evento.target.value;
        setDatesSignUp({...auxObjectIns});
      },
      valorPregunta: datesSignUp.nombre,
    },
    {
      enunciado: "Escriba su email",
      placeHolder: "email",
      tipoDato: (evento) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.email = evento.target.value;
        setDatesSignUp({...auxObjectIns});
      },
      valorPregunta: datesSignUp.email,
    },
    {
      enunciado: "Escriba una contraseña (8 caracteres mínimo con 2 letras)",
      placeHolder: "contraseña",
      tipoDato: (evento) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.password_1 = evento.target.value;
        setDatesSignUp({...auxObjectIns});
      },
      valorPregunta: datesSignUp.password_1,
    },
    {
      enunciado: "Escriba nuevamente su contraseña",
      placeHolder: "contraseña",
      tipoDato: (evento) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.password_2 = evento.target.value;
        setDatesSignUp({...auxObjectIns});
      },
      valorPregunta: datesSignUp.password_2,
    },
  ];

  // const writingEmailLoginPwd = (newValue) => {
  //   setdatesLoginPwdEmail(newValue);
  // };

  // const writingPwdLoginPwd = (newValue) => {
  //   setDatesLoginPwdPwd(newValue);
  // };

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

  const INSTRUCTIONS_LOGIN_PWD = [
    new InstructionsPWD("Escriba su email",
    "email","text",setDatesLoginPwdEmail,datesLoginPwdEmail)
    ,
    new InstructionsPWD("Escriba su contraseña","contraseña",
    "text",setDatesLoginPwdPwd,datesLoginPwdPwd)
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
      productName,
      productStatus,
      quantityAvailable,
      productPrice
    ) {
      this.productName = productName;
      this.productStatus = productStatus;
      this.quantityAvailable = quantityAvailable;
      this.productPrice = productPrice;
    }
    getProducto() {
      console.table(this);
    }
  }

  class Local {
    constructor(productsList, localName, localStatus, id) {
      this.productsList = [...productsList];
      this.localName = localName;
      this.localStatus = localStatus;
      this.id = id;
    }
  }

  const generateProductsList = () => {
    const auxArray = [];
    for (let index = 0; index < 9; index++) {
      auxArray.push(
        new Producto(
          "producto - " + (index + 1),
          index % 2 === 0 ? "disponible" : "agotado",
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 50)
        )
      );
    }
    return auxArray;
  };

  const [localsList,setLocalsList] = useState([]);

  const [heightFooter, setHeightFooter] = useState(0);
  const [headerMenuHeight, setHeaderMenuHeight] = useState(0);

  useEffect(() => {
    if(localsList.length===0){
      const auxiliarList = [];
      for (let index = 0; index < 9; index++) {
        auxiliarList.push(
          new Local(
            generateProductsList(),
            "Local - " + (index + 1),
            index % 2 === 0,
            uuidv4()
          )
        );
      }
      setLocalsList([...auxiliarList]);
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
        INSTRUCTIONS,
        datesLoginPwdEmail,
        setDatesLoginPwdEmail,
        datesLoginPwdPwd,
        setDatesLoginPwdPwd,
        datesSignUp,
        Inicio,
        AcercaNosotros,
        Contactos,
        localsList,
        heightFooter,
        setHeightFooter,
        headerMenuHeight,
        setHeaderMenuHeight,
        INSTRUCTIONS_LOGIN_PWD,
        searchedLocal,
        setSearchedLocal,
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
