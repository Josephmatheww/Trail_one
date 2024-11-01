import React, { createContext,useState } from 'react'

export const userDataContext=createContext({})
export default function ContextShare({children}) {

    const [userData,setUserData]=useState([])
  return (
    <>
    <userDataContext.Provider value={{userData,setUserData}}>
        {children}
    </userDataContext.Provider>

    
    </>
   
  )
}
