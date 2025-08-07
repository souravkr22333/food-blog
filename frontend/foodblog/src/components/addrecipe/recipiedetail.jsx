import React from 'react'

function recipiedetail() {
  return (
    <>
      <label htmlFor="exampleInputEmail1">Recipe Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              className="form-control mb-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
    </>
  )
}

export default recipiedetail
