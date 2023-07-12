import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import PagePosts from './Pages/PagePosts/PagePosts';
import PageSinglePost from './Pages/PageSinglePost/PageSinglePost';
import MainPage from "./Pages/MainPage/MainPage";
import {useDispatch, useSelector} from "react-redux";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  console.log(user)

  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<MainPage/>}/>
            <Route path='posts' element={<PagePosts />}/>
            <Route path='login' element={<LoginPage />}/>
            <Route path="posts/:id" element={<PageSinglePost />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
