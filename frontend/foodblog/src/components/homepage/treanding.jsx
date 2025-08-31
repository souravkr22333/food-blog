import React from 'react'
import cake from "/src/assets/cake.jpg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const treanding = () => {
    const [trendingRecipes, setTrendingRecipes] = useState([]);

    useEffect(() => {
        const fetchTrendingRecipes = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/tranding/')
            setTrendingRecipes(response.data);
          } catch (error) { 
            console.error('Error fetching trending recipes:', error);
          }
            }
            fetchTrendingRecipes();
        }, []);
       


  return (
    <>
       <div className="row">
            <div className="col">
              <h2 className="text-center mt-5">Trending Recipes</h2>
              <div className="recipe d-flex  " >

                {trendingRecipes.map((recipe) => (
                  <div key={recipe.id}>
                <div className="tranding-card rounded" style={{ width: '16rem' ,border: '1px solid #ccc', padding: '5px' }}>
                    <div className="card-img" ><img src={recipe.recipe_image} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:'5px'  }} /></div>
                    <div className="card-body" >
                        <div className="card-title"><b>{recipe.title}</b></div>
                        <div className="card-desc" style={{ width:"15rem",wordWrap:"break-word", overflow:"hidden",textOverflow:"ellipsis"}}>
                           {recipe.description} 
                            </div>
                    </div> 
                </div>
                </div>
                ))}

               
                
              </div>
            </div>
          </div>
    </>
  )
}

export default treanding





//  <Card style={{ width: '18rem' }} className="m-2">
//                   <Card.Img variant="top" src={cake} />
//                   <Card.Body>
//                     <Card.Title>Chocolate Cake</Card.Title>
//                     <Card.Text>
//                       A rich and moist chocolate cake recipe that is perfect for any occasion.
//                     </Card.Text>
//                     <Button variant="primary">View Recipe</Button>
//                   </Card.Body>
//                 </Card>