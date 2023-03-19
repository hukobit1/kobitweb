import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import EventsPage from './Pages/EventsPage'
import Events from './Components/Events'
import Members from './Components/Members'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ClarificationText from './Components/ClarificationText'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="members" element={<Members />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route
          path="kvkk-aydinlatma-metni"
          element={<ClarificationText />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
