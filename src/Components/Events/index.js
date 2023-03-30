import React, { useState, useEffect } from 'react';
import Event from './Event';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/v1/events/?format=json');
        const data = await response.json();
        setEvents(data);
	console.log(data);
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
            key={event.id}
            name={event.name}
            date={event.date}
            about={event.about}
            url={event.image }
            id={event.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
