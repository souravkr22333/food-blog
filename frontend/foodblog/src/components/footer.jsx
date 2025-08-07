import React from 'react'

const footer = () => {
  return (
    <>
      <footer className=" text-dark rounded" >
      <div className="row">
       <div className="footer-container " style={{ padding: '20px', width: '100%' }}>
        
         <div className="footer-content d-flex justify-content-between align-items-center">
           
            <div className="col text-center">
                <h3>Food Blog</h3>
                <p>Share your culinary journey with us!</p>
              </div>
            <div className="col text-center">
              <h4>Explore</h4>
              <a href="/#">Home</a><br />
              <a href="/#">Recipes</a><br />  
              <a href="/#">Blog</a><br />
              <a href="/#">Contact</a><br />
            </div>
             
            </div>
                         
             <div className=" text-center mt-3">

              <h4>Contact Us</h4>
              <p>Email:foodblog@gmail.com</p>
              <p>Phone: +123 456 7890</p>
            </div>

            <p className="text-center mt-3">© 2023 Food Blog. All rights reserved.</p>
            <div className="social-media text-center mt-3">
              <a href="/#" className="me-3"><i className="fa-brands fa-facebook"></i></a>
              <a href="/#" className="me-3"><i className="fa-brands fa-twitter"></i></a>
              <a href="/#" className="me-3"><i className="fa-brands fa-instagram"></i></a>
              <a href="/#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    
    </footer>
    </>
  )
}

export default footer
