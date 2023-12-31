import React from 'react';
import { render, act } from '@testing-library/react';
import AuthProvider, { useAuth } from '../Context';
import { apis } from '../apis'; // Replace with suitable mocks

jest.mock('../apis', () => ({
    apis: {
        post: jest.fn(),
        get: jest.fn(),
    },
}));

describe('Auth Context', () => {
    afterEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    test('provides authentication context', () => {
        const ConsumerComponent = () => {
            const auth = useAuth();
            return <div data-testid="test">{JSON.stringify(auth)}</div>;
        };

        const { getByTestId } = render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>
        );

        const contextData = getByTestId('test').textContent;
        expect(contextData).toBeTruthy();
        // Add assertions based on the expected context data structure
    });

    test('logs in user and sets authentication', async () => {
        const mockData = { id: 1 };
        apis.post.mockResolvedValue({ status: true, data: mockData });

        const ConsumerComponent = () => {
            const { isAuthenticated, login } = useAuth();
            return (
                <button onClick={() => login('test@example.com', 'password')}>
                    Login
                </button>
            );
        };

        const { getByText } = render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>
        );

        const loginButton = getByText('Login');
        await act(async () => {
            loginButton.click();
        });

        expect(apis.post).toHaveBeenCalledWith('login', {
            email: 'test@example.com',
            password: 'password',
        });
        // Add assertions based on expected behavior after login
    });

    test('logs out user and clears authentication', async () => {
        const ConsumerComponent = () => {
            const { isAuthenticated, logout } = useAuth();
            return (
                <button onClick={logout}>
                    Logout
                </button>
            );
        };

        localStorage.setItem('userId', '1');
        const { getByText } = render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>
        );

        const logoutButton = getByText('Logout');
        await act(async () => {
            logoutButton.click();
        });

        expect(localStorage.getItem('userId')).toBeNull();
        // Add assertions based on expected behavior after logout
    });

    // More test cases covering getAccounts, addNewAccount, getTransactionsByAccountId, etc.
});
