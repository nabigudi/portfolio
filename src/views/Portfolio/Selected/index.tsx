import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../../../components/AnimatedLetters'
import './index.scss'
import { Portfolio } from '../../../types/Portfolio';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import useScreenSize from '../../../helpers/useScreenSize';
import AnimatedButton from '../../../components/AnimatedButton';
import AnimatedImages from '../../../components/AnimatedImages';

interface LocationState {
    item: Portfolio;
}

const Selected = () => {
  let location = useLocation();
  const screenSize = useScreenSize();
  const { item } = location.state as LocationState;
  const [showShowcase, setShowShowcase] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <>
      <div className="container portfolio-selected-page">
        { item.images && item.images.length && 
          <div className={`${screenSize.width < 961 ? 'showcase-small' : 'showcase'} ${screenSize.width < 961 ? (showShowcase ? 'show-showcase' : 'hide-showcase') : ''}`}> 
            <div className={`${showShowcase ? 'close-visible' : 'close-hidden'}`} onClick={()=>setShowShowcase(!showShowcase)}>
              <FontAwesomeIcon icon={faClose} />
            </div>
              { item.images.length && item.images[0].src !== "" && (
                item.images.length > 2 ?
                  <div>
                    <AnimatedImages images={item.images} />
                  </div>
                : 
                  <figure className={`porfolio-figure-alone ${isHovered ? 'hovered' : ''}`} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                    <div>
                      <img src={require(`../../../assets/images/${item.images[0].src}`)} alt="portfolio"/>
                      <figcaption className='portfolio-figure-caption'>Fig.1 - {item.images[0].description}</figcaption>
                    </div>
                  </figure>
                )
              } 
          </div>
        }
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={item.title.split('')}
              idx={10}
            />
          </h1>
          <section className="text-section">
            {item.longDescription.split('//').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>

          {screenSize.width < 961 &&
            <AnimatedButton str='View showcase' action={()=>setShowShowcase(!showShowcase)} page="" isLink={false} />
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
