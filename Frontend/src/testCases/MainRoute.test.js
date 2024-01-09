import React from 'react';
import { render } from '@testing-library/react';
import MainRoute from '../components/MainRoute';
import AuthProvider from '../Context'; // Update the import path according to your file structure
import Login from '../Login'; // Update the import path according to your file structure
import { MemoryRouter } from 'react-router-dom';

describe('MainRoute Component', () => {
    test('renders Login component when userId is undefined', () => {
        // Mock localStorage getItem to return undefined for userId
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        mockGetItem.mockReturnValue(undefined);

        const { getByText } = render(
            <MemoryRouter>
                <MainRoute>
                    <div>Child Component</div>
                </MainRoute>
            </MemoryRouter>
        );

        // Check if the Login component is rendered when userId is undefined
        expect(getByText('Login')).toBeInTheDocument();
    });

    test('renders AuthProvider and children when userId is defined', () => {
        // Mock localStorage getItem to return a value for userId
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        mockGetItem.mockReturnValue('someUserId');

        const { getByText } = render(
            <MemoryRouter>
                <MainRoute>
                    <div>Child Component</div>
                </MainRoute>
            </MemoryRouter>
        );

        // Check if AuthProvider and children are rendered when userId is defined
        expect(getByText('Child Component')).toBeInTheDocument(); // Ensure child components are rendered
    });
});
