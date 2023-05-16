import React from 'react'
import ReactDOM from 'react-dom/client'
import BoxClass from './App'
import EarClass from './earring.jsx'
import "./App.css"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BoxClass boxname="desk" /> */}
    <div className='allearmain'>
      <EarClass ringname="HotPinkDangles" />
      <EarClass ringname="WhiteDaisy" />
      <EarClass ringname="Baby" />
      <EarClass ringname="Book" />
    </div>
  </React.StrictMode>,
)
