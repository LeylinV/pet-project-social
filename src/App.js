import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import PagePosts from './Pages/PagePosts/PagePosts';
import PageSinglePost from './Pages/PageSinglePost/PageSinglePost';
import MainPage from "./Pages/MainPage/MainPage";
import {useDispatch, useSelector} from "react-redux";
import LoginPage from "./Pages/LoginPage/LoginPage";
import {AuthContext} from "./context";
import {useContext, useEffect, useState} from "react";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
  },[])

  const login = () => {
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  };

  return (
      <AuthContext.Provider value={{
        isAuth,
        login,
        logout
      }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='login' element={<LoginPage />}/>
                <Route path='posts' element={<PrivateRoute><PagePosts /></PrivateRoute>} />
                <Route path="posts/:id" element={<PrivateRoute><PageSinglePost /></PrivateRoute>} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>

  );
}

export default App;
