import React, { createContext, useContext, useState } from 'react';

const PhonebookContext = createContext();

export const usePhoneBookState = () => {
    const context = useContext(PhonebookContext)
    if(!context) throw new Error(`Cannot find PhonebookContext`);
    return context
}

export function PhonebookProvider({children}){
    const [phonebook, setPhonebook] = useState([]);

    const addInfo = (info) => setPhonebook([
        ...phonebook,{
            userFirstname: info.userFirstname,
            userLastname: info.userLastname,
            userPhone: info.userPhone
        }])
    const deleteInfo = (userPhone) => setPhonebook([
        ...phonebook.filter(info => info.userPhone !== userPhone)
    ])

    return (
        <PhonebookContext.Provider value={{phonebook, addInfo, deleteInfo}}>
            {children}
        </PhonebookContext.Provider>
    );
}

