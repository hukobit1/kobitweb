import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../Assets/Images/Logo/Logo_2.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="navbar-brand " href="#">
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="100"
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdIeIVOo_xQIdMHhG9KOEXeqSGwo2JxkFIelsP8jeMO6MtftA/viewform"
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
