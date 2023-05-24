// App.js
import React from 'react';
import AppRoutes from '../Routes.js';
import './App.css';

const App = () => {
    return (
        <div data-testid="app">
            <AppRoutes />
        </div>
    );
};

export default App;