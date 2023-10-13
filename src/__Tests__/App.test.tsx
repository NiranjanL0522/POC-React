import App from '../App';
import { fireEvent, render, screen } from '@testing-library/react';
import { ContextProvider } from '../store/contextAPI';

test('renders Employee Records Title', () => {
  render(<ContextProvider><App /></ContextProvider>);
  const textElement = screen.getByText(/Employee Records/i);
  expect(textElement).toBeInTheDocument();
});

test('renders navigation Login button', () => {
  render(<ContextProvider><App /></ContextProvider>);
  const loginButton = screen.getAllByTestId('login');
  expect(loginButton[0]).toBeInTheDocument();
  fireEvent.click(loginButton[0]);
});
