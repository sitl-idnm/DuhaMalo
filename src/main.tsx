import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Создание корневого рендера
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Рендеринг приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
