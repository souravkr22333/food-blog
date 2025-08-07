import React from 'react'

function user() {
  return (
    <>
      
      <div className="row mb-4 mt-3 border-top border-bottom p-2">
        <div className="col">
            <div className="user-info d-flex align-items-center justify-content-start">
            <div className="user-img" >
                <img src="./src/assets/cake.jpg" style={{borderRadius:"50%", width:"50px", height:"50px"}}  />
            </div>
            <div className="user-name ms-3">
                <h4>John Doe</h4>
            
            </div>
            
        </div>
      </div>
      </div>
    </>
  )
}

export default user
