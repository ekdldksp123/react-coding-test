import React, { createContext, useContext, useState } from 'react';

const PhonebookContext = createContext();
export const usePhoneBookState = () => useContext(PhonebookContext)

export function PhonebookProvider({children}){
    const [phonebook, setPhonebook] = useState([])

    const addInfo = (info) => setPhonebook([
        ...phonebook, {
            userFirstname: info.userFirstname,
            userLastname: info.userLastname,
            userPhone: info.userPhone
        }
    ])

    return (
        <PhonebookContext.Provider value={{phonebook, addInfo}}>
            {children}
        </PhonebookContext.Provider>
    );
}

