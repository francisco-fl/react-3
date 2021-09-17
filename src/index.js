import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber'

import App from './App';
import Fallback from './Fallback'
import reportWebVitals from './reportWebVitals';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={<Fallback />}>
        <App /> 
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
