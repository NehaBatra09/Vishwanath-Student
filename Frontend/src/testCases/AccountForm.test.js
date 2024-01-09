import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AccountForm from '../components/AccountForm';
import { AuthContext } from '../Context'; // Update the import path according to your file structure
import MainRoute from '../components/MainRoute';
import { act } from 'react-dom/test-utils';

describe('AccountForm component', () => {
    it('should allow users to fill in the form fields', async () => {
        const { getByLabelText } = render(<AccountForm />);
        await act(async () => {
            // Simulate changes
            const idInput = getByLabelText(/Id/i); // Using regular expression to find the label case-insensitively
            const nameInput = getByLabelText(/Name/i); // Using placeholder text
            fireEvent.change(idInput, { target: { value: 'testId123' } });
            fireEvent.change(nameInput, { target: { value: 'Test User' } });
        })
    });



    it('should trigger form submission on "Done" button click', async () => {
        const mockAddNewAccount = jest.fn();
        const mockContext = {
            addNewAccount: mockAddNewAccount,
        };

        const { getByText } = render(<AccountForm />, { wrapper: ({ children }) => <AuthContext.Provider value={mockContext}>{children}</AuthContext.Provider> });
        await act(async () => {
            fireEvent.click(getByText('Done'));
            expect(mockAddNewAccount).toHaveBeenCalledTimes(1);
        })
    });
    it('submits the form with valid data', () => {
        const { getByLabelText } = render(<AccountForm />);

        fireEvent.change(getByLabelText(/Id/i), { target: { value: 'ValidId123' } });
        fireEvent.change(getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(getByLabelText(/Age/i), { target: { value: '30' } });
        fireEvent.change(getByLabelText(/Address/i), { target: { value: '123 Main St' } });
        fireEvent.change(getByLabelText(/branch/i), { target: { value: 'Branch XYZ' } });

        fireEvent.click(screen.getByText('Done'));

    });
});
