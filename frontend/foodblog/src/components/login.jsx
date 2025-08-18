import React, { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";

const login = () => {
  

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
 
  const [error, seterror] =useState('')
  const{isLogein, setisLogedin}=useContext(AuthContext)
  const navigate= useNavigate()

   const handlesubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
   console.log(username)
   console.log(password)
   
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
              username:username,  
              password: password
      })

      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      
      localStorage.setItem('username',username)
      console.log(response.data)
      console.log("login successfully")
      setisLogedin(true)
      navigate("/")
    }catch(error){
         console.error('invalid candidate')
         seterror('invalid user')
    }
    
  

   
  };
  return (
    <>
      <div className="login-container ">
        <div className="login-page ">
          <h1 className="text-center" style={{ fontFamily: "Dancing Script",  fontWeight:"bold"}}>
            Login Page
          </h1>
          <form onSubmit={handlesubmit}>
           
              <input
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                type="text"
                className="form-control mt-2 user-input"
                
                maxLength={13}
                minLength={10}
                placeholder="Enter your Username"
              />

            

              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control mt-3 user-input"
                
                id="password"
                placeholder="Enter your password"
              />

              <a href="#" className="text-center " style={{ color: "blue" }}>
                Forgot Password?
              </a>

              {error && <div className="text-danger text-center" style={{fontSize:"20px"}}>{error}</div>}

              <button type="submit" className="login-btn  m-auto mt-3 mb-3 p-3 rounded ">
                Login
              </button>
              <p>
                Don't have an account?<Link to="/register">Register now</Link>
              </p>

              
            
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
