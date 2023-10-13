import React, { useState, useEffect, useMemo } from 'react';

interface Props {
  children: JSX.Element;
}
interface EmployeeInfo {
  name: string;
  id: number;
  salary: number;
  shortSal: number;
}
const initialValue: EmployeeInfo = {
  name: "",
  id: 0,
  salary: 0,
  shortSal: 0
}
export const PocContext = React.createContext({
  isloggedIn: false,
  loginClicked: (username: string, password: string) => { },
  logoutClicked: () => { },
  employeeDetails: [initialValue],
  setEmployeeDetails: (employees: EmployeeInfo[]) => {}
});

function createData(
  name: string,
  id: number,
  salary: number
): EmployeeInfo {
  const shortSal = salary/1000;
  return { name, id, salary, shortSal };
}

export const ContextProvider = ({ children }: Props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState([
    createData('ABC', 1, 10000),
    createData('Employee1', 2, 20000),
    createData('XYZ', 3, 30000),
    createData('LMN', 4, 25000),
    createData('PQR', 5, 28000),
    createData('Employee3', 6, 40000)
  ]);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false);
    }
  }, [])

  const loginClicked = (username: string, password: string) => {
    if (username === 'niranjan' && password === 'niranjan') {
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = "/dashboard";
    } else {
      alert("login failed!!");
    }
  }

  const logoutClicked = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    window.location.href = "/login";
  }

  const values = useMemo(() => ({
    isloggedIn: isLoggedIn,
    loginClicked: loginClicked,
    logoutClicked,
    employeeDetails,
    setEmployeeDetails
  }), [isLoggedIn, employeeDetails]);

  return <PocContext.Provider value={values}>
    {children}
  </PocContext.Provider>
}