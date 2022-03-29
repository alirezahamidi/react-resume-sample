import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainTheme from "./themes/main.theme/main-theme";
import { BrowserRouter } from "react-router-dom";
import { resume } from './resume';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainTheme mainData={resume} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
