import { FormEvent, RefObject, useRef } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters'
import emailjs from '@emailjs/browser';
import './index.scss'


const Contact = () => {
  const form:RefObject<HTMLFormElement> = useRef(null);
  
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {    
    e.preventDefault();

    emailjs.sendForm('service_4ynye3c', 'template_wxpqlfx', form.current || "", 'RGp7fTugM30xK-eXn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'Contact me'.split('')}
              idx={10}
            />
          </h1>
          <p>
            I am interested in freelance or contractor opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="first-row">
                <input className="name" placeholder="Name" type="text" name="from_name" id="from_name" required />
                <input
                    placeholder="Email"
                    type="email"
                    name="from_email"
                    id="from_email"
                    required
                  />
              </div>

              <textarea
                placeholder="Message"
                name="message"
                id="message"
                required
              ></textarea>

              <div className="button-row ">
                <input type="submit" className="flat-button" value="SEND" />
              </div>
            </form>
          </div>
        </div>

        <div className="info-map">
          <span>Nabila Gudiño Ochoa</span>
          <span>Argentina, Córdoba  </span>
          <span>+5493513909401</span>
          <span>nabi.gudi@gmail.com</span>
        </div>
      </div>
    </>
  )
}

export default Contact