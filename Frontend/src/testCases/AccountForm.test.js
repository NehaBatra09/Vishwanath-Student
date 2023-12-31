import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AccountForm from '../components/AccountForm';
import AuthProvider, { AuthContext } from '../Context';

describe('AccountForm Component', () => {
    it('renders the form fields correctly', () => {
        render(
            <AuthProvider>
                <AccountForm />
            </AuthProvider>
        );

        // Assert that form fields are rendered
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Age')).toBeInTheDocument();
        expect(screen.getByLabelText('Account Type')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument();
    });

    it('updates state when input values change', () => {
        render(<AuthProvider>
            <AccountForm />
        </AuthProvider>);

        // Simulate typing in input fields
        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText('Age'), { target: { value: '25' } });

        // Assert that input values are updated in the state
        expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
        expect(screen.getByLabelText('Email')).toHaveValue('john@example.com');
        expect(screen.getByLabelText('Age')).toHaveValue('25');
    });

    it('submits form with valid data', () => {
        // Mock context functions (addNewAccount in this case)
        const mockContext = {
            addNewAccount: jest.fn(),
        };

        // Render component with mocked context
        render(
            <AuthContext.Provider value={mockContext}>
                <AccountForm />
            </AuthContext.Provider>
        );

        // Simulate filling in form fields
        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText('Age'), { target: { value: '25' } });

        // Simulate selecting an account type

        // Simulate form submission
        fireEvent.click(screen.getByRole('button', { name: 'Done' }));

        // Assert that addNewAccount function is called with correct data
        expect(mockContext.addNewAccount).toHaveBeenCalledWith({
            name: 'John Doe',
            email: 'john@example.com',
            age: 0,
            accountType: 'ac1',
            acnumber: '',
            date: '',
            status: '',
        });
    });
});
