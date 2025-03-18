
// import './App.css'

import { Footer } from "./Components/Footer"
import  HeaderNav from "./Components/HeaderNav"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import {Selection} from './Test/Selection'
import { BussinessTrip } from "./Components/BussinessTrip"
// import Home from "./Components/Home"
function App() {

  return (
    <>
      <HeaderNav/>
      <Footer/>


{/* <BussinessTrip/> */}
      {/* <Selection/> */}
    </>
  )
}

export default App
