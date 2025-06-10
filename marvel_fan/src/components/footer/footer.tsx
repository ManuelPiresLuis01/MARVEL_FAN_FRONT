import Style from "./footer.module.css";
import { BiSearch } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContent}>
        <ul>
          <li><FaFacebook />Facebook</li>
          <li><RiInstagramFill />Instagram</li>
          <li><BsTwitterX />Twitter</li>
        </ul>
        <ul>
          <li>Home</li>
          <li>Personagens</li>
          <li>Comics</li>
          <li>Series</li>
          <li>Historias</li>
        </ul>
        <div className={Style.selectSearch}>
          <select>
            <option value="">Selecionar Idioma</option>
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
      <p>Site developed by Manuel Pires Luís | Data provided by Marvel. © {new Date().getFullYear()} MARVEL</p>
    </footer>
  );
};

export default Footer;
