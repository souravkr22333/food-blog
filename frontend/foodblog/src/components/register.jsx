import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const register = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});
    const navigate= useNavigate()
    const [success, setSuccess] = useState(false);

    onsubmit =async (e) => {
      
        e.preventDefault();
        if (password !== confirmPassword) {
          alert("Passwords don't match");
          } else {
            try{
             await axios.post("http://127.0.0.1:8000/api/register", {
              username:username,
              email: email,
              password: password
              }).then((response) => {
                console.log(response.data);
                console.log("registration successfully")
                setError({})
                setSuccess(true)
                navigate("/")
                })
              } catch (error) {
                setError(error.response.data);
                console.log(error.response.data);
                }

              
              }
          
        }
  return (
    <>
      <div className="login-container ">
        <div className="login-page ">
          <h1 className="text-center" style={{ fontFamily: "Dancing Script",  fontWeight:"bold"}}>
            Register 
          </h1>
            <form>
              <div className="mb-3" >
                
                <input onChange={(e) => setusername(e.target.value)}
                  type="text"
                  className="form-control mt-2"
                  placeholder="Username"
                />
                <small className="text-danger">{error.username}</small>
                
                <input onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control mt-2"
                  placeholder="Enter your email"
                />
                <small>{error.email}</small>
                
                <input onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control mt-2"
                  placeholder="Enter your password"
                />
                <small>{error.password}</small>
                
                <input onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control mt-2"
                  placeholder="Confirm your password"
                />
               
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="" />
                  <label className="form-check-label" style={{fontSize:"12px"}} htmlFor="" > I agree to the <a href="">terms and conditions</a></label> 
                </div>
                
                
                 <button type="submit" className="register-btn m-auto mt-3 p-3 rounded ">
                Register
              </button>
              <p className="mt-2 mb-2">Have already an account? <Link to="/login">Login</Link></p>
              </div>
            </form>
            {success && <div className="alert alert-success">registration successfully</div>}
          </div>
        </div>
    
    </>
  );
};

export default register;
