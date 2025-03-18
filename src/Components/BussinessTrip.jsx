import React from 'react'
import styled from 'styled-components'
import {AdvertiseBanner,commonStylesForSubHeading} from './Home'
import businessimage from '../assets/images/businessimage.jpg'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const BussinessTrip = () => {
  let AdvertiseBannerNew=styled(AdvertiseBanner)`
  background-image:linear-gradient(rgba(137, 133, 133, 0.5), rgba(170, 165, 165, 0.5)),url(${businessimage});
  background-size:100% 600px;
  margin-top:0;
  `

  let steps=[{number:1,descript:"Search for Hotels and Flights"},
    {number:2,descript:"Book everything you need"},
    {number:3,descript:"Pay conventiently"},
    {number:4,descript:"Generate Reports automatically"},
  ]
  return (
    <div>
      <AdvertiseBannerNew/>
      <div className="container-fluid">
      <h1 className={commonStylesForSubHeading}>BUSINESS TRIPS</h1>
      <p className="text-secondary fw-bold fs-1 mb-5 text-center t">Your one-stop solution for booking business travel quickly, simply and efficiently
      </p><div className="row">
      <div className="row" style={{backgroundColor:"rgb(240, 242, 166)"}}>
        <div className="col-4 bg bg-primary-emphasis">{steps[0].number}</div>
        <div className="col-4">{steps[0].descript}</div>
      </div>
      </div>
      </div>
      </div>
  )
}
