import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../Component/MyComponent.js';

describe('MyComponent', () => {
    it('renders a message', () => {
        render(<MyComponent />);
        expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    });
});