import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/Index';
import 'aos/dist/aos.css';
import TodosProvider from './context/todosContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <Routers />
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
