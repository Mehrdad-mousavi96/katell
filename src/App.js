import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from "./components/Hero";

const App = () => {
  return (
      <Router>
          <Navbar />
          <Hero />
          {/*<Routes>*/}
          {/*    <Route element={<Navbar />} path={'/home'} />*/}
          {/*    <Route element={<Hero />} path={'/users'} />*/}
          {/*    <Route path={'*'} element={<Navigate to={'/'} replace />}  />*/}
          {/*</Routes>*/}
      </Router>
  )
}

export default App