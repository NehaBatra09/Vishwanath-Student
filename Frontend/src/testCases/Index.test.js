import { render } from '@testing-library/react';
import App from '../App';
import AuthProvider from '../Context';



describe('App Integration Test', () => {
    it('renders App wrapped in AuthProvider', () => {
        render(
            <AuthProvider>
                <App />
            </AuthProvider>
        );

    });
});
