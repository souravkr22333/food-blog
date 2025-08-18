import React from 'react'

function instruction({data}) {
  let instructions= data.instructions
  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col-md-8">
            <h3>Instructions</h3>
            <div className="ins ms-3 fs-4">
             {instructions?.map((ins,index)=>(
                    <p key={index}>Step {ins.step_number}: {ins.description}</p>
 
                  ))}
            </div>
            
        </div>

        <div className="col-md-4">
            <h3>Reviews </h3>
            <div className="review border-bottom" >
                <div className="rating d-flex" style={{justifyContent:"space-between"}}>
                    <div className="username d-flex align-items-center justify-content-start">
                        <div className="user-img me-2" >
                             <img src="./src/assets/cake.jpg" style={{borderRadius:"50%", width:"50px", height:"50px"}}  />
                        </div>
                        <h5>User name</h5>
                    </div>
                    <div className="star-rating">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    
                
                </div>
             
             <p>Review: This is a great app!</p>
            </div>

             <div className="review border-bottom">
                <div className="rating d-flex" style={{justifyContent:"space-between"}}>
                    <div className="username d-flex align-items-center justify-content-start" >
                         <div className="user-img me-2" >
                             <img src="./src/assets/cake.jpg" style={{borderRadius:"50%", width:"50px", height:"50px"}}  />
                        </div>
                        <h5>User name</h5>
                    </div>
                    <div className="star-rating">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    
                
                </div>
              
            <p>Review: This is a great app jhbkjhbkma sd flkhdbf afbsh khfbjh khjfbljh khjfbj!</p>
            </div>
            


        </div>
      </div>
    </>
  )
}

export default instruction
