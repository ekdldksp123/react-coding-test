import React, { createContext, useCallback, useContext, useState } from 'react';

const PhonebookContext = createContext();

export const usePhoneBookState = () => {
    const context = useContext(PhonebookContext)
    if(!context) throw new Error(`Cannot find PhonebookContext`);
    return context
}

export function PhonebookProvider({children}){
    const [phonebook, setPhonebook] = useState([]);

    const addInfo = useCallback((info) => 
        setPhonebook([
            ...phonebook,{
                userFirstname: info.userFirstname,
                userLastname: info.userLastname,
                userPhone: info.userPhone
        }])
    , [phonebook]) // useCallback 두번째 인자로 빈 배열을 넣어주면 항상 바로 직전의 함수를 수행한다

    const deleteInfo = useCallback((userPhone) => 
        setPhonebook([
            ...phonebook.filter(info => info.userPhone !== userPhone)
        ])
    ,[phonebook])

    return (
        <PhonebookContext.Provider value={{phonebook, addInfo, deleteInfo}}>
            {children}
        </PhonebookContext.Provider>
    );
}

