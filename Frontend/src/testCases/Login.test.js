import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Login from '../Login';

// Mocking the useAuth hook
jest.mock('../Context', () => ({
    useAuth: jest.fn(),
}));

describe('Login Component', () => {
    it('should render login form and handle login button click', async () => {
        const mockLogin = jest.fn(); // Mock login function

        // Mock useAuth hook implementation
        const mockAuthContext = {
            login: mockLogin,
            isAuthenticated: false,
        };
        // Provide the mockAuthContext when useAuth is called in Login component
        jest.spyOn(require('../Context'), 'useAuth').mockReturnValue(mockAuthContext);

        render(<Login />);

        // Get input elements
        const usernameInput = screen.getByPlaceholderText('Enter UserName');
        const passwordInput = screen.getByPlaceholderText('Enter Password');
        const loginButton = screen.getByText('Login');

        // Simulate user input
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        // Click login button
        fireEvent.click(loginButton);

        // Wait for the async operation to complete (useAuth hook)
        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith('testuser', 'testpassword');
        });

        // Optionally, you can add assertions for redirection after successful login
        // For instance, check if the URL changes to '/accountView'
        // expect(window.location.href).toBe('/accountView');
    });
});
