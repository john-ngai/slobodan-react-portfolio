import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = event => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_r5b079f',
        'template_0myh8ue',
        refForm.current,
        'n3YbaNik8e4-tfavq'
      )
      .then(
        () => {
        alert('Message successfully sent!');
        window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again.');
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>

          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>

          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>

                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>

                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>

                <li>
                  <textarea name='message' placeholder='Message' required />
                </li>

                <li>
                  <input className='flat-button' type='submit' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  );
}
