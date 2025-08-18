import React from 'react'
import { Link } from 'react-router-dom'

function userrecipe({data}) {
  return (
    <>
       {data.userrecipe && data.userrecipe.length > 0 ? (
      <div className="userrecipe mt-3 mb-3 d-flex " style={{ alignContent:"center",flexWrap:"wrap",gap:"16px"}}>
       
          {data.userrecipe.map((recipe, index) => (
             <Link to={`/recipe/${recipe.slug}`} >
        <div className="card me-2 ms-2" key={index} style={{height:"30rem", width:"25rem", borderRadius:"10px"}}>
          <div className="card-image" >
            <img src= {recipe.recipe_image} style={{height:"30rem", width:"25rem", borderRadius:"10px"}}/>
                        </div>
        </div>
        </Link>
        )  ) }
        
         </div>
          ): (
          <p className="text-gray-500">No recipes found</p>
      
             
        )}
      
    </>
  )
}

export default userrecipe



