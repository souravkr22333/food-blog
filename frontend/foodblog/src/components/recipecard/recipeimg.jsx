import React from 'react'

function recipeimg() {
  return (
    <>
       <div className="recipe-container mb-3 justified-content-centre">
         <div className="row">
            <div className="col-md-6">
                <div className="recipe-img">
                    <img src="./src/assets/cake.jpg " className="w-100"   style={{ height:"300px", borderRadius:"20px"}} />
                </div>
                <div className="recipe-title mt-2">
                    <h2>Vanilla Cake</h2>
                </div>
                <div className="recipe-rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
               
                
            </div>
         </div>
      </div>
    </>
  )
}

export default recipeimg
