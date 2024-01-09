import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useLocation } from 'react-router-dom'; // Import the Router component
import { useAuth } from '../Context';
import Transactions from '../components/Transactions';

jest.mock('../Context', () => ({
    useAuth: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
}));

describe('Transactions Component', () => {
    beforeEach(() => {

        (useAuth).mockReturnValue({
            transactions: [
                {
                    tid: '12345',
                    total: 100,
                    credit: 50,
                    debit: 50,
                },
            ],
            getTransactionsByAccountId: jest.fn(),
        });

        (useLocation).mockReturnValue({
            state: { acnumber: 12345 }, // Mocking location state
        });

        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => '1'), // Mocking localStorage userId
            },
            writable: true,
        });
    });


    it('renders Transactions component with transactions data', () => {
        render(<Transactions />);
        // expect(screen.getByText('Transaction Id')).toBeInTheDocument();
        expect(screen.getByText('Total Amount')).toBeInTheDocument();
        expect(screen.getByText('Payment Mode')).toBeInTheDocument();
        expect(screen.getByText('12345')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('50 50')).toBeInTheDocument();
    });

    // Add more test cases for useEffect, getData function, empty transactions, etc.
});