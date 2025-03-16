import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import flightsitelogo from '../assets/images/flightsitelogo.jpeg'


export const BrandInfo = () => {
  return (
    <>
    {/* centering for brand text */}
            <div className="w-100  d-none d-sm-block h-25"></div>
            <div className="row">
    
              {/* innercolumn-1 */}
            <div className="col-3"></div>
    
               {/* innercolumn-2 */}
            <div className="col-7">
            <img src={flightsitelogo} width={100} height={100} className="ms-4 rounded-circle"/>
              <div className="d-flex" style={{width:"80px"}}>
              <h3 className="text-wrap w-20 ms-3" style={{textIndent:"20px"}}>Tours Travels</h3>
              <span className="fw-bolder text-primary" style={{fontSize:"3rem"}}>&</span>
              </div>
              <div className="text-center"style={{width:"150px"}}>
              <p className="text-wrap fs-5 mt-3">"Your Perfect Trip Planned to Perfection"</p>
              </div>
              </div>
    
              </div>
              </>
  )
}
