import { Login } from '../components/login';
import { render, screen } from '@testing-library/react';

test('renders login componnet', () => {
    render(<Login />);
    const userNameElement = screen.getByTestId('username');
    expect(userNameElement).toBeInTheDocument();
    const passwordElement = screen.getByTestId('password');
    expect(passwordElement).toBeInTheDocument();
    
  });