import React from 'react'
import ReactDOM from 'react-dom/client'
import BoxClass from './App'
import EarClass from './earring.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxClass boxname="desk" />
    <EarClass ringname="Baby" />
  </React.StrictMode>,
)
