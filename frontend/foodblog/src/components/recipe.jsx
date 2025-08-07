import React from 'react'



function recipe() {
  return (
    <>
      <div className="container mt-5 mb-3">
        {recipes.map((recipe, idx) => (
          <div className="recipe-card row" key={idx}>
            <div className="recipe-image col-md-4 col-lg-3 col-xl-2">
              <img src="./src/assets/cake.jpg" style={{height:"200px", width:"200px", borderRadius:"10px" }} alt="recipe img" />
            </div>
            <div className="recipe-info col-md-6">
              <div className="recipe-title">{recipe.title || "cake"}</div>
              <div className='recipe-description'>{recipe.description || "wwfafj adjfkhkdv kidfusukhb kyugfdkluh kdfgdshlkur ldirughsli lfiughdpiu ldruighl liughdlj lirughsp; lgub;"}</div>
            </div>
          </div>
        ))}

       
      </div>
    </>
  )
}

export default recipe
