import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import RegisterPage from "../Page/RegisterPage.js";
import {createMemoryRouter, RouterProvider} from "react-router-dom";

describe('RegisterPage', () => {
    it('Check if page renders correctly', () => {
        const routes = [{
                path: '/register',
                element: <RegisterPage />,
            },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/register'],
            initialIndex: 0,
        });

        render(<RouterProvider router={router} />)
        const btn = screen.getByTestId("btnRegister")
        expect(btn).toBeInTheDocument()

        const form = screen.getByTestId("registerForm")

        const input1 = screen.getByTestId("username")
        const input2 = screen.getByTestId("password")
        const input3 = screen.getByTestId("email")

        expect(form).toBeInTheDocument()
        expect(input1).toBeInTheDocument()
        expect(input2).toBeInTheDocument()
        expect(input3).toBeInTheDocument()
    });
});