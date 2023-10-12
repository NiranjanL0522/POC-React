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

test('Adding new Employee with possible scenarios', () => {
  render(<ContextProvider><Employee /></ContextProvider>);
  const addEmployeeButton = screen.getByTestId("addEmployee");
  expect(addEmployeeButton).toBeInTheDocument();
  fireEvent.click(addEmployeeButton);
  
  const nameElement = screen.getByTestId('employeeName').querySelector('input') as HTMLInputElement;
  expect(nameElement).toBeInTheDocument();
  fireEvent.change(nameElement, { target: { value: 'niranjan' } });
  expect(nameElement.value).toBe('niranjan');

  const salaryElement = screen.getByTestId('employeeSalary').querySelector('input') as HTMLInputElement;
  expect(salaryElement).toBeInTheDocument();
  fireEvent.change(salaryElement, { target: { value: 20000 } });
  expect(salaryElement.value).toBe("20000");

  const createButton = screen.getByTestId("buttonCreateDialog");
  expect(createButton).toBeInTheDocument();
  fireEvent.click(createButton);

  const rowsCount = screen.getAllByTestId("rows");
  expect(rowsCount).toHaveLength(8);

  fireEvent.change(nameElement, { target: { value: 'niranjan' } });
  expect(nameElement.value).toBe('niranjan');

  const cancelButton = screen.getByTestId("buttonCancelDialog");
  expect(cancelButton).toBeInTheDocument();
  fireEvent.click(cancelButton);

  expect(rowsCount).toHaveLength(8);

  fireEvent.change(nameElement, { target: { value: 'nir' } });
  expect(nameElement.value).toBe('nir');
  fireEvent.click(createButton);
  expect(rowsCount).toHaveLength(8);

});
