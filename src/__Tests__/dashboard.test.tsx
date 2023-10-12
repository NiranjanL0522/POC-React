import React from 'react';
import { Dashboard } from "../components/Dashboard";
import { fireEvent, render, screen } from '@testing-library/react';
import { ContextProvider } from "../store/contextAPI";
import '@testing-library/jest-dom';

test('Dashbaord component rendered with Default Text', () => {
  render(<ContextProvider><Dashboard /></ContextProvider>);
  const TitleElement = screen.getByText(/Dashboard/i);
  expect(TitleElement).toBeInTheDocument();
});

test('Dashbaord component rendered with Button', () => {
  render(<ContextProvider><Dashboard /></ContextProvider>);
  const button = screen.getByTestId("add");
  expect(button).toBeInTheDocument();
});

test('Dashbaord component rendered with Cards', () => {
  render(<ContextProvider><Dashboard /></ContextProvider>);
  const cards = screen.getAllByTestId("cards");
  expect(cards).toHaveLength(4);
});

test('Dashbaord component with Add button action', () => {
  render(<ContextProvider><Dashboard /></ContextProvider>);
  const addButton = screen.getByTestId("add");
  fireEvent.click(addButton);
  const cards = screen.getAllByTestId("cards");
  expect(cards).toHaveLength(5);
});