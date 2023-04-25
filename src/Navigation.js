// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/overview">Overview</Link>
                </li>
                <li>
                    <Link to="/overview/create">Create Collection</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;