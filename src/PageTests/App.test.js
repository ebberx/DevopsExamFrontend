import {fireEvent, render, screen} from '@testing-library/react';
import App from "../Page/App.js";
describe('App', () => {
    it('Check if page renders correctly', () => {
        render(<App />)
        const div = screen.getByTestId("app");
        expect(div).toBeInTheDocument()
    })
});