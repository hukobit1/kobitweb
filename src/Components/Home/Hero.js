import React from 'react'

function Hero() {
  return (
    <section>
      <div
        className="text-secondary px-4 py-5 text-center mb-3"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/60/94/88/360_F_360948863_JY41w08RpODstckBb6RDz1x84K9NWyyf.jpg')",
          filter: 'blur(0px)'
        }}
      >
        <div className="py-5">
          <h1
            className="display-5 fw-bold text-white"
            style={{ filter: 'blur(0px' }}
          >
            Konumsal Bilgi Topluluğu’ na Hoşgeldin
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white">
              Kendinizi geliştirebileceğiniz, gelişirken eğlenebileceğiniz bir
              topluluk mu arıyorsunuz? Öyleyse doğru yerdesin.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
