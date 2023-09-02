import Me from '../../assets/images/me.png'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import AnimatedButton from '../../components/AnimatedButton';

const Home = () => {
  const hiArray = Array.from('Hi, ');
  const nameArray = Array.from('I\'m Nabila');
  const jobArray = Array.from('Front-end Developer.');

  return (
    <>
      <div className="container home-page">
        {/* <img className="me-photo" src={Me} alt='Nabila talking on Webconf 2019'/> */}
        <div className="me-photo-div"></div>
        <div className="text-zone flex-col">
          <span className="tags-h1">&lt;h1&gt;</span>
          <h1 className="flex-col">
            <AnimatedLetters
              strArray={hiArray}
              idx={10}
            />
            <AnimatedLetters
              strArray={nameArray}
              idx={15}
            />
            <AnimatedLetters
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <span className="tags-h1">&lt;/h1&gt;</span>

          <h2>React and React Native Developer </h2>
          
          <AnimatedButton str='Contact me' page='/contact'/>
        </div>
      </div>
    </>
  )
}

export default Home
