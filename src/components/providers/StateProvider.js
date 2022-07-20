import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({children}) => {

  const [nav, setNav] = useState(false)

  return (
    <StateContext.Provider value={[nav, setNav]}>
      {children}
    </StateContext.Provider>
  )
  
}

const useContextState = () => {
  return useContext(StateContext)
}

const useContextHamburgerFunc = () => {
  const [nav, setNav] = useContextState()

  const hamburgerHandler = () => setNav(!nav)

  return hamburgerHandler
}

export {useContextState, useContextHamburgerFunc}
export default StateProvider