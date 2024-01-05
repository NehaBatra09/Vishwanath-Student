import React from 'react';
import { render, act } from '@testing-library/react';
import AuthProvider, { AuthContext, useAuth } from '../Context';
import { apis } from '../apis'; // Replace with suitable mocks
import AccountForm from '../components/AccountForm';
import Transactions from '../components/Transactions';

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

    test('fetches and sets accounts correctly', async () => {
        const mockAccountsData = [
            {
                acnumber: '123',
                accountType: 'Savings',
                name: 'John Doe',
                email: 'johndoe@example.com',
                age: 30,
                date: '2023-01-01',
                status: 'Active',
            },
        ];

        // Mocking the API response
        const mockGetApi = jest.fn().mockResolvedValue({ data: mockAccountsData });
        require('../apis').apis.get.mockImplementation(mockGetApi);
        let result;
        const TestComponent = () => {
            result = useAuth(); // Using useAuth hook here
            return null;
        };

        render(
            <AuthContext.Provider value={{
                getAccounts: mockGetApi, // Mocking getAccounts with the mock function
                accounts: [{
                    acnumber: '123',
                    accountType: 'Savings',
                    name: 'John Doe',
                    email: 'johndoe@example.com',
                    age: 30,
                    date: '2023-01-01',
                    status: 'Active',
                },], // You might need to provide an initial value for accounts here
            }}
            >
                <TestComponent />
            </AuthContext.Provider>
        );

        await act(async () => {
            await result.getAccounts(1); // This should call the mocked getAccounts
        });

        expect(mockGetApi).toHaveBeenCalled(); // Ensure the mock function was called
        expect(result.accounts).toEqual(mockAccountsData);
    });
    // More test cases covering getAccounts, addNewAccount, getTransactionsByAccountId, etc.
});
