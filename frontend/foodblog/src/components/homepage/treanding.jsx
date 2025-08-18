import React from 'react'
import cake from "/src/assets/cake.jpg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const treanding = () => {
  return (
    <>
       <div className="row">
            <div className="col">
              <h2 className="text-center mt-5">Trending Recipes</h2>
              <div className="recipe d-flex  " >


                <div className="tranding-card" style={{ width: '17rem' , height:"25rem",border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" >
                        <div className="card-title">Cake</div>
                        <div className="card-desc" style={{ height:"6rem",width:"15rem",wordWrap:"break-word", overflow:"hidden",textOverflow:"ellipsis"}}>
                            This is vaniwdgjvhdvcjh   ekjfnkw jfevbs efn fhb jhfbd jhdfc jadh cj jsfdh j jsdfhca jhdf  jhabcjs jhdsfvj jhdfvckd vwjbh cidubiwu luigseiut rllgbz,j lezfhj lzhbfz, ,kzrhcgbiwudcbdubc hvgh kvkjh jgikycdwi hjbjh lhbj kjhbjh kjhbjh kj,hblj kjhkbdyhs</div>
                    </div> 
                </div>

                <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cake</div>
                        <div className="card-desc">This is vanis</div>
                    </div>
                </div>
                 <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cake</div>
                        <div className="card-desc">This is vanis</div>
                    </div>
                </div>
                 <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cake</div>
                        <div className="card-desc">This is vanis</div>
                    </div>
                </div>
                 <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cake</div>
                        <div className="card-desc">This is vanis</div>
                    </div>
                </div>
                 <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cake</div>
                        <div className="card-desc">This is vanis</div>
                    </div>
                </div>
                 <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cake</div>
                        <div className="card-desc">This is vanis</div>
                    </div>
                </div>
                 <div className="tranding-card" style={{ width: '17rem' , border: '1px solid #ccc', padding: '10px' }}>
                    <div className="card-img" ><img src={cake} alt="cake" style={{ width: '15rem', height: '15rem', borderRadius:10  }} /></div>
                    <div className="card-body" style={{wordWrap:'break-word'}}>
                        <div className="card-title">Cakevjdutrdse5s7wsyrestrcjgvkuhouygo</div>
                        <div className="card-desc">This is vanggkgfiytdutrsurexuetrxyeryxhtvjhgvytfiytfiytdutrsyres5y4du645duerdurtdyrtdjytjytditiytis</div>
                    </div>
                </div>


                


               

                

                {/* Add more Card components as needed */}
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