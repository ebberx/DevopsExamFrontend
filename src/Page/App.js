// App.js
import React from 'react';
import AppRoutes from '../Routes.js';
import './App.css';

const App = () => {
    return (
        <div >
            <h1 style={{textAlign: "center"}}>CollectionKeeperz</h1>
            <AppRoutes />
        </div>
    );
};

export default App;