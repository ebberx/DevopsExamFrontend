import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './Page/LoginPage.js';
import RegisterPage from './Page/RegisterPage.js';
import CollectionsPage from './Page/CollectionsPage.js';
import CreateCollectionPage from './Page/CreateCollectionPage.js';
import CreateCollectiblePage from './Page/CreateCollectiblePage.js'
import CollectiblesPage from "./Page/CollectiblesPage.js";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/overview" element={<CollectionsPage/>} />
                <Route path="/collection/create" element={<CreateCollectionPage/>} />
                <Route path="/collection/:id" element={<CollectiblesPage/>}/>
                <Route path="/collection/:id/add" element={<CreateCollectiblePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;