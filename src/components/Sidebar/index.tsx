import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import LinkSidebar from './LinkSidebar'
import List from './ListSidebar'
import './index.scss'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <LinkSidebar icon={faHome} toLink={'/'}/>
        <LinkSidebar icon={faUser} navClass={'about-link'} toLink={'/about'}/>
      </nav>
      <ul>
        <List icon={faLinkedin} url={'https://www.linkedin.com/in/nabila-gudino-ochoa/'}/>
        <List icon={faGithub} url={'https://github.com/nabigudi'}/>
      </ul>
    </div>
  )
}

export default Sidebar
