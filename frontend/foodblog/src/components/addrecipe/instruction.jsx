
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

function addinstruction() {

     const handleAddIngredient = () => {
    setIngredients([...ingredients, { quantity: "", unit: "", name: "" }]);
  };
  return (
    <>
                  <div className="steps mb-5 mt-2">
              <div
                className="addingrident d-flex mb-3"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4>Instructions</h4>
                <Button
                  variant="outline-danger"
                  onClick={handleAddIngredient}
                  className="m-2 p-2"
                  style={{ color: "red", borderRadius: "25px" }}
                >
                  <Plus size={16} className="me-1 " />
                  Add Ingredient
                </Button>
              </div>

              <div className="card  d-flex " style={{ flexDirection: "row" }}>
                <span
                  className="card-header  p-md-auto ms-md-3 ms-2 mt-5"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  1
                </span>
                <div className="card-body ">
                  <textarea
                    className="card-text w-100 m-2 p-2"
                    placeholder=" step 1 "
                  />
                  <a href="#" className="btn btn-dark ms-2">
                    <i className="fa-solid fa-image" style={{color:"white"}}></i> Add Image
                  </a>
                </div>
                <a href="/#">
                  <i className="fa-solid fa-trash ms-md-3 mt-5 ms-2 me-1 mt-md-5 me-md-2"></i>
                </a>
              </div>

              <div
                className="card mt-2 d-flex "
                style={{ flexDirection: "row" }}
              >
                <span
                  className="card-header  p-md-auto ms-md-3 ms-2 mt-5"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  2
                </span>
                <div className="card-body ">
                  <textarea
                    className="card-text w-100 m-2 p-2"
                    placeholder="step 2"
                  />
                   <a href="#" className="btn btn-dark ms-2">
                    <i className="fa-solid fa-image" style={{color:"white"}}></i> Add Image
                  </a>
                </div>
                <a href="/#">
                  <i className="fa-solid fa-trash ms-md-3 mt-5 ms-2 me-1 mt-md-5 me-md-2"></i>
                </a>
              </div>
            </div>
    </>
  )
}

export default addinstruction
