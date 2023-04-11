import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logo from '../Assets/Images/Logo/Logo_70q.webp'

function Navbar() {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid pb-3 pt-3">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="70"
              className="rounded mx-auto d-inline-block mainLogo"
            />
            <h3 className="d-inline-block brandName">
              Konumsal Bilgi Topluluğu
            </h3>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end vertical-align: super;"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-center ">
            <div className="nav-link">
              <button type="button" className="btn bg-transparent">
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    textAlign: 'center'
                  }}
                >
                  Ana sayfa
                </Link>
              </button>
            </div>

            <div className="nav-link ">
              <button type="button" className="btn bg-transparent">
                <Link
                  to="Members"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Üyeler
                </Link>
              </button>
            </div>

            <div
              className="nav-link"
              style={{ verticalAlign: 'center', color: 'blue' }}
            >
              <button type="button" className="btn bg-transparent">
                <Link
                  to="Events"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Etkinlikler
                </Link>
              </button>
            </div>

            <div
              className="nav-link"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <a
                className="btn btn-outline-primary"
                href={ meta.url }
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                Üye Ol
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
