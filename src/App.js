import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import PagePosts from './Pages/PagePosts/PagePosts';
import PageSinglePost from './Pages/PageSinglePost/PageSinglePost';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<PagePosts />}/>
            <Route path="posts/:id" element={<PageSinglePost />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
