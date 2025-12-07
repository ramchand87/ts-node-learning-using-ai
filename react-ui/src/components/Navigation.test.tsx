import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation Component', () => {
    it('renders the brand name', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );
        expect(screen.getByText('React AI Workspace')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );
        expect(screen.getByText('Home')).toBeVisible();
        expect(screen.getByText('Playground')).toBeVisible();
    });
});
