import styled from 'styled-components';
import Budget from '../components/Budget/Budget';
import Footer from '../components/Footer/Footer';
import Reviews from '../components/Reviews/Reviews';
import Sale from '../components/Sale/Sale';

const Home = () => {
  return (
    <body>
      <Sale />
      <Budget />
      <Reviews />
      <Footer />
    </body>
  );
};

export default Home;
