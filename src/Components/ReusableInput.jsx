import React from 'react'

export const ReusableInput = () => {
  return (
   <>
    <div className="form-group  my-3"  name="email">
              <label  className="form-label"/> Email
              <input  className="form-control mt-3" placeholder="Email" type="email" required/>
              </div>
              

              <div className="form-group my-3" name="password">
              <label  className="form-label" /> Password
              <input  className="form-control mt-3" placeholder="Password" type="password"  required/>
              </div>
   </>
  )
}
