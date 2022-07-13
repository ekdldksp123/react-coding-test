import React, { createContext, useContext, useState } from 'react';

const PhonebookContext = createContext();

export function PhonebookProvider({children}){
    const [phonebook, setPhonebook] = useState([])

    const addInfo = info => setPhonebook([
        ...phonebook, {
            userFirstname: info.userFirstname,
            userLastname: info.userLastname,
            userPhone: info.userPhone
        }
    ])

    return (
        <PhonebookContext.Provider value={{phonebook, setPhonebook, addInfo}}>
            {children}
        </PhonebookContext.Provider>
    );
}

export function usePhoneBookState() {
    const context = useContext(PhonebookContext)
    if(!context) throw new Error('Cannot find PhonebookContext')
    return context
}
