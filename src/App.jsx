import { Routes, Route } from 'react-router-dom';
import MainLayout from './routes/MainLayout/MainLayout.jsx';
import Home from './routes/home/home.jsx';
import BlogPost from './routes/BlogPost/BlogPost.jsx';
import Layout404 from './routes/404/404.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}> 
      
        <Route index element={<Home />} /> 

        <Route path=":postSlug" element={<BlogPost />} />

        <Route path="*" element={<Layout404 />} />
      </Route>
       
    </Routes>
  );
}

export default App;