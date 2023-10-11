import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/login';
import './App.css';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { PocContext } from "./store/contextAPI";
import {useContext} from 'react';
import { Dashboard } from "./components/Dashboard";
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
function App() {
  const ctx = useContext(PocContext);
  return (
    <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee Records
              </Typography>
              {!ctx.isloggedIn && <Button color="inherit" id="login" onClick={() => window.location.href = '/login'}>Login</Button>}
              {ctx.isloggedIn && <Button color="inherit" id="logout" onClick={ctx.logoutClicked}>logout</Button>}
            </Toolbar>
          </AppBar>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={ctx.isloggedIn ? <Dashboard />: <Login />} />
              <Route path="/" element={ctx.isloggedIn ? <Dashboard />: <Login />} />
            </Routes>
          </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
