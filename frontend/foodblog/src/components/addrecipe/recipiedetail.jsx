import React from 'react'

function recipiedetail() {
  return (
    <>
      <label htmlFor="exampleInputEmail1">Recipe Name</label>
            <input
              type="text"
              className="form-control"
               name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              className="form-control mb-5"
              name='description'
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
    </>
  )
}

export default recipiedetail
