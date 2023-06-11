import {useState,useEffect} from 'react'

export const ListItemCards = (props) => {
  const children = props.children; 
  
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
  <section className={`
  grid
  overflow-y-scroll
  ${width<500 && "grid-cols-1" }
  ${(width>=500 && width<800) && "grid-cols-2"}
  ${width>=800 && "grid-cols-3"}
  `}
  style = {{ maxHeight: height-(height*0.25) }}
  >
    {children}
  </section>
  );
};
