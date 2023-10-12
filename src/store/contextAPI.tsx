import React, { useState, useEffect, useMemo } from 'react';

interface Props {
    children: JSX.Element;
}
export const PocContext = React.createContext({
    isloggedIn: false,
    loginClicked: (username:string, password: string) => {},
    logoutClicked: () => {}
});


export const ContextProvider = ({children}: Props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === 'true'){
            setLoggedIn(true)
        } else{
            setLoggedIn(false);
        }
    }, [])

    const loginClicked = (username: string, password: string) => {
        if (username === 'niranjan' && password === 'niranjan') {
            setLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href="/dashboard";
        } else {
            alert("login failed!!");
        }
    }
    
    const logoutClicked = () => {
        localStorage.removeItem('isLoggedIn');
        setLoggedIn(false);
        window.location.href="/login";
    }

    const values = useMemo(() => ({
        isloggedIn: isLoggedIn,
        loginClicked: loginClicked,
        logoutClicked
    }), [isLoggedIn]);
    
    return <PocContext.Provider 
        value={values}>
        {children}
    </PocContext.Provider>
}