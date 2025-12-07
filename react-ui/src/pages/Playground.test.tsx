import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Playground from './Playground';

describe('Playground Component', () => {

    it('renders the main title', () => {
        render(<Playground />);
        expect(screen.getByText('UI Playground')).toBeInTheDocument();
    });

    it('increments counter on button click', () => {
        render(<Playground />);
        const button = screen.getByText(/Count is 0/i);
        fireEvent.click(button);
        expect(screen.getByText(/Count is 1/i)).toBeInTheDocument();
    });

    it('updates text input and adds item to list', () => {
        render(<Playground />);

        // 1. Type into input
        const input = screen.getByPlaceholderText('Type something...');
        fireEvent.change(input, { target: { value: 'New Test Item' } });

        // Verify input state updated (echoed text)
        expect(screen.getByText(/You typed:/i)).toHaveTextContent('New Test Item');

        // 2. Click Add button
        const addButton = screen.getByText('Add to List');
        fireEvent.click(addButton);

        // 3. Verify item is in the table
        expect(screen.getByRole('cell', { name: 'New Test Item' })).toBeInTheDocument();

        // 4. Verify input is cleared
        expect(input).toHaveValue('');
    });

    it('deletes an item from the list', () => {
        render(<Playground />);
        const input = screen.getByPlaceholderText('Type something...');
        const addButton = screen.getByText('Add to List');

        // Add an item to delete
        fireEvent.change(input, { target: { value: 'Item To Delete' } });
        fireEvent.click(addButton);

        // Verify it exists
        const itemCell = screen.getByRole('cell', { name: 'Item To Delete' });
        expect(itemCell).toBeInTheDocument();

        // Find delete button for this row (it will be the first one since list was empty/new)
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        // Verify it is gone
        expect(itemCell).not.toBeInTheDocument();
    });
});
