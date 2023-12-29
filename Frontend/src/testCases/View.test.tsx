import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AccountView from '../components/AccountView';
import { useAuth } from '../Context';

jest.mock('../Context', () => ({
    useAuth: jest.fn(),
}));

describe('AccountView Component', () => {
    const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

    beforeEach(() => {
        mockedUseAuth.mockReturnValue({
            accounts: [
                {
                    acnumber: '123456',
                    accountType: 'Savings',
                    Name: 'John Doe',
                    email: 'john@example.com',
                    age: 30,
                    date: '2023-01-01',
                    status: 'Active',
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
        // Add assertions for other account details

        // Test 3: Simulate a click on "Go To Details" button
        const goToDetailsButton = screen.getByRole('button', { name: 'Go To Details' });
        fireEvent.click(goToDetailsButton);

        // Test 4: Ensure navigation to details page triggered by the button click
        await waitFor(() => {
            // Add assertions to verify the navigation to details page
        });
    });

    // Add more test cases for different scenarios or functionalities within the AccountView component
});
