import Logo from "../ui/marvelLogo/Logo";
import Style from "./menu.module.css";
import { Link } from "react-router-dom";

const Menu = ()   => {    
  return (
        <nav className={Style.nav}>
          <Logo/>
          <ul className={Style.navLinks}>
            <li><Link to="/v1/home">Home</Link></li>
            <li><Link to="/v1/characters">Personagens</Link></li>
            <li><Link to="/v1/comics">Comics</Link></li>
            <li><Link to="/v1/series">Series</Link></li>
            <li><Link to="/v1/stories">Historias</Link></li>
          </ul>

          <div className={Style.authLinks}>
              <Link title="Login" className={Style.login} to="/auth/login">Entrar</Link> 
              <Link title="Registrar-se" className={Style.registration} to="/auth/registration">Cadastrar-se</Link>
          </div>
        </nav>
  );
}

export default Menu;
