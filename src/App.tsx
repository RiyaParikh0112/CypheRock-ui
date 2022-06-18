import React from 'react'
import { Navbar, Sidebar, Dashboard, ReceiveMain } from './Components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Switch } from '@mui/material'

import './App.css'
//App is React Functional component
const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <div className='main_sidebar'>
          <Sidebar />
        </div>
        <div className='main_dashboard'>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
