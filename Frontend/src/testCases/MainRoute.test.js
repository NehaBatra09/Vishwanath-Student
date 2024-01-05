import React from 'react';
import { render } from '@testing-library/react';
import MainRoute from '.././components/MainRoute';
import Login from '../Login';
import AuthProvider from '../Context';

describe('MainRoute Component', () => {
    afterEach(() => {
        localStorage.clear();
    });

    test('renders children when userId is present in localStorage', () => {
        localStorage.setItem('userId', 'testUserId');

        const { queryByText } = render(
            <AuthProvider>
                <MainRoute>
                    <div>Child Component</div>
                </MainRoute>
            </AuthProvider>
        );

        expect(queryByText('Child Component')).toBeInTheDocument();
        expect(queryByText('Enter UserName')).toBeNull(); // Ensure Login component is not present
    });

    test('renders Login component when userId is not present in localStorage', () => {
        localStorage.removeItem('userId');

        const { queryByText } = render(
            <AuthProvider>
                <MainRoute>
                    <div>Child Component</div>
                </MainRoute>
            </AuthProvider>
        );
        expect(queryByText('Child Component')).toBeNull()
    });
});
