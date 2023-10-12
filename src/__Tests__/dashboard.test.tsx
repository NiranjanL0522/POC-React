import { Dashboard } from "../components/Dashboard";
import { fireEvent, render, screen } from '@testing-library/react';

test('Dashbaord component rendered with Default Text', () => {
  render(<Dashboard />);
  const TitleElement = screen.getByText(/Dashboard/i);
  expect(TitleElement).toBeInTheDocument();
});

test('Dashbaord component rendered with Button', () => {
  render(<Dashboard />);
  const button = screen.getByTestId("add");
  expect(button).toBeInTheDocument();
});

test('Dashbaord component rendered with Cards', () => {
  render(<Dashboard />);
  const cards = screen.getAllByTestId("cards");
  expect(cards).toHaveLength(4);
});

test('Dashbaord component with Add button action', () => {
  render(<Dashboard />);
  const addButton = screen.getByTestId("add");
  fireEvent.click(addButton);
  const cards = screen.getAllByTestId("cards");
  expect(cards).toHaveLength(5);
});