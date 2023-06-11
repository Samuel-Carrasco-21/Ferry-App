// import reactLogo from '../assets/react.svg'
// import viteLogo from '../../public/vite.svg'
import { BrowserRouter, RouterProvider, createBrowserRouter, useRoutes } from 'react-router-dom';
import './App.css'
import { PrincipalMenuPage } from '../pages/PrincipalMenuPage'
import { LoginPage } from '../pages/LoginPage'
import { LoginPWDPage } from '../pages/LoginPWDPage'
import { LoginSignUpPage } from '../pages/LoginSignUpPage'
import { LocalMenuPage } from '../pages/LocalMenuPage'

function App() {
  // const [count, setCount] = useState(0)
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage/>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/login-pwd',
      element: <LoginPWDPage/>
    },
    {
      path: '/principal-menu',
      element: <PrincipalMenuPage/>,
      children: [
        {
          path: 'local-list-menu',
          element: <LocalMenuPage/>
        }
      ]
    },
    {
      path: '/login-sing-up',
      element: <LoginSignUpPage/>
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}/>
    </>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  );
}

export default App
