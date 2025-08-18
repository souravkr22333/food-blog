import React from 'react'

function nutrition({data}) {
  let ingredients= data.ingredients
  let nutritions= data.nutritions
  
  return (
    <>
      <div className="row">
        <div className="col-md-8">
            <div className="ingedrient">
                <h3>Ingedrient</h3>
                <div className="ing fs-4">
                <ul>
                  {ingredients?.map((ing,index)=>(
                    <li key={index}><p>{ing.item}:{ing.quantity}</p> </li>
                  ))}
                    
                  
                </ul>
                </div>
                
                
            </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
            <div className="nutrition-facts">
                <h3>Nutrition Facts</h3>
                <ul>
                   {nutritions?.map((nut,index)=>(
                    <li key={index}><p>{nut.item}</p></li>
                  ))}
                    
                    
                </ul>

            </div>
        </div>
      </div>
    </>
  )
}

export default nutrition
