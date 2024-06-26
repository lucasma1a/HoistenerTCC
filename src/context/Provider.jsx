import React, { useState } from 'react';
import AppContext from './AppContext.jsx';

export const Provider = ({ children }) => {
    const [reserva, setReserva] = useState([])
    const [active, setActive] = useState(false)
    const [userLogado, setUserLogado] = useState({
        _id: '',
        name: '',
        password: '',
        email: ''
    }) 


    const value = {
        userLogado,
        setUserLogado,
        reserva,
        setReserva,
        active, 
        setActive
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
