import React, { createContext } from 'react'

const initialState = {
  message: 'Hello from'
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialState}>
      {children}
    </GlobalContext.Provider>
  )
}
