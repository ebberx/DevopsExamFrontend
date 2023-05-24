import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import CreateCollectionPage from "../Page/CreateCollectionPage.js";
import {createMemoryRouter, RouterProvider} from "react-router-dom";

describe('CreateCollectionPage', () => {
    it('Check if page renders correctly', () => {
        const routes = [{
            path: '/collection/create',
            element: <CreateCollectionPage />,
        },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/collection/create'],
            initialIndex: 0,
        });

        render(<RouterProvider router={router} />)
        const name = screen.getByTestId("collectionname");
        const desc = screen.getByTestId("collectiondescription");
        const url = screen.getByTestId("collectionimageurl");

        expect(name).toBeInTheDocument()
        expect(desc).toBeInTheDocument()
        expect(url).toBeInTheDocument()
    })
});