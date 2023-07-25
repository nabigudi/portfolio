import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './index.scss'

interface ListProps {
  icon: IconProp;
  url: string;
}

const List = ({ icon, url }: ListProps) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icon} color="#4d4d4e" />
      </a>
    </li>
  )
}

export default List
