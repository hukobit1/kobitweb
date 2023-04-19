import React from 'react';

function Image(props) {
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  return (
      <div className="image-wrapper w-100">
        <h2>{ props.title }</h2>
        <img
          src={ apiUrl + props.url }
          alt="{ props.title }"
        ></img>
    </div>
  )
}

export default Image;
