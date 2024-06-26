import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop';
import Teste from './components/Teste.jsx';
import { Provider } from './context/Provider.jsx';

import Alterar from './routes/Alterar/Alterar.jsx';
import AlterData from './routes/AlterData/AlterData.jsx';
import Aston from './routes/Aston.jsx';
import Audi from './routes/Audi.jsx';
import Bmw from './routes/Bmw.jsx';
import Cadastro from './routes/Cadastro/Cadastro.jsx';
import Compra from './routes/Compra/Compra.jsx';
import Detalhes from './routes/Detalhes/Detalhes.jsx';
import Error from './routes/Error.jsx';
import Garagem from './routes/Garagem.jsx';
import Home from './routes/Home.jsx';
import Hyundai from './routes/Hyundai.jsx';
import Lista from './routes/Lista.jsx';
import Login from './routes/Login/Login.jsx';
import Meca from './routes/Meca.jsx';
import Produtos from './routes/Produtos.jsx';
import Volks from './routes/Volks.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from 'swiper/element/bundle';

register();

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/garagem', element: <Garagem /> },
        { path: '/garagem/bmw', element: <Bmw /> },
        { path: '/garagem/meca', element: <Meca /> },
        { path: '/garagem/aston', element: <Aston /> },
        { path: '/garagem/hyundai', element: <Hyundai /> },
        { path: '/garagem/audi', element: <Audi /> },
        { path: '/garagem/volks', element: <Volks /> },
        { path: '/login', element: <Login /> },
        { path: '/lista', element: <Lista /> },
        { path: '/produtos', element: <Produtos /> },
        { path: '/editarcarro/:id', element: <Produtos /> },
        { path: '/detalhes/:id', element: <Detalhes /> },
        { path: '/teste/:id', element: <Teste /> },
        { path: '/teste', element: <Teste /> },
        { path: '/cadastro', element: <Cadastro /> },
        { path: '/compra/:id', element: <Compra /> },
        { path: '/alterar/:id', element: <Alterar /> },
        { path: '/alterardados/:id', element: <AlterData /> },
      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}>
        <ScrollToTop />
        <App/>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
