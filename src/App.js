// App.js
import React from 'react';
import AppRoutes from './Routes.js';
import background from "./img/background.jpeg";

const App = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }}>
            <AppRoutes />
        </div>
    );
};

export default App;