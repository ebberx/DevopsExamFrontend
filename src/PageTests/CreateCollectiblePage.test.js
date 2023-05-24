import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import CreateCollectiblePage from "../Page/CreateCollectiblePage.js";
import {createMemoryRouter, RouterProvider} from "react-router-dom";

describe('CreateCollectiblePage', () => {
    it('Check if page renders correctly', () => {
        const routes = [{
            path: '/collection/:id/add',
            element: <CreateCollectiblePage />,
        },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/collection/:id/add'],
            initialIndex: 0,
        });

        render(<RouterProvider router={router} />)
        const name = screen.getByTestId("attributename");
        const image = screen.getByTestId("image");
        const btn = screen.getByTestId("btncreate");

        expect(name).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
    })
});