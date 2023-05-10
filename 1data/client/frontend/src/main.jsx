import React from 'react'
import ReactDOM from 'react-dom/client'
import BoxClass from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxClass boxname="desk" />
  </React.StrictMode>,
)
