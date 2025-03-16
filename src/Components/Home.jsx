//bootstrap css&&js import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// // swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

//image import
import flyhigh from "../assets/images/flight.jpg";
import person1 from "../assets/images/person1.png";
import Dubai from "../assets/images/Dubai.jpg";
//hook import
import { useRef } from "react";

//icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faAward,
  faMoneyBillTransfer,
  faPlaneDeparture,
  faBan,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";

import PlaceDetails from "../Data/data";
// PlaceDetails.forEach(({cityName})=>{
//   console.log(cityName);
// })

//styles using bootstrap
let commonStylesForSubHeading = `text-center my-5 text-primary-emphasis text-uppercase fw-bolder`;
let commonStylesForCarouselItem = `container border  p-3  rounded-2 bg-warning`;
let bussinessBannerStyles = `row bg-success bg-opacity-25 border border-success d-flex align-items-center p-3 justify-content-around`;
let getStartedButtonStyles = `btn btn-primary text-primary-emphasis fs-4 mt-4 fw-bolder border border-none rounded-4`;
let tripRadioButtonStyles = `container border border-dark rounded-3 position-relative top-0 translate-middle-y bg-white`;


//facility carousel widths common
let commonWidth = "29%";

//carousel item icon font size and padding
let commonStyleForIcon = `fs-1 p-3`;

//popular Destinations Carousel

const PopularDestinationCarousel = () => {
  return (
    <>
    <Swiper
      modules={[Navigation]} 
      navigation
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      }}
    >
      {PlaceDetails.map((item) => (
        <SwiperSlide key={Math.random()}> 
          <PopularDestinations item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
               <div className="container-fluid">
               <div className="row ">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 text-center">
                <button className={getStartedButtonStyles} style={{ background: "#70ef2d"}} >
                  Check For Packages
                </button>
                </div>
                <div className="col-sm-4"></div>
                </div>
                </div>


    </>
  );
};

const PopularDestinations = ({ item }) => {
  // console.log(item)
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-12 position-relative"> 
          <img
            src={item.image}
            className="img-fluid rounded-3"
            alt={item.cityName}
          />
          <div className="badge bg-light text-dark position-absolute start-0 ms-3 m-1">
            Rounded Trip Economy
          </div>
          <div className="row text-white fw-bolder position-absolute bottom-0 w-100 ms-0 me-0">
            <div className="col fs-3 mt-4 shadow-md">{item.cityName}</div>
            <div className="col-2"></div>
            <div className="col fs-4 mb-0 me-0" style={{ textIndent: "40px" }}>
              From Rs:25000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


//Bussiness Banner
const BussinessBanner = () => {
  return (
    <>
      <div className="container">
        <h1 className={commonStylesForSubHeading}>Planning a Business Trip?</h1>

        {/* main */}
        <div
          className={bussinessBannerStyles}
          style={{ boxShadow: "7px 10px  rgba(0, 0, 0, 0.26)" }}
        >
          <div className="col-sm-4">
            <div className="row">
              <h2 className="text-center mb-4">
                Your OneStep Solution For booking business, travel
                quickly,simply and efficient
              </h2>
              <div className="row">
                <div className="col"></div>
                <button
                  className={getStartedButtonStyles}
                  style={{ background: "#70ef2d" }}
                >
                  Get Strarted
                </button>
                <div className="col"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <img
              className="img-fluid mt-4 rounded-4"
              src={person1}
              alt="bussinessperson"
            />
          </div>
        </div>
      </div>
    </>
  );
};

//facility Carousel
const FacilityCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-inner">
          {/* 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div
                className={commonStylesForCarouselItem}
                style={{ width: commonWidth }}
              >
                <FontAwesomeIcon
                  icon={faHeadset}
                  className={commonStyleForIcon}
                />
                <h3 className="text-primary-emphasis fw-bolder">
                  Customer Support
                </h3>
                <h5>24/7 Customer Support</h5>
              </div>

              <div
                className={commonStylesForCarouselItem}
                style={{ width: commonWidth }}
              >
                <FontAwesomeIcon
                  icon={faAward}
                  className={commonStyleForIcon}
                />
                <h3 className="text-primary-emphasis fw-bolder">
                  Air Point Rewards
                </h3>
                <h5>Loyalty Reward Program</h5>
              </div>

              <div
                className={commonStylesForCarouselItem}
                style={{ width: commonWidth }}
              >
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  className={commonStyleForIcon}
                />
                <h3 className="text-primary-emphasis fw-bolder">
                  Secured Payments
                </h3>
                <h5 className="text-wrap">Visa, MasterCard, Gpay etc</h5>
              </div>
            </div>
          </div>
          {/* 2 */}

          <div className="carousel-item active">
            <div className="row">
              <div
                className={commonStylesForCarouselItem}
                style={{ width: commonWidth }}
              >
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className={commonStyleForIcon}
                />
                <h3 className="text-primary-emphasis  fw-bolder">
                  Instant Booking
                </h3>
                <h5>Book Tickets With Simple Steps</h5>
              </div>

              <div
                className={commonStylesForCarouselItem}
                style={{ width: commonWidth }}
              >
                <FontAwesomeIcon icon={faBan} className={commonStyleForIcon} />
                <h3 className="text-primary-emphasis fs-4 fw-bolder">
                  Zero Cancellation
                </h3>
                <h5>100% Refund for Flight Cancellation</h5>
              </div>

              <div
                className={commonStylesForCarouselItem}
                style={{ width: commonWidth }}
              >
                <FontAwesomeIcon
                  icon={faFaceSmileWink}
                  className={commonStyleForIcon}
                />
                <h3 className="text-primary-emphasis fw-bolder">
                  Luxury Travel
                </h3>
                <h5>Bon voyage!</h5>
              </div>
            </div>
          </div>
        </div>

        {/* controls */}
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

//main
const Home = () => {
  let locationToggler = useRef(null);

  let changePlace = () => {
    //  console.log(locationToggler.current.name)
    let form = locationToggler.current;
    // console.log(form)
    form.addEventListener("click", (e) => {
      console.log(e.target.innerText);
    });
  };
  return (
    <>
      <img src={flyhigh} style={{ maxHeight: "600px", width: "100%" }} />

      <div className={tripRadioButtonStyles}>
        <div className="row  ms-2">
          <div className="col-1 me-5 me-sm-0">
            <div className="form-check fs-5 fw-bolder">
              <input className="form-check-input" type="radio" />
              <label htmlFor="" className="form-check-label">
                OneWay
              </label>
            </div>
          </div>
          <div className="col-1"></div>

          <div className="col-1 me-5 me-sm-0">
            <div className="form-check fs-5 fw-bolder">
              <input type="radio" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                TwoWay
              </label>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="form-check fs-5 fw-bolder">
              <input type="radio" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                MultiCity
              </label>
            </div>
          </div>
        </div>
        <div className="row my-3 mx-2">
          <div className="col-10">
            <div className="input-group">
              {/* <!-- First Dropdown --> */}
              <select
                ref={locationToggler}
                className="form-select "
                name="From"
              >
                <option>From</option>
                <option value="1" name="Chennai">
                  Chennai
                </option>
                <option value="2" name="Mumbai">
                  Mumbai
                </option>
                <option value="3" name="Delhi">
                  Delhi
                </option>
              </select>

              {/* <!-- Center Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                onClick={changePlace}
              >
                🔄
              </button>

              {/* <!-- Second Dropdown --> */}
              <select className="form-select">
                <option>To</option>
                <option value="1" name="Bangalore">
                  Bangalore
                </option>
                <option value="2" name="Hyderbad">
                  Hyderabad
                </option>
                <option value="3" name="Kolkata">
                  Kolkata
                </option>
              </select>
            </div>
          </div>
          <div className="col-2">
            <div className="form-control-input">
              <input
                type="date"
                className="form-control"
                placeholder="Depart"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-control-check me-2" />
            <label htmlFor="" className="form-control-label">
              Direct Flights Only
            </label>
          </div>
        </div>
      </div>

      <FacilityCarousel />
      <BussinessBanner />
      <PopularDestinationCarousel />
    </>
  );
};

export default Home;
