import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// import {useEffect,useRef,useState} from "react"
import { BrandInfo } from "./BrandInfo"
import  BottomWiderButton,{ TopWiderButton}  from "./SignUiButton"
import { ReusableInput } from "./ReusableInput"

 const SignUp = () => {

// // ref object
// let formRef=useRef(null);
  

// let register=()=>{
//        //first index of ref object current
//        let registerForm=formRef.current;
//        console.log(registerForm)
//        //form control email
//        let name=registerForm.elements.email.value;

//        //form control password
//       //  let apassword=registerForm.elements.password.value;
//        console.log(name);
//       //  console.log(apassword)
// }
// useEffect(register,[])


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
            Sign Up
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

              <div className="form-group my-3">
              <label  className="form-label"/> Retype Password
              <input  className="form-control mt-3" placeholder="Password" type="password" required/>
              </div>

              <div className="form-check">
              <input type="checkbox" className="form-check-input"  required/>
              <label  className="form-check-label"> By Proceeding ,you agree ourPrivacy Policy ,UserAgreement and T&C's</label>
              </div>

               {/* bottomwiderbutton */}
               <BottomWiderButton/>
            

            <div className="input-text mt-3 text-center">Already have An Account?
              <a className="link-underline-light ms-2 fw-bolder" href="#">Sign In</a>
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
export default SignUp;
