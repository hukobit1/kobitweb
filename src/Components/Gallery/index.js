import React, { useState, useEffect } from 'react';
import '../../Assets/Styles/Gallery.css'

function Events(props) {
  const [images, setImages] = useState([]);
  const { meta } = props; 
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
    <div className="gallery-wrapper">
    	<div className="text-opacity-75 text-center">
      		<h1 className="text-center display-2 category-name">
        		{ meta.gallery_header }
        		<hr />
      		</h1>
    	</div> 
    	<div className="container gallery">  
        	{images.map((image) => (
        	  <div className="image">
        	  	<h5>{ image.title }</h5>
        	        <img
        	           src={ apiUrl + image.cover_url }
        	           alt="{ image.title }"
        	           className="cover"
        	        ></img>
        	        <img
        	           src={ apiUrl + image.image_url }
        	           alt="{ image.title }"
        	           className="full-image"
        	        ></img>
        	 </div>
        	))}
    	</div>
    </div>
  );
}

export default Events;
