import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import AnimatedTechs from '../../components/AnimatedTechs'
import { techsList } from '../../helpers/TechList'


const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'About me'.split('')}
              idx={10}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an 
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I'm looking for work
            as a tech lead soon, so I am looking for a company which can give me 
            a chance.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I'm focused on React and
            React Native developer, and I'm also passionate about UX/UI design. 
          </p>
          <p>
            If I need to define myself in one sentence, that would be a family and friends
            person, a dance lover, a photography and drawer enthusiast, and tech-obsessed!!!
          </p>
          <p>
            I love having a great relationship with clients and users. My main goal is to 
            create a user-friendly interface that meets the final user's needs and solves 
            their problems. I also enjoy being the bridge between developers and designers 
            or other team members because I have different skills that allow me to 
            understand the various aspects of the project.
          </p>
        </div>

        <article className="wrapper wrapper--vertical">
          <AnimatedTechs techs={techsList} />
          <AnimatedTechs techs={techsList} direction={'marquee--reverse'} />
        </article>
      </div>
    </>
  )
}

export default About
