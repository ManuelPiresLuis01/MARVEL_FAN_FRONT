import Style from "./home.module.css";
import { SiMarvelapp } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import Menu from "../../../components/menu/menu";
import MarvelCard from "../../../components/MarvelCard/card";
import { MockMarvelCard } from "../../../mock/mock";

const Home = () => {
  return (
    <div>
      <div className={Style.home1}>
        <Menu />
        <h1 className={Style.topTitle}>MARVEL FAN, O LUGAR ONDE TODOS OS FÃS DESEJAM ESTAR,</h1>
        <h2>EMBARCA NESTA AVENTURA!</h2>
        <button title="Começar a aventura!" className={Style.start}>
          Começar gratuitamente{" "}
          <i className={Style.icon}>
            <SiMarvelapp />
          </i>
        </button>
        <div>
          <div className={Style.search}>
            <i className={Style.iconSearch}>
              <BiSearch />
            </i>
            <input
              type="search"
              placeholder="Pesquise algo (Personagens, Comics, series ou historias) ..."
            />
          </div>

          <h1 className={Style.titleHigh}>DESTAQUES</h1>
          <div className={Style.highligh}>
            {MockMarvelCard.map((card, index) => (
              <MarvelCard
                key={index}
                id={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <h1 className={Style.news}>Encontre todas as novidades</h1>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
