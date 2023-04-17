import React, { useState, useEffect } from 'react';
import '../../Assets/Styles/Gallery.css'

function Events() {
  const [images, setImages] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`${apiUrl}/api/v1/images/?format=json`, { mode: 'cors' });
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
    <div className="container gallery">   
        {images.map((image) => (
          <div className="image">
              <h5>{ image.title }</h5>
                <img
                   src={ apiUrl + image.image_url }
                   alt="{ image.title }"
                ></img>
         </div>
        ))}
    </div>
    </>
  );
}

export default Events;
