



// src/pages/RecipePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Recipeimg from './recipecard/recipeimg'
import User from './recipecard/user'
import Nutrition from './recipecard/nutrition'
import Instruction from './recipecard/instruction'


function recipeview() {
    const { slug } = useParams(); // Extracts slug from URL
    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [nutritions , setnutritions]= useState([]);
    const [recipeimg, setRecipeimg] = useState([]);
    const [user, setuser]=useState("")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/recipe/${slug}/`);
                setRecipe(response.data);
                setIngredients(response.data.ingredients);
                setInstructions(response.data.instructions);
                setnutritions(response.data.nutritions)
                setRecipeimg(response.data.recipe_image);
                setuser(response.data.user.email)
                
            } catch (err) {
                setError("Recipe not found!");
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!recipe) return <p>No recipe found.</p>;

    return (
        <div>


        <div className="container mt-5 mb-4">

        <Recipeimg  data={{recipetitle:recipe.title,recipedescription:recipe.description, recipeimg:recipeimg}}/>
        <User  data={user} />
        <Nutrition  data={{ingredients:ingredients,nutritions:nutritions}} />
        <Instruction  data={{instructions:instructions}}/>
        
      </div>
          
        </div>
    );
}

export default recipeview;
