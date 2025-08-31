import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function user({data}) {
  return (
    <>
      
      <div className="row mb-4 mt-3 border-top border-bottom p-2">
        <div className="col">
            <div className="user-info d-flex align-items-center justify-content-start">
               <Link to={`/user/${data.username}`} >
            <div className="user-img" >
                <img src={data.userimage} style={{borderRadius:"50%", width:"50px", height:"50px"}}  />
            </div>
            <div className="user-name ms-3">
                <h4>{data.name} </h4>
            
            </div>
            </Link>
            
        </div>
      </div>
      </div>
    </>
  )
}

export default user
