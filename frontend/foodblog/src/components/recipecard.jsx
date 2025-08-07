import React from 'react'
import Recipeimg from './recipecard/recipeimg'
import User from './recipecard/user'
import Nutrition from './recipecard/nutrition'
import Instruction from './recipecard/instruction'

function recipeview() {
  return (
    <>
      <div className="container mt-5 mb-4">
        <Recipeimg />
        <User />
        <Nutrition />
        <Instruction />
        
      </div>
    </>
  )
}

export default recipeview
