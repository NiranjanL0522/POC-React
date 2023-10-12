import { Login } from '../components/login';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

test('login componnet renders correctly', () => {
  render(<Login />);
  const userNameElement = screen.getByTestId('username');
  expect(userNameElement).toBeInTheDocument();
  const passwordElement = screen.getByTestId('password');
  expect(passwordElement).toBeInTheDocument();
  const loginButton = screen.getByTestId('login');
  expect(loginButton).toBeInTheDocument();
  const cancelButton = screen.getByTestId('cancel');
  expect(cancelButton).toBeInTheDocument();
});

test('login component with username input change', () => {
  render(<Login />);
  const userNameElement = screen.getByTestId('username').querySelector('input') as HTMLInputElement;
  fireEvent.change(userNameElement, { target: { value: 'niranjan' } });
  expect(userNameElement.value).toBe('niranjan');
});

test('login component with password input change', () => {
  render(<Login />);
  const passwordElement = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
  fireEvent.change(passwordElement, { target: { value: 'niranjan' } });
  expect(passwordElement.value).toBe('niranjan');
});

test('login component with cancel action', () => {
  render(<Login />);
  const userNameElement = screen.getByTestId('username').querySelector('input') as HTMLInputElement;
  const passwordElement = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
  const cancelButton = screen.getByTestId('cancel');
  fireEvent.change(userNameElement, { target: { value: 'niranjan' } });
  fireEvent.change(passwordElement, { target: { value: 'niranjan' } });
  fireEvent.click(cancelButton);
  expect(passwordElement.value).toBe("");
  expect(userNameElement.value).toBe("");
})

test('login componnet with Login action', () => {
  render(<Login />);
  const userNameElement = screen.getByTestId('username').querySelector('input') as HTMLInputElement;
  const passwordElement= screen.getByTestId('password').querySelector('input') as HTMLInputElement;
  const loginButton = screen.getByTestId('login');
  fireEvent.change(userNameElement , {target: { value: 'niranjan'}});
  fireEvent.change(passwordElement, {target: {value: 'niranjan'}});
  fireEvent.click(loginButton);
  expect(passwordElement.value).toBe("niranjan");
  expect(userNameElement.value).toBe("niranjan");
});
