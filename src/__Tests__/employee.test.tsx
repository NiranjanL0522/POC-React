import { Employee } from "../components/Employee";
import { fireEvent, render, screen } from '@testing-library/react';
import { ContextProvider } from "../store/contextAPI";

test('Dashbaord component rendered with Employee Table', () => {
  render(<ContextProvider><Employee /></ContextProvider>);
  const tableComponent = screen.getByTestId("table");
  expect(tableComponent).toBeInTheDocument();
  const rowsCount = screen.getAllByTestId("rows");
  expect(rowsCount).toHaveLength(7);
});

test('Adding new Employee', () => {
  render(<ContextProvider><Employee /></ContextProvider>);
  const addEmployeeButton = screen.getByTestId("addEmployee");
  expect(addEmployeeButton).toBeInTheDocument();
  fireEvent.click(addEmployeeButton);
  
});
