import React from 'react';
import ReactDOM from 'react-dom/client';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Garagem from './routes/Garagem.jsx';
import Login from './routes/Login.jsx';
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
        { path: '/Garagem', element: <Garagem />},
        { path: '/Login', element: <Login />},
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
