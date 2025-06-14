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
              <Link to="/auth/login" title="Entrar" className={Style.login} >Entrar</Link> 
              <Link to="/auth/register" title="Registrar-se" className={Style.registration} >Cadastrar-se</Link>
          </div>
        </nav>
  );
}

export default Menu;
