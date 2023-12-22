import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ApexChart from 'apexcharts'


const root = ReactDOM.createRoot(document.getElementById('root'));

const domContainer = document.querySelector('#app');
 root.render(React.createElement(ApexChart), domContainer);
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


