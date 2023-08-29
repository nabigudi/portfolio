import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './index.scss'
import { useState } from 'react';

interface techsIconProp {
  icon: IconProp;
  IconSVG: React.ComponentType<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>;
  label: string; 
  color: string;
  isFontAwesome: boolean;
}

interface AnimatedTechsProps {
  techs: techsIconProp[];
  direction?: string;
}

interface TechProps {
  tech: techsIconProp;
}

const AnimatedTechs = ({ techs, direction = '' }: AnimatedTechsProps) => {
  return (
    <>
       <div className={'marquee marquee--vertical '.concat(direction)}>
            <div className="marquee__group">
              {techs.map(tech => <Tech tech={tech} key={tech.label}/>)}
            </div>

            <div aria-hidden="true" className="marquee__group">
              {techs.map(tech => <Tech tech={tech} key={tech.label}/>)}
            </div>
          </div>
    </>
  )
}

const Tech = ({ tech}: TechProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      { tech.isFontAwesome ?
          <div className="icon" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            {         
              !isHovered ?
                <FontAwesomeIcon icon={tech.icon} color={tech.color} size="5x" />
              :
                <label>{tech.label}</label>
            }
          </div>
        :
          <div className="icon" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            {         
              !isHovered ?
                <>
                  <tech.IconSVG/>
                </>
              :
                <label>{tech.label}</label>
            }
        </div>
      }
    </>
  )
}

export default AnimatedTechs
