import { useLocation } from 'react-router-dom';
import AnimatedLetters from '../../../components/AnimatedLetters'
import './index.scss'
import { Portfolio } from '../../../types/Portfolio';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from 'react';
import useScreenSize from '../../../helpers/useScreenSize';
import AnimatedButton from '../../../components/AnimatedButton';

interface LocationState {
    item: Portfolio;
}

const Selected = () => {
  let location = useLocation();
  const screenSize = useScreenSize();
  const { item } = location.state as LocationState;
  const [showShowcase, setShowShowcase] = useState(false);

  let commonSettings = {
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
    pauseOnHover: true,
  }
  var settings = screenSize.width < 961 ? 
  {
    ...commonSettings,
    slidesToShow: 1,
    slidesToScroll: 1,
  } : {
    ...commonSettings,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
 
  return (
    <>
      <div className="container portfolio-selected-page">
        <div className={`${screenSize.width < 961 ? 'showcase-small' : 'showcase'} ${showShowcase ? 'show-showcase' : 'hide-showcase'}`}>
            { item.images.length && item.images[0].src !== "" && (
              item.images.length > 2 ?
              <Slider {...settings}>
                {item.images.map((image, index) => 
                  <figure className='porfolio-figure'>
                    <div>
                      <img src={require(`../../../assets/images/portfolio/${image.src}`)} alt="portfolio"/>
                      <figcaption className='portfolio-figure-caption'>Fig.{index+1} - {image.description}</figcaption>
                    </div>
                  </figure>
                  
                )}
              </Slider>
              : 
              <figure className='porfolio-figure-alone'>
                <div>
                  <img src={require(`../../../assets/images/portfolio/${item.images[0].src}`)} alt="portfolio"/>
                  <figcaption className='portfolio-figure-caption'>Fig.1 - {item.images[0].description}</figcaption>
                </div>
              </figure>
              )
            } 
          </div>
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={item.title.split('')}
                idx={10}
              />
            </h1>
            <section className="text-section">
              {item.longDescription.split('//').map(paragraph => <p>{paragraph}</p>)}
            </section>

            <AnimatedButton str='View showcase' action={()=>setShowShowcase(true)} page="" isLink={false} />

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
