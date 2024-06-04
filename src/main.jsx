import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Teste from './components/Teste.jsx';
import Aston from './routes/Aston.jsx';
import Audi from './routes/Audi.jsx';
import Bmw from './routes/Bmw.jsx';
import Error from './routes/Error.jsx';
import Garagem from './routes/Garagem.jsx';
import Home from './routes/Home.jsx';
import Hyundai from './routes/Hyundai.jsx';
import Lista from './routes/Lista.jsx';
import Login from './routes/Login.jsx';
import Meca from './routes/Meca.jsx';
import Produtos from './routes/Produtos.jsx';
import Volks from './routes/Volks.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home />},
        { path: '/garagem', element: <Garagem />},
        { path: '/garagem/bmw', element: <Bmw />},
        { path: '/garagem/meca', element: <Meca />},
        { path: '/garagem/aston', element: <Aston />},
        { path: '/garagem/hyundai', element: <Hyundai />},
        { path: '/garagem/audi', element: <Audi />},
        { path: '/garagem/volks', element: <Volks />},
        { path: '/login', element: <Login />},
        { path: '/lista', element: <Lista />},
        {path: '/produtos', element: <Produtos/>},
        { path:'/editarcarro/:id', element:<Produtos/>},
        { path:'/teste', element:<Teste/>},
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
