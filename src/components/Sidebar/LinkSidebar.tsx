import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './index.scss'

interface LinkSidebarProps {
  icon: IconProp;
  navClass?: string;
  toLink: string;
}

const LinkSidebar = ({ icon, navClass, toLink }: LinkSidebarProps) => {
  const isActiveStyle = {
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <NavLink style={({ isActive }) => isActive ? isActiveStyle : {}} className={navClass} to={toLink}>
      <FontAwesomeIcon icon={icon} color="#4d4d4e" />
    </NavLink>
  )
}

export default LinkSidebar
