import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Page', () => {
    it('renders the welcome message', () => {
        // We must wrap components using <Link> in a Router for testing
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(screen.getByText('Welcome to React UI')).toBeInTheDocument();
    });

    it('contains a link to the playground', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const link = screen.getByText('Go to Playground');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/playground');
    });
});
