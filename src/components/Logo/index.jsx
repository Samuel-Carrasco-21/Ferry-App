import '../../App/App.css'

export const Logo = ({urlImg}) => {
  return (
    <figure className="w-28 m-5 rounded-2xl">
      <img src={urlImg}
      className="App-logo rounded-2xl p-3 bg-black" alt="logo"/>
    </figure>
  );
};
