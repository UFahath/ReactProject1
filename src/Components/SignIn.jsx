import { BrandInfo } from "./BrandInfo"
import { ReusableInput } from "./ReusableInput"
import BottomWiderButton,{TopWiderButton}from './SignUiButton'
export const SignIn = () => {
  return (
    <>
    {/* overrall container */}
    <div className="container shadow-lg bg-body-tertiary p-5 mt-5 rounded-3 border border-4">

      {/* row */}
      <div className="row">
        {/* column-1 */}
      <div className="col-sm-3">
        {/* InnerRow */}
       <BrandInfo/>
      </div>

        {/* column-2 */}
      <div className="col-sm-1">
      <div className="vr h-100 d-none d-lg-block"></div>
      </div>

    
     {/* column-3 */}
      <div className=" col col-sm-8">
        <div className="card w-100">
          <div className="card-header text-center fs-4 fw-bolder">
            Sign In
          </div>
          <div className="card-body">

            {/* topwiderbutton */}
            <TopWiderButton/>

          <div className="row mt-3 ms-3">
            {/* divider for button and form */}


              {/* first hr line */}
            <div className="col-5">
           <div className="mt-3 border border-dark border-bottom" style={{width:"90%"}}></div>
           </div>

               {/* or */}
           <div className="col-2 text-center">Or</div>

               {/* Second hr line */}
           <div className="col-5">
           <div className="mt-3 border border-dark border-bottom" style={{width:"90%"}}></div>
           </div>
           
           </div>

           {/* Form */}

           <form action="#" method="get" className="mx-4" name="SignUp">
            
             <ReusableInput/>

             

              <div className="form-check">
              <input type="checkbox" className="form-check-input"  required/>
              <label  className="form-check-label"> Remember Me</label>
              </div>

               {/* bottomwiderbutton */}
               <BottomWiderButton/>
            

            <div className="input-text mt-3 text-center">Don't have An Account?
              <a className="link-underline-light ms-2 fw-bolder" href="#">Sign Up</a>
            </div>
           </form>


          </div>
        </div>
      </div>


      </div>
    </div>
    </>
  )
}
