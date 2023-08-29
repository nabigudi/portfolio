import { Link } from 'react-router-dom'
import './index.scss'

interface AnimatedButtonProps {
  str: string;
  state?: {}; 
  page: string;
  isLink?: boolean;
}
const AnimatedButton = ({ str, state, page, isLink = true }: AnimatedButtonProps) => {
  return (
    <div>
      {isLink ? 
         <Link className="link" to={page} state={state}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {str}
        </Link>
        :
          <div className="link">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {str}
          </div>
        }
    
    </div>
  )
}

export default AnimatedButton
