import React, { createContext, useContext, useReducer, useState } from 'react'


const store = createContext({ dispatcher: () => {}, state: '' })


export const useCloseandOpenMenu = () => {

      return useContext(store)
}

const contextProviders = ({ children }) => {

      const [menu, setMenu] = useState("close")
     
      return (
            <store.Provider value={{ state:menu , dispatcher:setMenu }}>{children}</store.Provider>
      )
}

export default contextProviders