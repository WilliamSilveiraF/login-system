import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AppContext.Provider
      value={{
        name, setName,
        email, setEmail,
        password, setPassword,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
