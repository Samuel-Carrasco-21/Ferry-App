import { ButtonType2 } from "../Buttons/ButtonType2";
import { AppContext } from "../../context/AppContext";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Logo } from "../Logo";
import { ModalPage } from "../../pages/ModalPage";
import { Contactos } from "../../pages/ModalPage/Contactos";
import { AcercaDeNosotros } from "../../pages/ModalPage/AcercaDeNosotros";

export const Footer = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("resize", context.handleResize);
  },[window.innerWidth]);

  const [contacto,setContacto] = useState(false);
  const [acerca,setAcerca] = useState(false);

  return (
  <>
    <footer
      className="pl-1 text-white flex justify-start items-center flex-row
        self-end bg-primary"
      style={{
        height: (context.heightFooter-context.headerMenuHeight)!==0 ?
        context.heightFooter-context.headerMenuHeight : '80px'
      }}
    >
      <Logo
      urlImg={context.LOGO_APP}
      widthLogo={"small"}
      />
      <ButtonType2
        texto={"acerca de nosotros"}
        accion={() => setAcerca(true)}
      />
      <ButtonType2
        texto={"contactos"}
        accion={() => setContacto(true)}
      />
    </footer>
    { (contacto || acerca) && 
    (
      <ModalPage>
        {
          contacto ? (
            <Contactos
            action={() => setContacto(false)}
            /> 
          ) : (
            <AcercaDeNosotros
            action={() => setAcerca(false)}
            />
          )
        }
      </ModalPage>
    )
    }
  </>
    
  );
};
