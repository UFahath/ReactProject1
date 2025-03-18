//bootstrap css&&js import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//router
import { useNavigate } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

//image import
import flyhigh from "../assets/images/flight.jpg";
import person1 from "../assets/images/person1.png";
import Airline from "../assets/images/airlinebanner.jpg";

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
import { service, stories } from "../Data/data";
import styled from "styled-components";
// PlaceDetails.forEach(({cityName})=>{
//   console.log(cityName);
// })

import china from "../assets/images/Greatwall.jpg";

//styles using bootstrap
export let commonStylesForSubHeading = `text-center my-5 text-primary-emphasis text-uppercase fw-bolder`;
let commonStylesForCarouselItem = `container border  p-3  rounded-2 bg-warning`;
let bussinessBannerStyles = `row bg-success bg-opacity-25 border border-success d-flex align-items-center p-3 justify-content-around`;
let getStartedButtonStyles = `btn btn-primary text-primary-emphasis fs-4 mt-4 fw-bolder border border-none rounded-4`;
let tripRadioButtonStyles = `container border border-dark rounded-3 position-relative top-0 translate-middle-y bg-white`;

//facility carousel widths common
let commonWidth = "29%";

//carousel item icon font size and padding
let commonStyleForIcon = `fs-1 p-3`;

export let AdvertiseBanner = styled.div`
  background-image: linear-gradient(
      rgba(137, 133, 133, 0.5),
      rgba(170, 165, 165, 0.5)
    ),
    url(${china});
  background-size: 100% 440px;
  max-width: 100%;
  min-height: 450px;
  background-repeat: no-repeat;
  margin: 60px 0;
  position: relative;
`;
let AirlineBanner = styled(AdvertiseBanner)`
  background-image: url(${Airline});
  background-size: 100% 560px;
  margin: 20px 0;
  margin-bottom: 0;
`;
//last banner
const FinalBanner = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-3"></div>
          <div className="col col-lg-6">
            <h1 className={commonStylesForSubHeading}>
              BOOK CHEAP FLIGHTS ON YOUR FAVOURITE AIRLINES
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <AirlineBanner />
        </div>
      </div>
    </>
  );
};
//stories
const Stories = () => {
  let specialStyle = commonStylesForSubHeading + " p-3";
  // console.log(specialStyle)
  return (
    <>
      <div
        className="container-fluid mt-4"
        style={{ backgroundColor: "rgb(240, 242, 166)" }}
      >
        <h1 className={specialStyle}>Stories</h1>
      </div>
      <div className="container">
        <p className="text-secondary fw-bold fs-1 mb-5 text-center">
          Your Next Adventure Starts Here!"- Discover new places,cultures,and
          experiences with us
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
        }}
      >
        {stories.map((item1) => (
          <SwiperSlide key={Math.random()}>
            <Service item1={item1} serviceFlag={0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

//Deals
const Deals = () => {
  return (
    <>
      <h1 className={commonStylesForSubHeading}>Top Deals</h1>

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
            <PopularDestinations item={item} first={2} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

//service carousel
const ServiceCarousel = () => {
  return (
    <>
      <div
        className="container-fluid mt-5 pt-2 pb-4"
        style={{ backgroundColor: "#F0F2A6" }}
      >
        <h1 className={commonStylesForSubHeading}>Our Services</h1>
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
          {service.map((item1) => (
            <SwiperSlide key={Math.random()}>
              <Service item1={item1} serviceFlag={1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

// service
const Service = ({ item1, serviceFlag }) => {
  console.log(item1);
  return (
    <>
      {serviceFlag === 1 ? (
        <div className="card shadow-lg">
          <img src={item1.image} alt="" className="card-img-top rounded-3" />
          <div className="card-body">
            <h1 className="fs-2 text-center">{item1.serviceName}</h1>
          </div>
        </div>
      ) : (
        <div
          className="card"
          style={{ boxShadow: "5px 2px 0px 1px rgba(0, 0, 0, 0.14)" }}
        >
          <img src={item1.image} alt="" className="card-img-top rounded-3" />
          <div className="card-body">
            <h1 className="fs-5 text-center">{item1.serviceName}</h1>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <span className="badge bg-primary">Read more</span>
            <span>Travel Blog</span>
          </div>
        </div>
      )}
    </>
  );
};
//popular Destinations Carousel

const PopularDestinationCarousel = () => {
  return (
    <>
      <h1 className={commonStylesForSubHeading}>Popular Destinations</h1>
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
            <PopularDestinations item={item} first={1} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 text-center">
            <button
              className={getStartedButtonStyles}
              style={{ background: "#70ef2d" }}
            >
              Check For Packages
            </button>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
};

const PopularDestinations = ({ item, first }) => {
  // console.log(item)
  if (first === 1) {
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
              <div
                className="col fs-4 mb-0 me-0"
                style={{ textIndent: "40px" }}
              >
                From Rs:25000
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
            <div
              className="row h-50 d-flex fw-bolder text-wrap  mt-0 ms-0 me-0"
              style={{ position: "absolute", top: "26%" }}
            >
              <div className="col-5 align-self-end">
                <p
                  className="fs-3"
                  style={{
                    color: "#00F2F2",
                    textShadow: "2px 2px 4px white,2px 2px 4px #FF84E8",
                  }}
                >
                  4 Days & 3 Nights
                </p>
              </div>
              <div className="col-5 align-self-start">
                <p
                  className="fs-3"
                  style={{
                    color: "red",
                    textShadow:
                      "3px 3px 5px white,2px 2px 4px rgb(0, 204, 255)",
                  }}
                >
                  Accomdation & Food
                </p>
              </div>
            </div>
            <div className="row text-white fw-bolder position-absolute bottom-0 w-100 ms-0 me-0">
              <div className="col fs-3 mt-5 shadow-md">{item.cityName}</div>
              <div className="col-2"></div>
              <div
                className="col fs-4 mb-0 me-0 "
                style={{ textIndent: "40px" }}
              >
                <span className="text-info">From </span>Rs:20000
                <del className="row text-danger">25000</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//Bussiness Banner
const BussinessBanner = () => {
  let navigate = useNavigate();
  function navigateToBusinessPage() {
    navigate("/bussinessTrip");
  }
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
                  onClick={navigateToBusinessPage}
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
      {/* <Service/> */}
      <ServiceCarousel />
      <AdvertiseBanner className="d-flex align-items-end">
        <div className="container  text-center">
          <div className="row">
            <div className="col">
              <p className="text-white fs-1">
                Discover Your Next Great Adventure
              </p>
              <p className="text-danger fs-1 fw-bolder">BECOME AN EXPLORER</p>
              <p className="text-white fs-1">to Get Started!</p>
            </div>
          </div>
        </div>
      </AdvertiseBanner>
      <Deals />
      <Stories />
      <FinalBanner />
    </>
  );
};

export default Home;
