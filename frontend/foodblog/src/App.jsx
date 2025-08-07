import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage';
import Login from './components/login';
 import Register from './components/register';
 import Navbar from './components/navbar';
 import Footer from './components/footer';
 import Recipeview from './components/recipecard';
 import Userview from './components/userview';
 import Addrecipe from './components/addrecipe';
 import Recipe from './components/recipe';
 import Authentication from './components/authentication';


function App() {
 

  return (
    <>
    <Authentication>
    <BrowserRouter>
    <Navbar />
    <Routes>
      
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/recipe/:id' element={<Recipeview />} />
      <Route path='/user' element={<Userview />} />
      <Route path='/addrecipe' element={<Addrecipe />} />
      <Route path='/recipe' element={<Recipe />} />
    </Routes>
    <Footer />
    
    </BrowserRouter> 
    </Authentication>     
      
    
    </>
  )
}

export default App
