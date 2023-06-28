export const Logo = ({urlImg,widthLogo}) => {
  const width = widthLogo;

  return (
    <figure className={`
    ${width==="small" ? "w-10 h-10 rounded-full" :
    "w-48 h-48 rounded-2xl"} m-2"`}>
      <img src={urlImg}
      className={`
      ${width==="small" ? "w-10 h-10 rounded-full" :
      "w-48 h-48 rounded-2xl"}`}
      alt="logo"/>
    </figure>
  );
};
