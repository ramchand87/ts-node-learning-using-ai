import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Playground from './Playground';
import { Provider } from 'react-redux';
import { store } from '../store/store';

// Helper to render with Redux Provider
const renderWithProvider = (component: React.ReactElement) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

describe('Playground Component', () => {
    it('renders the main title', () => {
        renderWithProvider(<Playground />);
        expect(screen.getByText('UI Playground (Redux Powered)')).toBeInTheDocument();
    });

    it('increments counter on button click', () => {
        renderWithProvider(<Playground />);
        const button = screen.getByText(/Count is 0/i);
        fireEvent.click(button);
        expect(screen.getByText(/Count is 1/i)).toBeInTheDocument();
    });

    it('updates text input and adds item to list', () => {
        renderWithProvider(<Playground />);

        const input = screen.getByPlaceholderText('Type something...');
        fireEvent.change(input, { target: { value: 'New Test Item' } });

        expect(screen.getByText(/You typed:/i)).toHaveTextContent('New Test Item');

        const addButton = screen.getByText('Add to List');
        fireEvent.click(addButton);

        expect(screen.getByRole('cell', { name: 'New Test Item' })).toBeInTheDocument();
        expect(input).toHaveValue('');
    });

    it('deletes an item from the list', () => {
        renderWithProvider(<Playground />);
        const input = screen.getByPlaceholderText('Type something...');
        const addButton = screen.getByText('Add to List');

        fireEvent.change(input, { target: { value: 'Item To Delete' } });
        fireEvent.click(addButton);

        const itemCell = screen.getByRole('cell', { name: 'Item To Delete' });
        expect(itemCell).toBeInTheDocument();

        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        expect(itemCell).not.toBeInTheDocument();
    });
});
