export const Logo = ({urlImg,widthLogo}) => {
  const width = widthLogo;

  return (
    <figure className={`
    ${width==="small" ? "w-16 h-max" : "w-48 h-48"} m-2 rounded-2xl"`}>
      <img src={urlImg}
      className={`rounded-2xl
      ${width==="small" ? "w-16 h-max" : "w-48 h-48"}`}
      alt="logo"/>
    </figure>
  );
};
