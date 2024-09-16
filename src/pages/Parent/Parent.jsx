import { Outlet } from 'react-router-dom';
import './Parent.scss';
import { Header, Footer } from '../../components/index';
const Parent = () => {
  return (
    <section className="parent inter-font">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Parent;
