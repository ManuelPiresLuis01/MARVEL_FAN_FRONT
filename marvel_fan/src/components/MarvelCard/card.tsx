import Style from "./card.module.css";
import type { MarvelCardProps } from "../types/components.types";
import { Link } from "react-router-dom";

const MarvelCard = (p:MarvelCardProps) => {
  return (
    <Link to={`v1/see/${p.id}`} title={`Ver mais sobre ${p.title}`} className={Style.card} >
      <img src={p.image} alt={p.image} className={Style.image} />
      <div className={Style.content}>
        <h3 className={Style.title}>{p.title}</h3>
        <p className={Style.description}>{p.description}</p>
      </div>
    </Link>
  );
}

export default MarvelCard;