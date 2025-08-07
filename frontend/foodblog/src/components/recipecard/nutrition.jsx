import React from 'react'

function nutrition() {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
            <div className="ingedrient">
                <h3>Ingedrient</h3>
                <ul>
                    <li><p>Eggs</p></li>
                    <li><p>maida</p></li>
                    <li><p>maida</p></li>
                    <li><p>maida</p></li>
                    <li><p>maida</p></li>
                    <li><p>maida</p></li>
                </ul>
                
                
            </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
            <div className="nutrition-facts">
                <h3>Nutrition Facts</h3>
                <ul>
                    <li><p>Calories</p></li>
                    <li><p>Protein</p></li>
                    <li><p>Carbohydrates</p></li>
                    <li><p>Fat</p></li>
                    <li><p>Cholesterol</p></li>
                </ul>

            </div>
        </div>
      </div>
    </>
  )
}

export default nutrition
