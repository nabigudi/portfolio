import { FormEvent, RefObject, useRef, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters'
import emailjs from '@emailjs/browser';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import 'react-tiny-fab/dist/styles.css';


const Contact = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [contactOk, setContactOk] = useState(false);
  const form:RefObject<HTMLFormElement> = useRef(null);
  
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    setSendingEmail(true);
    emailjs.sendForm('service_4ynye3c', 'template_wxpqlfx', form.current || "", 'RGp7fTugM30xK-eXn')
      .then(() => {
          setSendingEmail(false);
          setContactOk(true);
      });
  }

  return (
    <>
      <div className="container contact-page">
        {contactOk ?
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  strArray={'Thanks!'.split('')}
                  idx={10}
                />
              </h1>
              <p>
                Thanks for using the contact form on this site. I will answer you as soon as possible. 
              </p>

              <div className="button-row ">
                <div className="flat-button" onClick={()=>setContactOk(!contactOk)}>
                  <input type="submit" className="btn-text" value="SEND ANOTHER MESSAGE?" />
                </div>
              </div>
            </div>
          :
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
                    {
                      sendingEmail ?
                        <div className="flat-button disabled">
                          <FontAwesomeIcon className="btn-text loading" icon={faSpinner} />
                        </div>
                      :
                        <div className="flat-button">
                          <input type="submit" className="btn-text" value="SEND" />
                        </div>
                        
                    }
                  </div>
                </form>
              </div>
            </div>
        }
        
        <div className="show-info-card">
          <InfoCardContact />
        </div>
      </div>
    </>
  )
}

const InfoCardContact = () => {
  return (
    <div className="info-card">
        <div className="info-map">
          <span>Nabila Gudiño Ochoa</span>
          <span>Argentina, Córdoba  </span>
          <a href="tel:+5493513909401">+5493513909401</a>
          <a href="mailto:nabi.gudi@gmail.com">nabi.gudi@gmail.com</a>
      </div>
    </div>
   
  )
}

export default Contact