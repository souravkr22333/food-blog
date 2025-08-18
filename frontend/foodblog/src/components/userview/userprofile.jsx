import React from 'react'

function userprofile({data}) {

  return (
    <>
      <div className="userprofile border-bottom">
        <div className="row d-flex justify-content-space-between align-item-center">
            <div className="col">
                <div className="userdetail d-flex justify-content-space-center align-item-center" style={{flexDirection:"column"}}>
                <div className="userimg ms-5">
                    <img src={data.userimage} style={{borderRadius:"50%", width:"100px", height:"100px",paddingLeft:"auto"}} ></img>
                </div>
                <div className="Name">
                    <h2>{data.Name}</h2>
                </div>
                </div>
             
            </div>
            <div className="col ms-2 me-2">
              <div className="bio">
                <div className="username"><h4>@{data.username}</h4></div>

              </div>
              <div className="userbio" style={{width:"300",padding: "10"}}    >
                <p >{data.userbio}</p>
              </div>
              <div className="edituser"><a href='/#'>Edit userid</a></div>
            </div>
             <div className="col">
              <div className="row">
              <div className="follwers col">
                <div className="follower"><h4>Follower</h4></div>
                <div className="follower-count">300</div>
              </div>

              <div className="following col">
                <div className="following"><h4>Following</h4></div>
                <div className="following-count">300</div>
              </div> 
             </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default userprofile
