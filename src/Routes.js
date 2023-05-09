import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './Page/LoginPage.js';
import RegisterPage from './Page/RegisterPage.js';
import OverviewPage from './Page/OverviewPage.js';
import CreateCollectionPage from './Page/CreateCollectionPage.js';
import CollectionPage from './Page/CollectionPage.js'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/overview" element={<OverviewPage/>} />
                <Route path="/overview/create" element={<CreateCollectionPage/>} />
                <Route path ="/collections/" element={<CollectionPage/>}>
                    <Route path=":id" element={<CollectionPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;