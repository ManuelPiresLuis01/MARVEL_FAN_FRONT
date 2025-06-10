import Style from "./home.module.css";
import { SiMarvelapp } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import Menu from "../../../components/menu/menu";
import Footer from "../../../components/footer/footer";
import Novelty from "../../../components/novelty/novelty";
import MarvelCard from "../../../components/MarvelCard/card";

import { MockMarvelCard, MockNovelty } from "../../../mock/MockMarvelCard";

const Home = () => {
  return (
    <div>
      <div className={Style.home1}>
        <Menu />
        <h1 className={Style.topTitle}>
          MARVEL FAN, O LUGAR ONDE TODOS OS FÃS DESEJAM ESTAR,
        </h1>
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
            <input type="search" placeholder="Pesquise algo (Personagens, Comics, series ou historias) ..." />
          </div>

          <div className={Style.container}>
            <div>
              <h1 className={Style.titleHigh}>PERSONAGENS EM DESTAQUES</h1>
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
            </div>

            <div>
              <h1 className={Style.titleHigh}>SERIES EM DESTAQUES</h1>
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
            </div>
          </div>
          <h1 className={Style.news}>Encontre todas as novidades</h1>
          {MockNovelty.map((card, index) => (
            <Novelty
              key={index}
              id={card.id}
              title={card.title}
              banner={card.banner}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
