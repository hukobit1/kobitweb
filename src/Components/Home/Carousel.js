import React, { useState, useEffect } from 'react';

function Carousel() {
  const [images, setImages] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    fetch(`${apiUrl}/api/v1/slider-images/?format=json`, { mode: "cors" } )
      .then(response => response.json())
      .then(data => {
	      setImages(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-touch="true"
    >
      <div className="carousel-indicators">
        {images && images.map((image, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images && images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={ apiUrl + image.image } className="d-block w-100 slider-image" alt={image.title} />
            <div className="carousel-caption d-none d-md-block">
             {/* <h5>{image.title}</h5>
              <p className="text-center">{image.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

