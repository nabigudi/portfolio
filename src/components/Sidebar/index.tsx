import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faLaptopFile, faHand, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import LinkSidebar from './LinkSidebar'
import List from './ListSidebar'
import './index.scss'
import { useState } from 'react';
import InfoCard from '../InfoCard';
interface SidebarProps {
  top?: boolean;
}
const Sidebar = ({top = false}: SidebarProps) => {
  const [openExtraInfo, setOpenExtraInfo] = useState(false);
  
  return (
    top ?  
      <>
        <div className="nav-bar-top">
          <Link className="logo" to="/">
            <img src={Logo} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="nabigudi" />
          </Link> 
          <div onClick={()=>setOpenExtraInfo(!openExtraInfo)}>
            {
              openExtraInfo ?
                <FontAwesomeIcon className="icon" icon={faClose} size="2x"/>
              :
                <FontAwesomeIcon className="icon hi-hand" icon={faHand} size="2x"/>
            }
          </div>
        </div>
        {openExtraInfo && 
          <div className="extra-info">
            <InfoCard/>
          </div>
        }
      </>
      :
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="nabigudi" />
        </Link>
        <nav>
          <LinkSidebar icon={faHome} navClass={'home-link'} toLink={'/'}/>
          <LinkSidebar icon={faUser} navClass={'about-link'} toLink={'/about'}/>
          <LinkSidebar icon={faSuitcase} navClass={'works-link'} toLink={'/works'}/>
          <LinkSidebar icon={faLaptopFile} navClass={'portfolio-link'} toLink={'/portfolio'}/>
          <LinkSidebar icon={faEnvelope} navClass={'contact-link'} toLink={'/contact'}/>
        </nav>
        <ul>
          <List icon={faLinkedin} url={'https://www.linkedin.com/in/nabila-gudino-ochoa/'}/>
          <List icon={faGithub} url={'https://github.com/nabigudi'}/>
        </ul>
      </div>
  )
}

export default Sidebar
