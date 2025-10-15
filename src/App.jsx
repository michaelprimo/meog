import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from './routes/MainLayout/MainLayout.jsx';
import Home from './routes/home/home.jsx';
import BlogPost from './routes/BlogPost/BlogPost.jsx';
import Layout404 from './routes/404/404.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path=":postSlug"
          element={
            <Suspense fallback={<div>Loading Post...</div>}>
              <BlogPost />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading 404...</div>}>
              <Layout404 />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;