

// RecipeForm.js
import React, { useState , useCallback } from "react";
import { useNavigate } from "react-router-dom";



import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

const addrecipe = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    preperationTime:"",
    cookingTime: "",
    ingredients: [{ item: "", quantity: "" }],
    nutritions:[{ item: "", quantity: ""}],
    instructions: [{ description: "" }],
    image:null
    
  });
  //  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [dragActive, setDragActive] = useState(false);
  const [error, seterror] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target;
    const ingredients = [...formData.ingredients];
    
    ingredients[index][name] = value;
   
    setFormData({
      ...formData,
      ingredients,
    });
  };

  const handlenutritionChange = (index, e) => {
    const { name, value } = e.target;
    const nutritions = [...formData.nutritions];
    
    nutritions[index][name] = value;
   
    setFormData({
      ...formData,
      nutritions,
    });
  };

  const handleInstructionChange = (index, e) => {
    const { name, value } = e.target;
    const instructions = [...formData.instructions];
    instructions[index][name] = value;
    setFormData({
      ...formData,
      instructions,
    });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { item: "", quantity: "" }],
    });
  };

  const addnutrition = () => {
    setFormData({
      ...formData,
      nutritions: [...formData.nutritions, { item: "", quantity: "" }],
    });
  };

  const addInstruction = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, { description: "" }],
    });
  };

  const removeIngredient = (index) => {
    const ingredients = [...formData.ingredients];
    ingredients.splice(index, 1);
    setFormData({
      ...formData,
      ingredients,
    });
  };

  const removenutrition = (index) => {
    const nutritions = [...formData.nutritions];
    nutritions.splice(index, 1);
    setFormData({
      ...formData,
      nutritions,
    });
  };

  const removeInstruction = (index) => {
    const instructions = [...formData.instructions];
    instructions.splice(index, 1);
    setFormData({
      ...formData,
      instructions,
    });
  };

  const accessToken= localStorage.getItem('accessToken')

  const handleSubmit = async (e) => {
    e.preventDefault();
       
    try {
    // Prepare instructions with step numbers
    const instructionsWithSteps = formData.instructions
      .filter(inst => inst.description.trim() !== '')
      .map((inst, index) => ({
        description: inst.description,
        step_number: index + 1  // 1-based indexing
      }));

    const payload = {
      title: formData.title,
      description: formData.description,
      prep_time:formData.preperationTime,
      cook_time:formData.cookingTime,
      ingredients: formData.ingredients.filter(ing => ing.item.trim() !== ''),
      instructions: instructionsWithSteps,
      nutritions:formData.nutritions.filter(nut => nut.item.trim() !== ''),
      recipe_image:formData.image
     
    };
   
    

      
      const response = await axios.post(
        'http://127.0.0.1:8000/api/recipe/',
        payload,
        {
          headers: {
            'Authorization': `Bearer ${accessToken.trim()}`,
            
            
          }
        }

      );
       console.log("recipe submitted successfully")
      
      navigate('/');
    } catch (err) {
      if (err.response?.status === 401) {
       
        navigate('/login');
      } else {
        seterror(err.response?.data?.detail || 'Failed to create recipe');
      }
    } 
  };

  


  

    // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        seterror(prev => ({
          ...prev,
          image: 'Only JPG and PNG files are allowed'
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        seterror(prev => ({
          ...prev,
          image: 'File size must be less than 5MB'
        }));
        return;
      }

      seterror(prev => ({ ...prev, image: '' }));
      setFormData(prev => ({ ...prev, image: file }));

      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <>
      <div className="container mt-4 mb-5">
        <h3
          className="text-center"
          style={{ fontFamily: "Dancing Script", fontSize: "3rem" }}
        >
          Share your Recipe
        </h3>
        <form
          onSubmit={handleSubmit}
          style={{ border: "1px solid #ccc", padding: "20px" ,borderRadius:"20px"}}
        >
          <div className="form-group">
            <div className="recipe-title">
              <label>Title:</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="recipe-description">
              <label>Description:</label>
              <textarea
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="recipe-time row mt-3 mb-3 form-group">
               <input className="col form-control ms-3 me-2" type="time" placeholder="preperation time" name="preperationTime" value={formData.preperationTime} onChange={handleChange} />
               <input className="col form-control me-3" type="time" placeholder="cooking time" name="cookingTime" value={formData.cookingTime} onChange={handleChange} />
            </div>
           {/* ingredirnts */}
            <div className="ingrident d-flex mt-3" style={{justifyContent:"space-between", alignItems:"center"}}>
              <h3>Ingredients</h3>
              
                 <button type="button" className=" p-2 m-2" style={{borderRadius:"10px",color:"red"}} onClick={addIngredient}>
              Add Ingredient
                </button>
               

            </div>
            
            <table style={{ borderSpacing: "10px", borderCollapse: "separate" ,width:"800px" }}>
              <tbody className="form-group">

            {formData.ingredients.map((ingredient, index) => (
              <tr key={index} className="row mb-1 ">
               <td className="col-3">
                
                 
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    placeholder="Quantity in g"
                    value={ingredient.quantity}
                    onChange={(e) => handleIngredientChange(index, e)}
                  />
                
                </td>
                 <td className="col-8">
                
                  <input
                    type="text"
                    name="item"
                    className="form-control"
                    placeholder="Ingredient"
                    value={ingredient.item}
                    onChange={(e) => handleIngredientChange(index, e)}
                    required
                  />
              
                </td>
                <td  className="col-1 "  >
                <button  className="form-control" style={{
                          border: "none",
                          height: "20px",
                         
                          alignItems: "center",
                          backgroundColor:"white"
                        }}  type="button" onClick={() => removeIngredient(index)}>
                  <i className="fa-solid fa-trash ms-md-5"></i>
                </button>
                 </td>
              </tr>
            ))}
            </tbody>
            </table>

            {/* nutritions */}

              <div className="ingrident d-flex mt-3" style={{justifyContent:"space-between", alignItems:"center"}}>
              <h3>Nutritions</h3>
              
                 <button type="button" className=" p-2 m-2" style={{borderRadius:"10px",color:"red"}} onClick={addnutrition}>
              Add Nutrition
                </button>
               

            </div>

            

             <table style={{ borderSpacing: "10px", borderCollapse: "separate" ,width:"800px" }}>
              <tbody className="form-group">

            {formData.nutritions.map((nutrition, index) => (
              <tr key={index} className="row mb-1 ">
               <td className="col-3">
                
                 
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    placeholder="Quantity in g"
                    value={nutrition.quantity}
                    onChange={(e) => handlenutritionChange(index, e)}
                  />
                
                </td>
                 <td className="col-8">
                
                  <input
                    type="text"
                    name="item"
                    className="form-control"
                    placeholder="Ingredient"
                    value={nutrition.item}
                    onChange={(e) => handlenutritionChange(index, e)}
                    required
                  />
              
                </td>
                <td  className="col-1 "  >
                <button  className="form-control" style={{
                          border: "none",
                          height: "20px",
                         
                          alignItems: "center",
                          backgroundColor:"white"
                        }}  type="button" onClick={() => removenutrition(index)}>
                  <i className="fa-solid fa-trash ms-md-5"></i>
                </button>
                 </td>
              </tr>
            ))}
            </tbody>
            </table>
           
           {/* instructions */}
            <div className="instruction d-flex" style={{justifyContent:"space-between", alignContent:"center"}}>
               <h3>Instructions</h3>
                <button type="button" className="p-1" onClick={addInstruction} style={{color:"red", borderRadius:"10px"}}>
                   Add Instruction
            </button>
            </div>

             <table style={{ borderSpacing: "10px", borderCollapse: "separate", width:"600px"}}>
              <tbody className="form-group">

            {formData.instructions.map((instruction, index) => (
              <tr key={index} className="row mb-1 ">
                <td className="col-1 pt-2 " name="step_number" style={{height:"40px",width:"40px",borderRadius:"50%", border:"1px solid #ccc", backgroundColor:"black", color:"white"}}>{index + 1}</td>
                <td className="col-9">
                <textarea
                  name="description"
                  
                  placeholder={`Step ${index + 1}`}
                  className="form-control"
                  value={instruction.description}
                  onChange={(e) => handleInstructionChange(index, e)}
                  required
                />
                </td>
                <td className="col-2">
                 <button  className="form-control" style={{
                          border: "none",
                          height: "20px",
                         
                          alignItems: "center",
                          backgroundColor:"white"
                        }}  type="button" onClick={() => removeInstruction(index)}>
                  <i className="fa-solid fa-trash ms-md-5"></i>
                </button>
                </td>
              </tr>
            ))}
            </tbody>

             </table>
           
          </div>

           <div className="recipeimage mt-3 mb-3">
            <h3>Recipe image</h3>
              <Form.Group className="mb-3">
                  <Form.Label>Recipe Photo</Form.Label>
                  <div className="border rounded p-3 text-center">
                    {preview ? (
                      <div>
                        <Image src={preview} thumbnail style={{ maxHeight: '200px' }} className="mb-2" />
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => document.getElementById('recipe-image-upload').click()}
                        >
                          Change Photo
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-muted">Drag and drop your dish photo here</p>
                        <p className="small text-muted mb-2">JPG, PNG (Max 5MB)</p>
                        <Button
                          variant="primary"
                          onClick={() => document.getElementById('recipe-image-upload').click()}
                        >
                          Browse Files
                        </Button>
                      </div>
                    )}
                    <Form.Control
                      type="file"
                      id="recipe-image-upload"
                      accept="image/jpeg,image/png"
                      onChange={handleImageUpload}
                      className="d-none"
                    />
                    {error.image && (
                      <div className="text-danger small mt-2">{error.image}</div>
                    )}
                  </div>
                </Form.Group>

        {/* {error && <Alert variant="danger" className="mt-3">{error}</Alert>} */}
          </div>


          <div className="submitform d-flex justify-content-center mt-3 me-5">
            <button type="submit" className="btn btn-danger p-2  mb-3">Submit Recipe</button>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default addrecipe;
