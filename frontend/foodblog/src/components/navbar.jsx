
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../AuthProvider';
import { createContext, use, useContext,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const navbar=() =>{
   const currentUser=localStorage.getItem('username')
  const [expanded, setExpanded] = useState(false);
  const {isLogedin , setisLogedin}=useContext(AuthContext)
    const navigate= useNavigate()

    if(!isLogedin){
      setisLogedin(false)
    }
    

    
    const handlelogout=() =>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('username')
      setisLogedin(false)
      navigate("/")
    }


  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom me-0 position-relative" onToggle={() => setExpanded(!expanded)} fixed ='top'>
      <Container  className='nav-box p-0 m-0'>
         <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-2' />
        <Navbar.Brand className='me-auto' href="#home">Food<span className='blog-logo'>Blog</span></Navbar.Brand>

         
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3 my-2 my-lg-0" >
            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recipe">Recipe</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {!expanded && ( 
            <Form className=" ms-5" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-box"
              aria-label="Search" 
            />
           

          </Form>
           )}
          </Nav>
          
        </Navbar.Collapse>
      {!expanded && (
      <div className="account d-flex justify-content-end ms-auto">
        <Nav.Link href="/addrecipe" className='recipie me-2'>Share Recipe </Nav.Link>
        {
           isLogedin? (
            <Nav.Link onClick={handlelogout} className='login me-2'>Logout</Nav.Link>
          ): (
              <Nav.Link href="/login" className='login me-2'>Login</Nav.Link>
          )
        }
        
       
      </div>
       )}  

      
      <div className="user">
        <Navbar.Collapse id="basic-navbar-nav">
           {expanded?  (
          <Nav    className="position-absolute top-0 end-0 mt-3 me-2" >
            <Link to={`/user/`} className="profile me-2"><i className="fa-solid fa-user"></i></Link>
          </Nav>
           ): <Nav     className="me-auto ms-3 my-2 my-lg-0" >
            <Link to={`/user/${currentUser}`} className="profile me-2"><i className="fa-solid fa-user"></i></Link>
          </Nav>
          }
        </Navbar.Collapse>

        
      </div>
      
      
      </Container>
    </Navbar>
  );
}

export default navbar;

