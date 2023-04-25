import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';
import OverviewPage from './OverviewPage.js';
import CreateCollectionPage from './CreateCollectionPage.js';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/overview" element={<OverviewPage/>} />
                <Route path="/overview/create" element={<CreateCollectionPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;