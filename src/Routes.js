import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './Page/LoginPage.js';
import RegisterPage from './Page/RegisterPage.js';
import OverviewPage from './Page/OverviewPage.js';
import CreateCollectionPage from './Page/CreateCollectionPage.js';
import AddCollectiblePage from './Page/AddCollectiblePage.js'
import CollectiblesPage from "./Page/CollectiblesPage.js";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/overview" element={<OverviewPage/>} />
                <Route path="/collection/create" element={<CreateCollectionPage/>} />
                <Route path="/collection/:id" element={<CollectiblesPage/>}/>
                <Route path="/collection/:id/add" element={<AddCollectiblePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;