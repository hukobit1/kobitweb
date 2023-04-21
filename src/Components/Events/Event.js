import React from 'react';

function Event(props) {
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  const eventDate = new Date(props.date);
  const formattedDate = eventDate.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
      <div className="card w-100">
        <img
          src={ apiUrl + props.url }
          className="card-img-top event-image"
          alt="Etkinlik Resmi"
        ></img>
        <div className="card-body d-flex flex-column">
          <h2> {props.name} </h2>
          <p className="fs-6 fw-lighter fst-italic">Tarih: {formattedDate} </p>
          <a
            className="btn btn-primary mt-auto"
            data-bs-toggle="collapse"
            href={'#' + props.id}
            role="button"
            aria-expanded="false"
            aria-controls={props.id}
          >
            ETKİNLİK DETAY
          </a>
          <div id={props.id} className="collapse">
            <hr />
            {props.about}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event;
