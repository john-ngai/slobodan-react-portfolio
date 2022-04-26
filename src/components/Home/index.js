import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <div className='text-zone'>
        <h1>Hi, <br /> I'm
          <img src={LogoTitle} alt='developer' />
          lobodan
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
        <Link className='flat-bottom' to='/contact'>CONTACT ME</Link>
      </div>

    </div>
  );
}
