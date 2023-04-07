import React from 'react'

function Event(props) {
  const apiUrl = window.location.hostname;
  return (
    <div className="col-lg-4 mb-3 d-flex align-items-stretch">
      <div className="card">
        <img
          src={ apiUrl + props.url }
          className="card-img-top event-image"
          alt="Etkinlik Resmi"
        ></img>
        <div className="card-body d-flex flex-column">
          <h2> {props.name} </h2>
          <p className="fs-6 fw-lighter fst-italic"> {props.date} </p>
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

export default Event
