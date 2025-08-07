
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Authcontext } from './authentication';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



const navbar=() =>{
  const {isLogedin , setisLogedin}=useContext(Authcontext)
    const navigate= useNavigate()
    const handlelogout=() =>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setisLogedin(false)
      navigate("/")
    }


  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom me-0"fixed ='top'>
      <Container  className='nav-box p-0 m-0'>
         <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-2' />
        <Navbar.Brand className='me-auto' href="#home">Food<span className='blog-logo'>Blog</span></Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3 my-2 my-lg-0" >
            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recipe">Recipe</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
            <Form className=" ms-5" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-box"
              aria-label="Search" 
            />
            

          </Form>
          </Nav>
          
        </Navbar.Collapse>
      
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
      
      
      </Container>
    </Navbar>
  );
}

export default navbar;