import React from 'react';
import useFirebase from '../hooks/useFirebase';

export const TravelContext = React.createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <TravelContext.Provider value={allContext}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthProvider;