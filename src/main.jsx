import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/Index';
import 'aos/dist/aos.css';
import TodosProvider from './context/todosContext';
import ThemeProvider from './context/themesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <ThemeProvider>
          <Routers />
        </ThemeProvider>
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
