import {fireEvent, render, screen} from '@testing-library/react';
import CollectionsPage from "../Page/CollectionsPage.js";
import {createMemoryRouter, RouterProvider} from "react-router-dom";

describe('CollectionsPage', () => {
    it('Check if page renders correctly', () => {
        const routes = [{
            path: '/overview',
            element: <CollectionsPage/>,
        },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ['/overview'],
            initialIndex: 0,
        });

        render(<RouterProvider router={router}/>)

        const btn = screen.getByTestId("btnAddCollection");
        expect(btn).toBeInTheDocument()
    })
});