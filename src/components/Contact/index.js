import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

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
            <form>
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
