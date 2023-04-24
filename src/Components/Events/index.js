import React, { useState, useEffect } from 'react';
import Event from './Event';

function Events() {
  const [events, setEvents] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(`${apiUrl}/api/v1/events/?format=json`, { mode: 'cors' });
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-center display-1">
          ETKİNLİKLER
          <hr />
        </h1>
      </div>
      <div className="row gx-5 justify-content-center">
        {events.map((event) => (
          <Event
            key={event.identifier}
            name={event.name}
            date={event.date}
            about={event.about}
            url={event.image_url }
            identifier={event.identifier}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
