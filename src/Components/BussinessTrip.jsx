import React from "react";
import styled from "styled-components";
import { AdvertiseBanner, commonStylesForSubHeading} from "./Home";
import businessimage from "../assets/images/businessimage.jpg";
import bussinesspeople from "../assets/images/bussinesspeoplepng.png"
import piechart from '../assets/images/piechart.jpg'
import caryingTrolly from '../assets/images/bussinessCaryingTrolly.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const BussinessTrip = () => {
  let AdvertiseBannerNew = styled(AdvertiseBanner)`
    background-image: linear-gradient(
        rgba(137, 133, 133, 0.5),
        rgba(170, 165, 165, 0.5)
      ),
      url(${businessimage});
    background-size: 100% 600px;
    margin-top: 0;
  `;

  let steps = [
    { number: 1, descript: "Search for Hotels and Flights" },
    { number: 2, descript: "Book everything you need" },
    { number: 3, descript: "Pay conventiently" },
    { number: 4, descript: "Generate Reports automatically" },
  ];
  return (
    <div>
      <AdvertiseBannerNew />
      <div className="container-fluid">
        <h1 className={commonStylesForSubHeading}>BUSINESS TRIPS</h1>
        <p className="text-secondary fw-bold fs-1 mb-5 text-center t">
          Your one-stop solution for booking business travel quickly, simply and
          efficiently
        </p>
        <div className="row row-cols-2 row-cols-md-4 p-5 mb-5" style={{ backgroundColor: "rgb(240, 242, 166)" }}>
          {
            steps.map((item)=>(
              <div className="col" key={Math.random()}>
                <div className="row bg-primary w-25  p-2 mx-auto rounded-2 my-2 text-white fs-2 fw-bold text-center d-flex justify-content-center">
        
                  {item.number}
                  </div>
                <div className="row fs-3 text-center fw-bold p-3 mx-auto rounded-top d-flex justify-content-center">
                  {item.descript}</div>
              </div> 
            ))
          }
        </div>
      </div>
      <BusinessBanner/>
      <PieChart/>
      <FinalBanner/>
    </div>
  );
}

 const BusinessBanner = () => {
  return (
    <>
    <div className="container rounded-3 p-5 my-5" style={{background:"linear-gradient(to bottom left,#00B5E2,white)"}}>
    <div className="row  row-cols-1 row-cols-md-2">
      <div className="col p-5">
        <p className="fs-1 text-center mb-5">Set Up Travel Policies and Approval Schemes-keep everything under control</p>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 text-center">
        <button className="btn fs-5 fw-bold text-white" style={{ background: "#70ef2d" }}>Book Now</button>
        </div>
        <div className="col-4"></div>
        </div>
      </div>
      <div className="col h-25 d-flex justify-content-center">
        <img src={bussinesspeople} alt="people"  style={{height:"500px",width:"100%"}}/>
      </div>
    </div>
    </div>
    </>
  )
}
const PieChart=()=>{
  return (
    <>
    <div className="container mx-auto">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img src={piechart} alt=""  style={{minWidth:"350px"}}/>
        </div>
        <div className="col text-center p-5 ">
          <p className="text-uppercase fs-1 fw-bold text-primary-emphasis">Save Upto</p>
          <p className="fw-bolder display-1 text-danger">35%</p>
          <p className="text-uppercase fs-1 fw-bold text-primary">Of your budget</p>
        </div>
      </div>
    </div>
    </>
  )
}

const FinalBanner=()=>{
  return(
    <>
     <div className="container-fluid p-5" style={{ backgroundColor: "rgb(240, 242, 166)" }}>
       <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <img src={caryingTrolly} className="rounded-5" alt="" style={{width:"100%"}}/>
        </div>
        <div className="col p-5">
          <p className="fs-1 p-5 text-center" style={{backgroundColor:"rgb(185, 246, 144)",boxShadow:"5px 5px 3px rgba(0, 0, 0, 0.41)"}}>
            Cashless Payment <strong>Tariff Plans</strong> based on the Specifics of Business
          </p>
        </div>
       </div>
     </div>
    </>
  )
}

