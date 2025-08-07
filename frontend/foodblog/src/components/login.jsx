import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Authcontext } from "./authentication";
import { Link } from "react-router-dom";

const login = () => {
  

  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("")
  const [error, seterror] =useState('')
  const{isLogein, setisLogedin}=useContext(Authcontext)
  const navigate= useNavigate()

   const handlesubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here

   
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
         phone_number: phoneNo,
              email: email,
              password: password
      })

      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
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
                  setPhoneNo(e.target.value);
                }}
                type="number"
                className="form-control mt-2 user-input"
                
                maxLength={13}
                minLength={10}
                placeholder="Enter your phone number"
              />

               <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                className="form-control mt-2 user-input"
                
                
                placeholder="Enter your email"
              />

              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control mt-3 user-input"
                minLength={8}
                maxLength={20}
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
