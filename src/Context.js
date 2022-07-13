import React, { createContext, useContext, useReducer } from 'react';

const initialPhonebook = [];

function phonebookReducer(state, action) {
    switch (action.type) {
        case 'CREATE': 
            return state.concat(action.phonebook)
        default: throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const PhonebookContext = createContext();
const PhonebookDispatchContext = createContext();

export function PhonebookProvider({children}){
    const [state, dispatch] = useReducer(phonebookReducer, initialPhonebook);
    return (
        <PhonebookContext.Provider value={state}>
            <PhonebookDispatchContext.Provider value={dispatch}>
                {children}
            </PhonebookDispatchContext.Provider>
        </PhonebookContext.Provider>
    );
}

export function usePhoneBookState() {
    return useContext(PhonebookContext)
}

export function usePhoneBookDispatch() {
    return useContext(PhonebookDispatchContext)
}