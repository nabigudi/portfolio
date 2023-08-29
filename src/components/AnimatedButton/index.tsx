import { Link } from 'react-router-dom'
import './index.scss'

interface AnimatedButtonProps {
  str: string;
  state?: {}; 
  page: string
}
const AnimatedButton = ({ str, state, page }: AnimatedButtonProps) => {
  console.log(str, state, page)
  return (
    <div>
      <Link className="link" to={page} state={state}>
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
