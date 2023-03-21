import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import img1 from '../../Assets/Images/CarouselImages/Carousel_img_1.jpeg'
import img2 from '../../Assets/Images/CarouselImages/Carousel_img_1.png'

function Carousel2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  }
  return (
    <Slider {...settings}>
      <div className="carouselItem">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          className="d-block w-100 carouselImage"
          alt="..."
        />
        <h3 className="d-block carouselCaption">Carousel Caption 1</h3>
      </div>
      <div className="carouselItem">
        <img src={img2} className="d-block w-100 carouselImage" alt="..." />
        <h3 className="d-block carouselCaption">Carousel Caption 2</h3>
      </div>
      <div className="carouselItem">
        <img src={img2} className="d-block w-100 carouselImage" alt="..." />
        <h3 className="d-block carouselCaption">Carousel Caption 2</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}
export default Carousel2
