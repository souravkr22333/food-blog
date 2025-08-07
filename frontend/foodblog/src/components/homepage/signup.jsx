import React from 'react'
import img from '/src/assets/144a78cd-d054-44a1-aa84-98c7af4c7242.png'
function signup() {
  return (
    <>
      
        <div className="row  mt-3 rounded p-5 text-center mb-1" style={{backgroundColor:"rgba(119, 151, 149, 0.61)"}}>
          <h2 style={{fontFamily:"Dancing Script", fontSize:"3rem"}}>SignUp of Get latest Updates</h2>
          <div className="col">
            <img src={img} alt="Logo" style={{width:"200px"}}/>
          </div>
            <div className="col mt-2 text-center">
                
                <input className="me-2 rounded p-2" type='text' placeholder='Name' name='name'/>
                <input type='email' className='me-2 rounded p-2' placeholder='Email' name='email'/><br/>
                <button type='submit'  className='me-2 rounded p-2 btn btn-danger mt-2' > Go </button>
            </div>
        </div>
      
    </>
  )
}

export default signup
