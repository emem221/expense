import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    transactions: []
}

//context
export const GlobalContext = createContext(initialState);

//component for Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    //actions

    function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}

return(<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
    </GlobalContext.Provider>
    )
}


