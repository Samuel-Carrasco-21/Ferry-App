import { AppContext } from '../../context/AppContext';
import { useEffect,useContext } from "react";
import './ListCards.css';
export const ListCards = ({children}) => {

  const context = useContext(AppContext);

  const WIDTH = context.widthScreen;

  useEffect(() => {
    context.setHeightFooter(context.TOTAL_HEIGHT);
    window.addEventListener("resize",context.handleResize);
  },[window.innerWidth]);

  return (
    <section className={`
    grid
    overflow-y-scroll
    ${WIDTH<525 && "grid-cols-1"}
    ${(WIDTH>=525 && WIDTH<850) && "grid-cols-2"}
    ${(WIDTH>=850 && WIDTH<=1440) && "grid-cols-3"}
    ${(WIDTH>1440) && "grid-cols-4"}
    w-full
    `}
    style={context.MAIN_CONTENT_HEIGHT}
    > 
      {children}
    </section>
  )
}
