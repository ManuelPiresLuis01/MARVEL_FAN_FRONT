import Style from './home.module.css';               
import Menu from '../../../components/menu/menu';

const Home = () => {
  return (
    <div>
        <div className={Style.home1}>
          <Menu />
      </div>
       <div className={Style.home2}>
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default Home;