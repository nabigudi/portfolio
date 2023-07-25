import { useEffect, useState } from 'react'
import './index.scss'

interface AnimatedLettersProps {
  strArray: string[];
  idx: number; 
}
const AnimatedLetters = ({ strArray, idx }: AnimatedLettersProps) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
