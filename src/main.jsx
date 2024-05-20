import React from 'react';
import ReactDOM from 'react-dom/client';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Garagem from './routes/Garagem.jsx';
import Bmw from './routes/Bmw.jsx';
import Meca from './routes/Meca.jsx';
import Aston from './routes/Aston.jsx';
import Hyundai from './routes/Hyundai.jsx';
import Audi from './routes/Audi.jsx';
import Volks from './routes/Volks.jsx';
import Login from './routes/Login.jsx';
import Lista from './routes/Lista.jsx';
import Produtos from './routes/Produtos.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

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
        { path:'/editarproduto/:id', element:<Produtos/>},
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
