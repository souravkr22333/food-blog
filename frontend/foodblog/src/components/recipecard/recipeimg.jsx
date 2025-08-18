import React from 'react'

function recipeimg({data}) {
  let recipetitle= data.recipetitle
  let recipe_image=data.recipeimg.url
 
  return (
    <>
       <div className="recipe-container mb-3 justified-content-centre">
         <div className="row">
            <div className="col-md-6">
                <div className="recipe-img">
                    <img src={data.recipeimg}   style={{ height:"300px",width:"500px", borderRadius:"20px"}} />
                </div>
                <div className="recipe-title mt-2">
                    <h2>{recipetitle}</h2>
                </div>
                <div className="recipe-description">
                  <p>{data.recipedescription}</p>
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
