import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { AuthContext } from '../Context';

describe('Header Component', () => {
    test('displays user email and calls logout function when the button is clicked', () => {
        const mockLogout = jest.fn();

        // Mocking useAuth context value
        const mockContextValue = {
            logout: mockLogout,
        };

        // Render the Header component with mocked context value
        const { getByRole } = render(
            <AuthContext.Provider value={mockContextValue}>
                <Header />
            </AuthContext.Provider>
        );


        fireEvent.click(getByRole('button', { name: 'Log Out' }));
        expect(mockLogout).toHaveBeenCalledTimes(1);
    });
});
