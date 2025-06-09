import Style from './home.module.css';     
import { SiMarvelapp } from "react-icons/si";       
import { BiSearch } from "react-icons/bi";
import Menu from '../../../components/menu/menu';

const Home = () => {
  return (
    <div>
        <div className={Style.home1}>
          <Menu />
          <h1>MARVEL FAN, O LUGAR ONDE TODOS OS FÃS DESEJAM ESTAR,</h1>
          <h2>EMBARCA NESTA AVENTURA!</h2>
          <button title='Começar a aventura!' className={Style.start}>Começar gratuitamente <i className={Style.icon}><SiMarvelapp /></i></button>
        <div>
          <div className={Style.search}>
          <i className={Style.iconSearch}><BiSearch /></i>
          <input type="search" placeholder='Pesquise algo (Personagens, Comics, series ou historias) ...' />
        </div>
        <h1 className={Style.titleHigh}>DESTAQUES</h1>
        
        </div>
        

      </div>

       <div className={Style.home2}>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default Home;