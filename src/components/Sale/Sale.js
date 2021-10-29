import styled from 'styled-components';
import hero from '../../photos/home-hero.jpg';
import { Link } from 'react-router-dom';

const Sale = () => {
  return (
    <Header>
      <h2>CELEBRATING 2 WEEKS</h2>
      <h4>of service with a</h4>
      <h1>MONSTER SALE</h1>
      <h3>0.2% OFF YOUR TRUCK</h3>
      <Button to="/inventory">SHOP NOW</Button>
      <h6>Will likely required to be towed off the lot.</h6>
      <p>Battery not included.</p>
    </Header>
  );
};

export default Sale;

const Header = styled.header`
  width: 100%;
  height: 40vh;
  position: relative;
  background: url(${hero}) no-repeat center center/cover;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: inset 100px 80px 200px #000000, inset -100px -80px 200px #000000;

  h2 {
    font-size: 2rem;
    margin-top: 80px;
  }

  h1 {
    font-size: 2.7rem;
  }

  h3 {
    font-size: 1rem;
  }

  h6 {
    position: absolute;
    bottom: 5%;
    width: 100%;
  }

  p {
    font-size: 10px;
    position: absolute;
    bottom: 2%;
    width: 100%;
  }

  @media (max-width: 1050px) {
    height: 40vh;
  }

  @media (max-width: 768px) {
    height: 34vh;

    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.7rem;
      margin-top: 25px;
    }

    h3 {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 0.7rem;
    }

    h4 {
      font-size: 0.7rem;
    }

    h6 {
      margin-bottom: 5px;
    }
  }

  @media (min-height: 400px) {
    height: 40vh;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  background-color: #bc0607;
  color: whitesmoke;
  text-align: center;
  width: 110px;
  padding: 9px 2px;
  border-radius: 2px;
  margin: 20px auto;

  :hover {
    cursor: pointer;
    color: #1b1717;
    background-color: whitesmoke;
  }

  @media (max-width: 500px) {
    margin-bottom: 0;
    margin-top: 35px;
  }
`;
