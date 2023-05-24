import {fireEvent, render, screen} from '@testing-library/react';
import CollectiblesPage from "../Page/CollectiblesPage.js";
import {createMemoryRouter, RouterProvider} from "react-router-dom";

describe('CollectiblesPage', () => {
    it('Check if page renders correctly', () => {
        const routes = [{
            path: '/collection/:id',
            element: <CollectiblesPage/>,
        },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/collection/:id'],
            initialIndex: 0,
        });

        render(<RouterProvider router={router}/>)

        const btn = screen.getByTestId("btnAddCollection");
        expect(btn).toBeInTheDocument()
    })
});