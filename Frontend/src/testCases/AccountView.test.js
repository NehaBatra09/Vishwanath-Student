import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AccountView from '../components/AccountView';
import AuthProvider, { AuthContext, useAuth } from '../Context';

jest.mock('../Context', () => ({
    useAuth: jest.fn(),
}));

describe('AccountView Component', () => {
    const mockedUseAuth = useAuth

    beforeEach(() => {
        mockedUseAuth.mockReturnValue({
            accounts: [
                {
                    id: '123456',
                    accountType: 'Savings',
                    name: 'John Doe',
                    email: 'john@example.com',
                    age: 30,
                    date: '2023-01-01',
                    status: 'Active',
                    address: "ABCD",
                    branch: "ABCD"
                },
                // Add more sample accounts as needed for your tests
            ],
            getAccounts: jest.fn(),
        });
    });

    it('renders AccountView with account details', async () => {
        render(
            <Router>
                <AccountView />
            </Router>
        );

        // Test 1: Ensure the "Create Account" button renders
        expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();

        // Test 2: Ensure the account details are rendered correctly
        expect(screen.getByText('AC/No: 123456')).toBeInTheDocument();
        expect(screen.getByText('AC/Type: Savings')).toBeInTheDocument();
        expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
        expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
        expect(screen.getByText('Age: 30')).toBeInTheDocument();
        expect(screen.getByText('Address: ABCD')).toBeInTheDocument();
        expect(screen.getByText('Branch: ABCD')).toBeInTheDocument();

        // Test 3: Simulate a click on "Go To Details" button
        const goToDetailsButton = screen.getByRole('button', { name: 'Go To Details' });
        fireEvent.click(goToDetailsButton);

        await waitFor(() => {
        });
    });

    // Add more test cases for different scenarios or functionalities within the AccountView component
});

