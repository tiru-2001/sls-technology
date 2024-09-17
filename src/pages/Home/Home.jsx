import './Home.scss';
import { Carousel } from '../../components';

import { home_carousel_items } from '../../utilities';
import Services from '../../components/services/Services';
import Clients from '../../components/clients/Clients';
const Home = () => {
  return (<>
    <section className="home">
      <section className="home_section1">
        <Carousel>
          {home_carousel_items.map((item) => (
            <section key={item.id} className="img_container">
              <img className="" src={item.img} alt={item.img} />
            </section>
          ))}
        </Carousel>
      </section>
    </section>
    <Services />
    <Clients/>
    </>
  );
};

export default Home;
