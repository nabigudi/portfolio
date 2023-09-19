import { useLocation } from 'react-router-dom';
import AnimatedLetters from '../../../components/AnimatedLetters'
import './index.scss'
import { Job } from '../../../types/Job';

interface LocationState {
    item: Job;
}

const Selected = () => {
  let location = useLocation();
  const { item } = location.state as LocationState;

  return (
    <>
      <div className="container jobs-selected-page">

        <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={item.title.split('')}
                idx={10}
              />
            </h1>
            <span className="company">Company: {item.company}</span>
            
            <section className="text-section">
              {item.longDescription.split('//').map(paragraph => <p>{paragraph}</p>)}
            </section>
            <h2>
              <AnimatedLetters
                strArray={'Techs'.split('')}
                idx={10}
              />
            </h2>

            <p>{item.description}</p>
          </div>
        </div>
      </>
  )
}

export default Selected
