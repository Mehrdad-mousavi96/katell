import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import StateProvider from './components/providers/StateProvider'

const App = () => {
  return (
      // <Router >
          <StateProvider>
            <div className='flex'>
          <Navbar />
          <Home />
          {/*<Routes>*/}
          {/*    <Route element={<Navbar />} path={'/home'} />*/}
          {/*    <Route element={<Hero />} path={'/users'} />*/}
          {/*    <Route path={'*'} element={<Navigate to={'/'} replace />}  />*/}
          {/*</Routes>*/}
          </div>
          </StateProvider>
      // </Router>
  )
}

export default App