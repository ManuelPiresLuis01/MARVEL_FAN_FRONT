import Style from './home.module.css';               
import Logo from '../../../components/ui/marvelLogo/Logo';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className={Style.home}>
        <nav>
          <Logo/>
          <ul className={Style.navLinks}>
            <li><Link to="/v1/home">Home</Link></li>
            <li><Link to="/v1/characters">Characters</Link></li>
            <li><Link to="/v1/comics">Comics</Link></li>
            <li><Link to="/v1/series">Series</Link></li>
            <li><Link to="/v1/stories">Stories</Link></li>
          </ul>

          <div className={Style.authLinks}>
              <Link className={Style.login} to="/auth/login">Login</Link> 
              <Link className={Style.registration} to="/auth/registration">Registration</Link>
          </div>
        </nav>
    </div>
  );
}

export default Home;