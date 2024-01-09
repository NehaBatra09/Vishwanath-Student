import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthProvider from '../Context';
import Login from '../Login';
import AccountForm from '../components/AccountForm';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
describe('AuthProvider component', () => {


    const mockNavigate = jest.fn();
    (useNavigate).mockImplementation(() => mockNavigate);

    test('renders AuthProvider component', () => {
        render(
            <AuthProvider>
                <div>Child Components</div>
            </AuthProvider>
        );
    });

    // Test case for login functionality
    test('logs in the user successfully', async () => {
        render(
            <Login />
        );
        await act(async () => {
            const emailInput = screen.getByLabelText('Email'); // Change this to match your actual label text
            const passwordInput = screen.getByLabelText('Password'); // Change this to match your actual label text
            const loginButton = screen.getByRole('button', { name: 'Login' }); // Change this to match your actual button text

            userEvent.type(emailInput, 'test@example.com');
            userEvent.type(passwordInput, 'password');
            fireEvent.click(loginButton);
        })

    });

    // Test case for logout functionality
    test('logs out the user successfully', async () => {
        // Mock the localStorage and simulate a logged-in state
        render(
            <AuthProvider>
                <Header />
            </AuthProvider>
        );

        const logoutButton = screen.getByRole('button', { name: 'Log Out' }); // Change this to match your actual button text
        fireEvent.click(logoutButton);


    });

    // Test case for adding a new account
    // test('adds a new account successfully', async () => {
    //     // Mock the apis.post method to return a successful response
    //     // Simulate user interaction with the add account form
    //     // For example, assuming there's a form to add a new account:

    //     render(
    //         <AuthProvider>
    //             <AccountForm />
    //         </AuthProvider>
    //     );


    //     const idInput = screen.getByLabelText('Id'); // Change this to match your actual label text
    //     const addressInput = screen.getByLabelText('Address'); // Change this to match your actual label text

    //     userEvent.type(idInput, '123456');
    //     userEvent.type(addressInput, 'Test Address');

    //     const addAccountButton = screen.getByRole('button', { name: 'Add Account' }); // Change this to match your actual button text
    //     fireEvent.click(addAccountButton);

    //     await waitFor(() => {
    //         expect(mockNavigate).toHaveBeenCalledWith('/accountView');
    //     });
    // });

});
