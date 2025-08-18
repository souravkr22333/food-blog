import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

function Addingrident() {

     const [ingrident, setIngredients] = useState([
    {
      quantity: "",
      unit: "",
      name: "",
    },
  ]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { quantity: "", unit: "", name: "" }]);
  };


  return (
    <>
       {/* <div className="recipietime row">
              <div className="col-md-6">
                <label htmlFor="preperationtime">Preperation Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="preperationtime"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="cookingtime"> Cooking Time</label>
                <input type="time" className="form-control" id="cookingtime" />
              </div>
            </div> */}



            <div className="ingrident mt-5 mb-5">
              <div
                className="addrecipebutton d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4>Ingrident</h4>
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
              <table
                style={{ borderSpacing: "10px", borderCollapse: "separate" }}
              >
                <tbody>
                  <tr>
                    <td className="col-md-1 me-2">
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "quantity", e.target.value)
                        }
                        placeholder="Quantity"
                      />
                    </td>

                    <td className="col-md-2 ml-2">
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "unit", e.target.value)
                        }
                        placeholder="unit"
                      />
                    </td>

                    <td className="col-md-8">
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "name", e.target.value)
                        }
                        placeholder="ingrident name"
                      />
                    </td>
                    <td
                      style={{
                        border: "none",
                        height: "20px",
                        alignItems: "center",
                      }}
                    >
                      <a href="/#">
                        <i className="fa-solid fa-trash ms-md-5"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="col-md-1 me-2">
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "quantity", e.target.value)
                        }
                        placeholder="Quantity"
                      />
                    </td>

                    <td className="col-md-2 ml-2">
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "unit", e.target.value)
                        }
                        placeholder="unit"
                      />
                    </td>

                    <td className="col-md-8">
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "name", e.target.value)
                        }
                        placeholder="ingrident name"
                      />
                    </td>
                    <td
                      style={{
                        border: "none",
                        height: "20px",
                        alignItems: "center",
                      }}
                    >
                      <a href="/#">
                        <i className="fa-solid fa-trash ms-md-5"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

    </>
  )
}

export default Addingrident
