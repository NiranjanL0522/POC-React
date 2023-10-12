import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { PocContext } from '../store/contextAPI';
import { useContext, useState } from 'react';

interface Column {
  id: 'name' | 'id' | 'salary';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'id', label: 'Id', minWidth: 100 },
  {
    id: 'salary',
    label: 'Salary',
    minWidth: 170,
    align: 'right',
  }
];

export const Employee = () => {
  const [open, setOpen] = useState(false);
  const [employeeName, setEmployeename] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState(0);
  const { employeeDetails, setEmployeeDetails } = useContext(PocContext);

  const addEmployee = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEmployeename('');
    setEmployeeSalary(0);
  };

  const createEmployee = () => {
    setEmployeeDetails([...employeeDetails, {name: employeeName, id: employeeDetails.length+1, salary: employeeSalary, shortSal: employeeSalary/1000}]);
    setOpen(false);
    setEmployeename('');
    setEmployeeSalary(0);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table" data-testid="table">
          <TableHead>
            <TableRow data-testid={"rows"}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeDetails.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} data-testid={"rows"}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={addEmployee} data-testid='addEmployee'>ADD Employee</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={employeeName}
            onChange={(e) => setEmployeename(e.target.value)}
          />
          <TextField
            margin="dense"
            id="salary"
            label="Salary"
            type="number"
            fullWidth
            variant="standard"
            value={employeeSalary}
            onChange={(e) => setEmployeeSalary(parseInt(e.target.value))}
          />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createEmployee}>Create</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
