import {useContext } from 'react';
import { Login } from '../components/login';
import { fireEvent, render, screen } from '@testing-library/react';
import { ContextProvider } from '../store/contextAPI';

jest.mock('react', () => {
  const actualMethods = jest.requireActual('react');
  return {
    __esModule: true,
    ...actualMethods,
    useContext: jest.fn(() => {})
  };
});

test('login componnet with Cancel action', () => {
  render(<ContextProvider><Login /></ContextProvider>);
  const userNameElement = screen.getByTestId('username').querySelector('input') as HTMLInputElement
  expect(userNameElement).toBeInTheDocument();
  const passwordElement = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
  expect(passwordElement).toBeInTheDocument();
  const loginButton = screen.getByTestId('login');
  expect(loginButton).toBeInTheDocument();
  const cancelButton = screen.getByTestId('cancel');
  expect(cancelButton).toBeInTheDocument();
  fireEvent.change(userNameElement, { target: { value: 'niranjan' } });
  expect(userNameElement.value).toBe('niranjan');
  fireEvent.change(passwordElement, { target: { value: 'niranjan' } });
  expect(passwordElement.value).toBe('niranjan');
  fireEvent.click(cancelButton);
  expect(passwordElement.value).toBe("");
  expect(userNameElement.value).toBe("");
});

test('login componnet with Login action', () => {
  render(<Login />);
  const userNameElement = screen.getByTestId('username').querySelector('input') as HTMLInputElement
  expect(userNameElement).toBeInTheDocument();
  const passwordElement= screen.getByTestId('password').querySelector('input') as HTMLInputElement;
  expect(passwordElement).toBeInTheDocument();
  const loginButton = screen.getByTestId('login');
  expect(loginButton).toBeInTheDocument();
  const cancelButton = screen.getByTestId('cancel');
  expect(cancelButton).toBeInTheDocument();
  fireEvent.change(userNameElement , {target: { value: 'niranjan'}});
  expect(userNameElement.value).toBe('niranjan');
  fireEvent.change(passwordElement, {target: {value: 'niranjan'}});
  expect(passwordElement.value).toBe('niranjan');
  fireEvent.click(loginButton);
  expect(passwordElement.value).toBe("niranjan");
  expect(userNameElement.value).toBe("niranjan");

});