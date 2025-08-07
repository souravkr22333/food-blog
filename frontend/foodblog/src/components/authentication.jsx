import React from 'react'
import { useState , useContext, createContext } from 'react'

const Authcontext=createContext();

function authentication({children}) {
    const [isLogedin, setisLogedin] = useState(
        !!localStorage.getItem("accessToken")
    )
  return (
    <>
      <Authcontext.Provider value={{isLogedin, setisLogedin}}>
        {children}
      </Authcontext.Provider>
    </>
  )
}

export default authentication;
export {Authcontext};
