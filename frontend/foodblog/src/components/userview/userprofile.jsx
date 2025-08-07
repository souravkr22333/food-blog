import React from 'react'

function userprofile() {
  return (
    <>
      <div className="userprofile">
        <div className="row d-flex justify-content-space-between align-item-center">
            <div className="col">
                <div className="userdetail d-flex justify-content-space-center align-item-center" style={{flexDirection:"column"}}>
                <div className="userimg ">
                    <img src='./src/assets/cake.jpg' style={{borderRadius:"50%", width:"100px", height:"100px",paddingLeft:"auto"}} ></img>
                </div>
                <div className="Name">
                    <h2>John Doe</h2>
                </div>
                </div>
             
            </div>
            <div className="col ms-2 me-2">
              <div className="bio">
                <div className="username"><h4>@jphn_done234</h4></div>

              </div>
              <div className="userbio" style={{width:"300",padding: "10"}}    >
                <p >dkjb dsfnslkjfn kfn.jkdf skdjfn.kj dsfgb.skj dkjbfhk kdbfkudb  sdkjfbsjfsk</p>
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
