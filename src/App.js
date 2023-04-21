import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import EventsPage from './Pages/EventsPage'
import Events from './Components/Events'
import Members from './Components/Members'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ClarificationText from './Components/ClarificationText'
import Terms from './Components/Terms'
import Gallery from './Components/Gallery'

function App() {
  const [meta, setMeta] = useState({});
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/v1/meta/?format=json` , { mode: "cors" } );
      const data = await response.json();
      // Sort users by category
      setMeta(data);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar  meta={meta}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="members" element={<Members />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="gallery" element={<Gallery meta={meta} />}></Route>
        <Route
          path="kvkk-aydinlatma-metni"
          element={<ClarificationText />}
        ></Route>
        <Route path="terms" element={<Terms />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer meta={meta} />
    </BrowserRouter>
  )
}

export default App
