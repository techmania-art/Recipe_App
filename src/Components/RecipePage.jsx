import React from 'react'

const RecipePage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Dish Name</label>
                        <input type="text" className="form-control" placeholder='Enter Dishname'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Creator</label>
                        <input type="text" className="form-control" placeholder='Enter the creator'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Image</label>
                        <input type="file" id='myFile' className='form-control'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Food Type</label>
                        <select name="" id="" className="form-select">
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Choose your Recipe</label>
                    <select name="" id="" className="form-select">
                        <option value="Spaghetti"id='Veg'>Cowboy Spaghetti</option>
                        <option value="Hamburger"id='Non-Veg'>Homemade Hamburger Helper</option>
                        <option value="Taco Soup"id='Veg'>Cheesy Taco Soup</option>
                        <option value="Skillet" id='Non Veg'>Tex-Mex Ground Beef and Potato Skillet</option>
                    </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Ingredients</label>
                        <input type="text" className="form-control" placeholder='Enter Ingredients'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecipePage
