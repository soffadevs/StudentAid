import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/home'
import About from './pages/Aboutpage/About'
import Topic from './pages/Topicpage/Topic'
import Contact from './pages/Contactpage/Contact'

import './App.css'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Topic' element={<Topic />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App