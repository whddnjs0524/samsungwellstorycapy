import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './com/Navbar';
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
    </Router>
  )
}

export default App