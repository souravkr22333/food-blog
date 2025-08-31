import React from "react";
import { Link } from "react-router-dom";

function userrecipe({ data }) {
  return (
    <>
    <div className="usererecipe">
      <h3 className="text-center mb-3">Recipes</h3>
    
      {data.userrecipe && data.userrecipe.length > 0 ? (
        <div className="userrecipe mt-3 mb-3  ">
          {data.userrecipe.map((recipe, index) => (
            <Link to={`/recipe/${recipe.slug}`} key={index}>
              <div className="recipe-card row " key={index}>
                <div className="recipe-image img-fluid col-md-4 col-lg-3 col-xl-2">
                  <img
                    src={recipe.recipe_image}
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                    alt="recipe img"
                  />
                </div>
                <div className="recipe-info col-9 col-md-7">
                  <div className="recipe-title">{recipe.title}</div>
                  <div className="recipe-description">{recipe.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No recipes found</p>
      )}
      </div>
    </>
  );
}

export default userrecipe;
