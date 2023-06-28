import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { useLocation } from "react-router-dom";
import { AiOutlineEye, AiFillEyeInvisible } from 'react-icons/ai';

export const QuestionType2 = ({instruction}) => {
  const context = useContext(AppContext);
  
  const {textQuestion,placeHolder,actionQuestion,questionValue,typeInput}
  = instruction;

  const [textError,setTextError] = useState("");
  const [findedError,setFindedError] = useState(false);

  const {pathname} = useLocation();

  const [eyeState,setEyeState] = useState(false);

  const [onClick,setOnClick] = useState(false);

  useEffect(() => {
    if(pathname==="/login-sign-up"){
      if(placeHolder==="nombre"){
        const oneSmallLetter = /[a-z]/;
        const oneBigLetter = /[A-Z]/;
        if((!oneSmallLetter.test(questionValue) && !oneBigLetter.test(questionValue))){
          setFindedError(true);
          setTextError("* El nombre debe tener al menos 1 letra");
        }else{
          setFindedError(false);
        }
      }else if(placeHolder==="email"){
        const emailVerificator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailVerificator.test(questionValue)){
          setFindedError(true);
          setTextError("* Email invalido");
        }else{
          setFindedError(false);
        }
      }else if(textQuestion==="Escriba una contraseña"){
        const passwordVerificator =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/;
        const lengthPassword = /^.{8,}$/;
        const oneSmallLetter = /[a-z]/;
        const oneBigLetter = /[A-Z]/;
        if(!passwordVerificator.test(questionValue)){
          let auxTextError = "";
          if(!lengthPassword.test(questionValue)){
            auxTextError="* La contraseña debe contener al menos 8 caracteres";
          }else if(!oneSmallLetter.test(questionValue)) {
            auxTextError="* La contraseña debe tener al menos 1 minúscula";
          }else if(!oneBigLetter.test(questionValue)){
            auxTextError="* La contraseña debe tener al menos 1 mayúscula";
          }else{
            auxTextError="* La constraseña debe tener al menos 1 número";
          }
          setTextError(auxTextError);
          setFindedError(true);
        }else{
          setFindedError(false);
        }
      }else{
        if(context.INSTRUCTIONS[3].questionValue !==
          context.INSTRUCTIONS[2].questionValue){
          setTextError("* Las contraseñas deben ser iguales");
          setFindedError(true);
        }else{
          setFindedError(false);
        }
      }
    }
  },[questionValue]);
  
  return (
    <div className="flex flex-col items-start overflow-auto w-full">
      <label className="mt-4 block mb-1 text-sm font-medium
      text-gray-900 dark:text-white">{textQuestion}</label>
      {
        (findedError && pathname==="/login-sign-up") && (
          <p className="p-2 rounded-xl text-red-500 font-light text-sm">
            {textError}
          </p>
        )
      }
      <div className="flex flex-row items-center w-full">
        <input value={questionValue}
        onChange={(event) => actionQuestion(event.target.value)}
        type={placeHolder!=="contraseña" ? typeInput
        : eyeState ? "text" : typeInput} id={textQuestion}
        className="bg-gray-50
        border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500
        dark:focus:border-blue-500"
        placeholder={placeHolder} required/>
        {
          placeHolder==="contraseña" && (
            <button className="p-1 m-1 rounded-md shadow-lg
            hover:bg-gray-200 active:bg-gray-300" type="button"
            onClick={() => setEyeState(!eyeState)}>
              {eyeState ? (
                <AiOutlineEye className="w-5 h-5"/>
              ) : (
                <AiFillEyeInvisible className="w-5 h-5"/>
              )}
            </button>
          )
        }
      </div>
    </div>
  );
};
