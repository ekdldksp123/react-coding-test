import React, { createContext, useContext, useReducer, useState } from 'react';

const initialPhonebook = []

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': {
          return state.concat({
            userFirstname: action.userFirstname,
            userLastname: action.userLastname,
            userPhone: action.userPhone
          });
        }
        case 'DELETE': {
          return state.filter((todo) => todo.id !== action.id);
        }
        default: throw new Error(`Unknown action type: ${action.type}`);
      }
} 

const PhonebookContext = createContext();
export const usePhoneBookState = () => {
    const context = useContext(PhonebookContext)
    if(!context) throw new Error(`Cannot find PhonebookContext`);
    return context
}

export function PhonebookProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialPhonebook)

    const addInfo = (info) => dispatch({ type: 'ADD', ...info })
    const deleteInfo = (info) => dispatch({ type: 'DELETE', ...info })

    return (
        <PhonebookContext.Provider value={{phonebook: state, addInfo, deleteInfo}}>
            {children}
        </PhonebookContext.Provider>
    );
}

