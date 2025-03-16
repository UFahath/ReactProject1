
// import './App.css'

import HeaderNav from "./Components/HeaderNav"
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom"
import Home from "./Components/Home"



function App() {

  return (
    <>
      <HeaderNav/>
      <Home/>
    </>
  )
}

export default App
