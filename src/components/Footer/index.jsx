import { ButtonType2 } from "../Buttons/ButtonType2";
import { AppContext } from "../../context/AppContext";
import { useState, useEffect } from "react";
import { useContext } from "react";
import "./Footer.css";

export const Footer = () => {
  // const {
  //     Inicio,
  //     AcercaNosotros,
  //     Contactos
  // } = useContext(AppContext);

  const context = useContext(AppContext);

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <footer
      className="
        pl-1
        text-white
        border-2
        border-orange-500
        flex
        justify-start
        items-center
        flex-row
        self-end
        "
      style={{
        height:
          (width < 800)
            ? context.heightFooter - context.headerMenuHeight
            : context.heightFooter - context.headerMenuHeight,
      }}
    >
      <h2 className="p-3">Logo</h2>
      <ButtonType2 texto={"inicio"} accion={context.Inicio} margin={"ml-3"} />
      <ButtonType2
        texto={"acerca de nosotros"}
        accion={context.AcercaNosotros}
        margin={"ml-3"}
      />
      <ButtonType2
        texto={"contactos"}
        accion={context.Contactos}
        margin={"ml-3"}
      />
    </footer>
  );
};
