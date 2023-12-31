import { render, screen } from '@testing-library/react';
import App from './App';
import AuthProvider from './Context';


test('renders learn react link', () => {
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
  const linkElement = screen.getByText(/Account/i);
  expect(linkElement).toBeInTheDocument();
});
