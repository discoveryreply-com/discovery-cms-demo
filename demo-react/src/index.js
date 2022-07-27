import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Slug from './products/slug';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/home" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path=":slug" element={<Slug />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
