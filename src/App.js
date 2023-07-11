import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import PagePosts from './Pages/PagePosts/PagePosts';
import PageSinglePost from './Pages/PageSinglePost/PageSinglePost';
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<MainPage/>}/>
            <Route path='posts' element={<PagePosts />}/>
            <Route path="posts/:id" element={<PageSinglePost />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
