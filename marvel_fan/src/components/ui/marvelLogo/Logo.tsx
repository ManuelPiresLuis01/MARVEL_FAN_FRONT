import Style from "./Logo.module.css"
import { Link } from "react-router-dom";
const Logo = ()=> {
  return (
    <div className={Style.marvelLogo}><Link to={"/v1/home"}>MARVEL</Link></div>
  );
}

export default Logo;