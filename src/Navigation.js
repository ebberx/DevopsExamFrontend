// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav id = "createcolllectionlink">
            <ul>
                <li>
                    <Link to="/overview">Overview</Link>
                </li>
                <li>
                    <Link to="/collection/create">Create Collection</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;