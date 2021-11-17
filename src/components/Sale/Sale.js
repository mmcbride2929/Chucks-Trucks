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
      <Button to="/inventory">
        <h3 className="btn">SHOP NOW</h3>
      </Button>
      <h6>Will likely required to be towed off the lot.</h6>
      <p>Battery not included.</p>
    </Header>
  );
};

export default Sale;

const Header = styled.header`
  width: 100%;
  height: 285px;
  background: url(${hero}) no-repeat center center/cover;
  color: whitesmoke;
  text-align: center;
  box-shadow: inset 100px 80px 200px #000000, inset -100px -80px 200px #000000;
  padding: 15px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.8rem;
    padding: 5px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  h6 {
    margin-top: 20px;
  }

  p {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.7rem;
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
`;

const Button = styled(Link)`
  text-decoration: none;
  max-width: 100px;
  margin: 20px auto;
  .btn {
    max-width: 100px;
    z-index: 4;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    background-color: #bc0607;
    color: whitesmoke;
    padding: 8px 4px;
    border-radius: 2px;
    margin: 0px auto;

    :hover {
      cursor: pointer;
      color: #1b1717;
      background-color: whitesmoke;
    }
  }
`;
