import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { PrincipalMenuPage } from '../pages/PrincipalMenuPage'
import { LoginPage } from '../pages/LoginPage'
import { LoginPWDPage } from '../pages/LoginPWDPage'
import { LoginSignUpPage } from '../pages/LoginSignUpPage'
import { LocalMenuPage } from '../pages/LocalMenuPage'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { LocalProductsPage } from '../pages/LocalProductsPage';

function App() {
  const context = useContext(AppContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={`/login`}/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/login-pwd' element={context.pushedButtonLogin ?
            <LoginPWDPage/> : <Navigate to={`/login`}/>}/>
          <Route path='/login-sign-up' element={context.pushedButtonSignUp ?
          <LoginSignUpPage/> : <Navigate to={`/login`}/>}/>
          <Route path='/principal-menu' element={
            context.pushedButtonLoginPwd ?
            <PrincipalMenuPage/> : <Navigate to={`/login`}/>
          }
            children={
            <>
              <Route path='local-list-menu' element={<LocalMenuPage/>}/>
              <Route path='local-list-menu/:_id' element={<LocalProductsPage/>}/>
            </>
            }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
