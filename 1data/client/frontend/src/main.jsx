import React from 'react'
import ReactDOM from 'react-dom/client'
import BoxClass from './box'
import EarClass from './earring.jsx'
import NewCreation from './addnew'
//import AddToBox from './tobox.jsx'
import "./App.css"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <marquee> <h1>WELCOME TO EARRING VILLE</h1></marquee>					     
    <div className='locations'>
    <BoxClass boxname="desk" />
    <BoxClass boxname="kitchen" />
    <BoxClass boxname="closet" />
    <BoxClass boxname="somewhere" />
    </div>
    <p></p>

    <h2>ALL EARRINGS</h2>
    <div className='allearmain'>
      <EarClass ringname="HotPinkDangles" />
      <EarClass ringname="WhiteDaisy" />
      <EarClass ringname="Baby" />
      <EarClass ringname="Book" />
    </div>
    <NewCreation/>
  </React.StrictMode>,
)
