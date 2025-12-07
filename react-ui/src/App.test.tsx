import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Integration', () => {
    it('renders the full application with navigation', () => {
        render(<App />);
        // Verify Navigation is present
        expect(screen.getByText('React AI Workspace')).toBeInTheDocument();
        // Verify we start on Home page by default
        expect(screen.getByText('Welcome to React UI')).toBeInTheDocument();
    });
});
