import React from 'react'
import { BrandInfo } from './BrandInfo'

import { SocialIcon } from 'react-social-icons'


export const Footer = () => {
  return (
    <>
       <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col col-md-3 h-100 pt-3">
          <BrandInfo/>
          </div>
          <div className="col col-md-3">
            <div className="row mx-auto mt-4 mb-3 fs-3 fw-bolder">
              Contact Us
            </div>
    

            <div className="row mb-3">
              <div className="col-5 text-start text-wrap">
                Tours and Travels
                Tower Building
                TamilNadu,<br/>
                India
                </div>
            </div>
            <div className="row mb-3">
              <div className="col col-md-5">
                +91 9122345678,
                +91 9122345679
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                info@toursandtravels.com
              </div>
            </div>
          </div>
          <div className="col col-md-3">
            <div className="col-7">
              <div className="row mx-auto mt-4 mb-3 fs-3 fw-bolder">
              Useful Links
              </div>
              <div className="row mx-auto">Privacy Policy</div>
              <div className="row mx-auto">User Agreement</div>
              <div className="row mx-auto">Refund Policy</div>
              <div className="row mx-auto">Terms and Conditions</div>
            </div>
          </div>
          <div className="col col-md-3">
            <div className="row mx-auto mt-4 mb-3 fs-3 fw-bolder">Follow Us</div>
            <div className="row">
              <div className="col">
              <SocialIcon url="https://facebook.com" />
              </div>
              <div className="col">
              <SocialIcon url="https://instagram.com" />
              </div>
              <div className="col">
              <SocialIcon url="https://twitter.com" />
              </div>
              <div className="col">
              <SocialIcon url="https://youtube.com" />
              </div>
            </div>
          </div>
        </div>
       </div>
       </>
  )
}
