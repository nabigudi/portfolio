
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const InfoCard = () => {
  return (
    <div className="info-card">
        <div className="info-map">
          <span>Nabila Gudiño Ochoa</span>
          <span>Argentina, Córdoba  </span>
          <a href="tel:+5493513909401">+5493513909401</a>
          <a href="mailto:nabi.gudi@gmail.com">nabi.gudi@gmail.com</a>

          <div className="icon-info">
            <a className="icons" href="https://www.linkedin.com/in/nabila-gudino-ochoa/"><FontAwesomeIcon className="more-btn" icon={faLinkedin} size="2x"/></a>
            <a className="icons" href="https://github.com/nabigudi"><FontAwesomeIcon className="more-btn" icon={faGithub} size="2x"/></a>
          </div>
         
      </div>
    </div>
   
  )
}

export default InfoCard;