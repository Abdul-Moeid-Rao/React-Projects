/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  return(
    <>
  {children}
  </>
  )
  
}

export default UserContextProvider