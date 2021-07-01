import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/config'
import { Spin } from 'antd'

const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
   const [user, setUser] = useState({})
   const history = useHistory()
   const [isLoading, setIsLoading] = useState(true)
   useEffect(() => {
      const unSubScrised = auth.onAuthStateChanged((user) => {
         if (user) {
            const { displayName, email, uid, photoURL } = user
            setUser({ displayName, email, uid, photoURL })
            setIsLoading(false)
            history.push('/')
            return;
         }
         setUser({});
         setIsLoading(false);
         history.push('/login')
      })

      return () => {
         unSubScrised()
      }
   }, [history])
   return (
      <AuthContext.Provider value={{
         user
      }}>
         {isLoading ? <Spin/> : children}
      </AuthContext.Provider>
   )
}


export const useAuthContext= ()=>{
   return useContext(AuthContext)
}