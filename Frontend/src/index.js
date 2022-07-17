import React from 'react';
import ReactDOM from 'react-dom/client';
import smiling_sea from './Assets/smiling_sea.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>哈囉，請叫我 Shaynie ! </h1>
    <img src={smiling_sea} alt="smiling_sea" width={500} height={350}/>
    <h1>哩賀，哇洗蔡紗</h1>
    
  </React.StrictMode>
);
