import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const saludo = (message) => alert(message);

  const [pushedButtonLogin, setPushedButtonLogin] = useState(false);
  const [pushedButtonLoginPwd, setPushedButtonLoginPwd] = useState(false);
  const [pushedButtonIngresar, setPushedButtonIngresar] = useState(false);
  const [pushedButtonSignUp, setPushedButtonSignUp] = useState(false);
  const [pushedButtonProduct, setPushedButtonProduct] = useState(false);
  
  const [changeToLocal,setChangeToLocal] = useState("");

  const [datesLoginPwdEmail, setDatesLoginPwdEmail] = useState("");
  const [datesLoginPwdPwd, setDatesLoginPwdPwd] = useState("");

  const[searchedLocal, setSearchedLocal] = useState("");

  const [datesSignUp,setDatesSignUp] = useState({
    name: "",
    email: "",
    password_1: "",
    password_2: "",
  });

  const INSTRUCTIONS = [
    {
      textQuestion: "Escriba su nombre",
      placeHolder: "nombre",
      actionQuestion: (valor) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.name = valor;
        setDatesSignUp({...auxObjectIns});
      },
      questionValue: datesSignUp.name,
      typeInput: "text"
    },
    {
      textQuestion: "Escriba su email",
      placeHolder: "email",
      actionQuestion: (valor) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.email = valor;
        setDatesSignUp({...auxObjectIns});
      },
      questionValue: datesSignUp.email,
      typeInput: "text"
    },
    {
      textQuestion: "Escriba una contraseña",
      placeHolder: "contraseña",
      actionQuestion: (valor) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.password_1 = valor;
        setDatesSignUp({...auxObjectIns});
      },
      questionValue: datesSignUp.password_1,
      typeInput: "password"
    },
    {
      textQuestion: "Escriba nuevamente su contraseña",
      placeHolder: "contraseña",
      actionQuestion: (valor) => {
        const auxObjectIns = {...datesSignUp};
        auxObjectIns.password_2 = valor;
        setDatesSignUp({...auxObjectIns});
      },
      questionValue: datesSignUp.password_2,
      typeInput: "password"
    },
  ];

  class InstructionsPWD{
    constructor(textQuestion,placeHolder,typeInput,actionQuestion,questionValue){
      this.textQuestion = textQuestion;
      this.placeHolder = placeHolder;
      this.typeInput = typeInput;
      this.actionQuestion = actionQuestion;
      this.questionValue = questionValue;
    }
  }

  const INSTRUCTIONS_LOGIN_PWD = [
    new InstructionsPWD("Escriba su email",
    "email","text",setDatesLoginPwdEmail,datesLoginPwdEmail)
    ,
    new InstructionsPWD("Escriba su contraseña","contraseña",
    "password",setDatesLoginPwdPwd,datesLoginPwdPwd)
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

  const LOGO_APP = "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const [localsList,setLocalsList] = useState([]);
  const [localStore,setLocalStore] = useState([]);
  const [actualLocalStore,setActualLocalStore] = useState([]);
  const [originalLocalList,setOriginalLocalList] = useState([]);

  const [heightFooter, setHeightFooter] = useState(0);
  const [headerMenuHeight, setHeaderMenuHeight] = useState(0);

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [heightScreen, setHeightScreen] = useState(window.innerHeight);
  
  const TOTAL_HEIGHT = heightScreen*0.25;

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
    setHeightScreen(window.innerHeight);
  };

  const MAIN_CONTENT_HEIGHT = {height:heightScreen-heightScreen*0.25};

  return (
    <AppContext.Provider
      value={{
        LOGO_APP,
        saludo,
        pushedButtonLogin,
        setPushedButtonLogin,
        pushedButtonIngresar,
        setPushedButtonIngresar,
        pushedButtonLoginPwd,
        setPushedButtonLoginPwd,
        pushedButtonSignUp,
        setPushedButtonSignUp,
        pushedButtonProduct,
        setPushedButtonProduct,
        changeToLocal,
        setChangeToLocal,
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
        setLocalsList,
        originalLocalList,
        setOriginalLocalList,
        localStore,
        setLocalStore,
        actualLocalStore,
        setActualLocalStore,
        heightFooter,
        setHeightFooter,
        headerMenuHeight,
        setHeaderMenuHeight,
        INSTRUCTIONS_LOGIN_PWD,
        searchedLocal,
        setSearchedLocal,
        widthScreen,
        heightScreen,
        TOTAL_HEIGHT,
        handleResize,
        MAIN_CONTENT_HEIGHT
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
