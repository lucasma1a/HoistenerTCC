import React, { useState } from 'react';
import AppContext from './AppContext.jsx';

export const Provider = ({ children }) => {
    const [reserva, setReserva] = useState([])
    const [userLogado, setUserLogado] = useState({
        name: '',
        password: '',
        email: ''
    }) 


    const value = {
        userLogado,
        setUserLogado,
        reserva,
        setReserva
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
