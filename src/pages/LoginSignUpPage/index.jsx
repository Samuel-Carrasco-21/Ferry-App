import React from "react";
import { AppContext } from "../../context/AppContext";
import '../LoginPage/Login.css';
import './LoginSingUp.css';
import '../LoginPWDPage/LoginPWD.css';
import { FormularioType1 } from "../../components/Formulario/FormularioType1";
import { QuestionType1 } from "../../components/Questions/QuestionType1";
import { useContext } from "react";

export const LoginSignUpPage = () => {

    const context = useContext(AppContext);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        alert("nombre: "+context.datosSingUp.nombre+
            "\nemail: "+context.datosSingUp.email+
            "\npassword_1: "+context.datosSingUp.password_1+
            "\npassword_2: "+context.datosSingUp.password_2);
    };

    return (
        <section className="
        flex
        flex-col
        justify-center
        items-center
        fixed
        -top-1
        -left-1
        -right-1
        -bottom-1
        ">
            <h1 className="
            text-white
            text-3xl
            font-bold
            ">
                Ingrese sus datos
            </h1>

            <FormularioType1
            accion={handleSubmit}
            >
                {context.INSTRUCCIONES.map(elemento => (
                    <QuestionType1
                    enunciado={elemento.enunciado}
                    placeholder={elemento.placeHolder}
                    type={"text"}
                    accion={elemento.tipoDato}
                    valorPregunta={elemento.valorPregunta}
                    />
                ))}

                <input
                type="submit"
                className="
                text-white
                h-12
                w-48
                rounded-lg
                mt-4
                mb-4
                font-bold
                bg-orange-600
                hover:bg-orange-500
                active:bg-orange-700
                self-center
                "
                value="crear cuenta"
                />
            </FormularioType1>
        </section>
    );

}
