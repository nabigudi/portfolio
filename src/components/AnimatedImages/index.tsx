import './index.scss'
import { useEffect, useState } from 'react';
import { PortfolioImage } from '../../types/Portfolio';

interface AnimatedImagesProps {
  images: PortfolioImage[];
  direction?: string;
}

interface RenderImageProps {
  image: PortfolioImage; 
  index: number;
  stopMoveAction: (x: boolean)=>void;
}

const RenderImage = ({image, index, stopMoveAction} : RenderImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(()=>{
    stopMoveAction(isHovered);
  }, [isHovered, stopMoveAction]);

  return (
    <div className={`image ${isHovered ? 'hovered' : ''}`} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} key={index}>
      <figure className='porfolio-figure'>
        <div>
          <img src={require(`../../assets/images/portfolio/${image.src}`)} alt="portfolio"/>
          <figcaption className='portfolio-figure-caption'>Fig.{index+1} - {image.description}</figcaption>
        </div>
      </figure>
    </div>
  )
}

const AnimatedTechs = ({ images, direction = '' }: AnimatedImagesProps) => {
  const [stopMovement, setStopMovement] = useState(false);
  return (
    <>
       <div className={`${stopMovement ? 'stop' : ''} marqueeAI marqueeAI--vertical ${direction}`}>
            <div className="marqueeAI__group">
              {images.map((image, index) => <RenderImage image={image} index={index} stopMoveAction={setStopMovement}/>)}
            </div>

            <div aria-hidden="true" className="marqueeAI__group">
              {images.map((image, index) => <RenderImage image={image} index={index} stopMoveAction={setStopMovement}/>)}
            </div>
          </div>
    </>
  )
}

export default AnimatedTechs
