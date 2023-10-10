import { useState, useEffect } from 'react';
import { Button, Card, TextField } from '@mui/material';
import '../App.css';

export const Login: React.FC = () => {
    const [disabled, setDisabled] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(username.length > 0 && password.length > 0) {
            setDisabled(false);
        }
    }, [username, password]);

    const cancelClicked = () => {
        setUsername('');
        setPassword('');
        setDisabled(true);
    };

    const loginClicked = () => {
        if (username === 'niranjan' && password === 'niranjan') {
            console.log("login success")
        } else {
            alert("login failed!!");
        }
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <Card className='login-card'>
                <TextField id="username" data-testid='username' label="Username/Email" variant="outlined" className='form-field' value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                <TextField id="password" data-testid='password' label="Password" variant="outlined" className='form-field' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <Button variant="contained" className='login-buttons' disabled={disabled} onClick={loginClicked}>Login</Button>
                <Button variant="outlined" className='login-buttons' onClick={cancelClicked}>Cancel</Button>
            </Card>
        </div>

    );
}