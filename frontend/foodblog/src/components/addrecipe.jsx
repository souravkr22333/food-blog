import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import RecipePhotoUpload from "./addrecipe/addrecipeimage";
import Addinstruction from "./addrecipe/instruction";
import Addingrident from "./addrecipe/ingrident";
import Recipiedetail from "./addrecipe/recipiedetail";

function addrecipe() {
 

  return (
    <>
      <div className="container mt-4">
        <h3 className="text-center" style={{fontFamily:"Dancing Script", fontSize:"3rem"}}>Share your Recipe</h3>
        <form className="border p-4 m-3" style={{borderRadius:"10px"}}>
          <div className="form-group">
            
           
            <Recipiedetail />
            <Addingrident />
            <Addinstruction />
            <RecipePhotoUpload />
         



            <button type="submit" className="btn btn-dark p-2 center ms-auto d-flex" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default addrecipe;

