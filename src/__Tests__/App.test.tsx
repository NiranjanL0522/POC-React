import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders Employee Records Title', () => {
  render(<App />);
  const textElement = screen.getByText(/Employee Records/i);
  expect(textElement).toBeInTheDocument();
});
