import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';





function recipe() {
  const [recipes ,setrecipes]= useState([])
   
  useEffect( ()=>{
    async function getRecipes(){
    try{
        const response= await axios.get('http://127.0.0.1:8000/api/recipes/')
        
       const recipesData = Array.isArray(response.data) 
          ? response.data 
          : response.data.recipes || [];
          console.log(recipesData)
          setrecipes(recipesData)
    }catch(error){
      console.log('error fatching data',error.response.data)
    }
  }getRecipes();
   
  },[])

  return (
    <>
      <div className="container mt-5 mb-3">
        {recipes.map((recipe,index) => (
           
          <div className="recipe-card row " key={index} >
           
            <div className="recipe-image col-md-4 col-lg-3 col-xl-2">
              <img src={recipe.recipe_image} style={{height:"200px", width:"200px", borderRadius:"10px" }} alt="recipe img" />
            </div>
            <div className="recipe-info col-md-6">
               <Link to={`/recipe/${recipe.slug}`} >
             
              <div className="recipe-title">{recipe.title}</div>
              <div className='recipe-description'>{recipe.description}</div>
               </Link>
            </div>
            
          </div>
          
        ))}
      </div>
    </>
  )
}

export default recipe
