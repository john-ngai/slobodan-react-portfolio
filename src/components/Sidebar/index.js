import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

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
    </div>
  );
}
