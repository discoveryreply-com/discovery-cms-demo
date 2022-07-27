import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slug from './products/slug';
import HomePage from './HomePage';

import {
    BrowserRouter,
    Navigate,
    Routes,
    Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path="/home" element={<App/>} >
                <Route index element={<HomePage/>} />
                <Route path=":slug" element={<Slug/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);