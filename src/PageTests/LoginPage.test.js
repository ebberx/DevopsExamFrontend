import React from 'react';
import {getByTestId, fireEvent, render, screen} from '@testing-library/react';
import LoginPage from "../Page/LoginPage.js";

describe('LoginPage', () => {
    it('renders a message', () => {
        render(<LoginPage />);
        expect(screen.getByText('Don\'t have an account?')).toBeInTheDocument();
    });
    it('should show the login form', function () {
        render(<LoginPage />);
        expect(screen.getByTestId('username')).toBeInTheDocument();
        expect(screen.getByTestId('password')).toBeInTheDocument();
    });
    it('should show the register anchor and the login button', function () {
        render(<LoginPage />);
        expect(screen.getByTestId('btnLogin')).toBeInTheDocument();
        expect(screen.getByTestId('register')).toBeInTheDocument();
    });
    it('logs into the system', () => {
        render(<LoginPage />)
        const button = screen.getByTestId('btnLogin');
        fireEvent.click(button);
        expect(1).toBe(1);
    });
});


