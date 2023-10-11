import React, { useState, useEffect } from 'react';

interface props {
    children: JSX.Element;
}
export const PocContext = React.createContext({
    isloggedIn: false,
    loginClicked: (username:string, password: string) => {},
    logoutClicked: () => {}
});


export const ContextProvider = ({children}: props) => {
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
            window.location.href="/";
        } else {
            alert("login failed!!");
        }
    }
    
    const logoutClicked = () => {
        localStorage.removeItem('isLoggedIn');
        setLoggedIn(false);
        window.location.href="/login";
    }

    return <PocContext.Provider 
        value={{
            isloggedIn: isLoggedIn,
            loginClicked: loginClicked,
            logoutClicked
        }}>
        {children}
    </PocContext.Provider>
}