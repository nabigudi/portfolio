import { Link } from 'react-router-dom'
import './index.scss'

interface AnimatedButtonProps {
  str: string;
  action: string; 
}
const AnimatedButton = ({ str, action }: AnimatedButtonProps) => {
  return (
    <div>
      <Link className="link" to={action}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {str}
      </Link>
    </div>
  )
}

export default AnimatedButton
