import googlelogo from '../assets/images/googlelogo.png'


export const TopWiderButton = () => {
  return (
    <>
      <div className="btn btn-outline-dark d-flex justify-content-evenly mx-auto fw-bolder w-75 w-sm-50">
              <img src={googlelogo} width={30} height={30} className="ms-3"/>
              <span> Continue With Google</span>
            </div>
    </>
  )
}

 const BottomWiderButton = () => {
  return (
    <>
     <button className="btn btn-success mx-auto fw-bolder w-100 mt-3" type="submit">
              <span> Continue</span>
            </button>
    </>
  )
}

export default BottomWiderButton;

