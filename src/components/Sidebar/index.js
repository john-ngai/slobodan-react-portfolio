import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo ' src={LogoSubtitle} alt='slobodan' />
      </Link>

      <nav>
        <NavLink to='/' exact='true' activeclassname='active'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>

        <NavLink className='about-link'
          to='/about'
          exact='true'
          activeclassname='active'
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>

        <NavLink className='contact-link'
          to='/contact'
          exact='true'
          activeclassname='active'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target='_blank'
            rel='noreferror'
            href='https://www.linkedin.com/in/john-ngai/'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>

        <li>
          <a
            target='_blank'
            rel='noreferror'
            href='https://github.com/john-ngai'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>

        <li>
          <a
            target='_blank'
            rel='noreferror'
            href='#'
          >
            <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
          </a>
        </li>

        <li>
          <a
            target='_blank'
            rel='noreferror' 
            href='#'
          >
            <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  );
}
