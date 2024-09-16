import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const authContext = createContext();

const AuthProvider = ({children})=>{
      const [isAuthenticated , setIsAuthenticated] = useState(false);

      const checkLogin = (email , password)=>{
   
        const storedUser = JSON.parse(localStorage.getItem("formData"));
        if(storedUser && storedUser.email === email && storedUser.password === password){
            setIsAuthenticated(true)
            return true;
        }else{
            setIsAuthenticated(false)
            return false;
        }
      };

      const logout = ()=>{
        setIsAuthenticated(false)
        localStorage.removeItem("formData")
         toast.success("Logout Succesfully")
      }

      useEffect(()=>{
         const storedUser = JSON.parse(localStorage.getItem('formData'))
         if(storedUser){
            setIsAuthenticated(true)
         }

      }, [])

    return(
        <authContext.Provider value={{isAuthenticated , checkLogin , logout}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;