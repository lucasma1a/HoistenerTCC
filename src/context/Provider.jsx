import React, { useState } from 'react';
import AppContext from './AppContext.jsx';

export const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [userLogado, setUserLogado] = useState({
        name: '',
        password: '',
    }) 


    const value = {
        userLogado,
        setUserLogado
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
