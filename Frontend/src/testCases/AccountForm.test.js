import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
        // Other field changes and assertions go here...
    });

    // it('should allow users to fill in the form fields', async () => {
    //     const { getByLabelText } = render(<AccountForm />);
    //     fireEvent.change(getByLabelText('Id'), { target: { value: 'testId123' } });
    //     fireEvent.change(getByLabelText('Name'), { target: { value: 'Test User' } });
    //     fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    //     fireEvent.change(getByLabelText('Age'), { target: { value: '25' } });
    //     fireEvent.change(getByLabelText('Address'), { target: { value: '123 Street' } });
    //     fireEvent.change(getByLabelText('branch'), { target: { value: 'Test Branch' } });

    //     // Select an account type
    //     fireEvent.mouseDown(getByLabelText('Account Type'));
    //     fireEvent.click(await waitFor(() => getByText('ac2'))); // Change to the desired account type

    //     // You can simulate the date picker change similarly

    //     expect(getByLabelText('Id')).toHaveValue('testId123');
    //     expect(getByLabelText('Name')).toHaveValue('Test User');
    //     expect(getByLabelText('Email')).toHaveValue('test@example.com');
    //     expect(getByLabelText('Age')).toHaveValue('25');
    //     expect(getByLabelText('Address')).toHaveValue('123 Street');
    //     expect(getByLabelText('branch')).toHaveValue('Test Branch');
    //     expect(getByLabelText('Account Type')).toHaveTextContent('ac2');
    // });

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
        // You can add more assertions based on the expected behavior of the form submission
    });

    // Add more test cases for form validation, error handling, etc.
});
