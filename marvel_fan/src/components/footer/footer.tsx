import Style from "./footer.module.css";
import Logo from "../ui/marvelLogo/Logo";
import { BiSearch } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContent}>
        <Logo />
        <ul>
          <li className={Style.title}>Contactos</li>
          <li>
            <FaFacebook />
            Facebook
          </li>
          <li>
            <RiInstagramFill />
            Instagram
          </li>
          <li>
            <BsTwitterX />
            Twitter
          </li>
        </ul>
        <ul>
           <li className={Style.title}>Navegação</li>
          <li>Home</li>
          <li>Personagens</li>
          <li>Comics</li>
          <li>Series</li>
          <li>Historias</li>
        </ul>
        <div className={Style.selectSearch}>
          <select>
            <option disabled>Selecionar Idioma</option>
            <option value="">Português</option>
            <option value="">Inglês</option>
            <option value="">Francês</option>
          </select>
          <div className={Style.search}>
            <i className={Style.iconSearch}>
              <BiSearch />
            </i>
            <input
              type="search"
              placeholder="Pesquise algo (Personagens, Comics, series ou historias) ..."
            />
          </div>
          <p className={Style.Fquestion}>Perguntas frequentes !</p>
        </div>
      </div>
      <p>
        Site developed by Manuel Pires Luís | Data provided by Marvel. ©{" "}
        {currentYear} MARVEL
      </p>
    </footer>
  );
};

export default Footer;
