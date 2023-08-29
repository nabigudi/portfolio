import { useLocation } from 'react-router-dom';
import AnimatedLetters from '../../../components/AnimatedLetters'
import './index.scss'
import { Portfolio } from '../../../types/Portfolio';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';

interface LocationState {
    item: Portfolio;
}

const Selected = () => {
  let location = useLocation();
  const { item } = location.state as LocationState;
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
    pauseOnHover: true,
    // fade: true,
  };
 
  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-zone">
          <h1>
            <AnimatedLetters
              strArray={item.title.split('')}
              idx={10}
            />
          </h1>
          
          {item.longDescription.split('//').map(paragraph => <p>{paragraph}</p>)}

          { item.images.length && item.images[0].src !== "" && (
            <Slider {...settings}>
              {item.images.map((image, index) => 
                <figure className='porfolio-figure'>
                  <div>
                    <img src={require(`../../../assets/images/portfolio/${image.src}`)} alt="portfolio"/>
                    <figcaption className='portfolio-figure-caption'>Fig.{index+1} - {image.description}</figcaption>
                  </div>
                </figure>
                
              )}
            </Slider>)
          } 

          <h2>
            <AnimatedLetters
              strArray={'Techs'.split('')}
              idx={10}
            />
          </h2>

          <p>{item.description}</p>
        </div>

      </div>
      </>
  )
}

export default Selected
