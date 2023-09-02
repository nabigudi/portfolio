import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import LinkSidebar from './LinkSidebar'
import List from './ListSidebar'
import './index.scss'
interface SidebarProps {
  top?: boolean;
}
const Sidebar = ({top = false}: SidebarProps) => {
  return (
    top ?  
      <div className="nav-bar-top">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link> 
      </div>
      :
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <LinkSidebar icon={faHome} toLink={'/'}/>
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
