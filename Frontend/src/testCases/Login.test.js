import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';
import { AuthContext } from '../Context'; // Update the import path according to your file structure
import { act } from 'react-dom/test-utils';

describe('Login Component', () => {
    test('renders login form with fields and login button', async () => {
        const { getByLabelText, getByRole } = render(<Login />);

        await act(async () => {
            expect(getByLabelText('Email')).toBeInTheDocument();
            expect(getByLabelText('Password')).toBeInTheDocument();

            expect(getByRole('button', { name: 'Login' })).toBeInTheDocument();

            await waitFor(() => {
            });
        });

    });

    test('calls login function on button click', async () => {
        const mockLogin = jest.fn();
        const mockAuthContext = {
            login: mockLogin,
        };

        const { getByRole, getByLabelText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Login />
            </AuthContext.Provider>
        );



        // Simulate user input
        await act(async () => {
            const emailInput = getByLabelText('Email');
            const passwordInput = getByLabelText('Password');
            const loginButton = getByRole('button', { name: 'Login' });
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
            fireEvent.click(loginButton);
            expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'testPassword');

            await waitFor(() => {
            });
        });

    });
});
