import { useState , useContext, createContext ,useEffect} from "react";
import axios from "axios";

const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const [isLogedin, setisLogedin] = useState(
     !!localStorage.getItem('accessToken')
     ) 
    const [currentUser, setCurrentUser] = useState(
      !!localStorage.getItem('username')
    );

    
     return (
        <AuthContext.Provider value={{isLogedin,setisLogedin,currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
     )

}

export default Authprovider;
export  {AuthContext}



