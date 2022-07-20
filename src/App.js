import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Slider'
import Navbar from './components/Navbar'
import StateProvider from './components/providers/StateProvider'

const App = () => {
  return (
      // <Router >
          <StateProvider>
            <div className='flex'>
          <Navbar />
          <Home />
          {/* <Routes>
             <Route element={<Navbar />} path={'/'} />
             <Route element={<Home />} path={'/'} />
             <Route path={'*'} element={<Navigate to={'/'} replace />}  />
          </Routes> */}
          {/* <Login /> */}
          </div>
          </StateProvider>
      // </Router>
  )
}

export default App