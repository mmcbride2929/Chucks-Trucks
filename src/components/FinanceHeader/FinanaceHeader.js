import styled from 'styled-components';
import hero from '../../photos/Finance-Hero.jpg';

const FinanaceHeader = () => {
  return (
    <Header>
      <h1>Finance</h1>
      <h4>We're here to help.</h4>
      <p className="description">
        Applying for a loan through Chuck's Trucks is quick and easy. Just
        answer a few questions and we'll get back to you with a competitive rate
        INSTANTLY!
      </p>

      <h5>
        These are just estimates, more information will be needed for an
        accurate quote.
      </h5>
    </Header>
  );
};

export default FinanaceHeader;

const Header = styled.header`
  color: white;
  width: 100%;
  position: relative;
  background: url(${hero}) no-repeat center center/cover;
  padding: 5px 30px;
  margin: 0 auto;
  text-align: center;
  box-shadow: inset 50px 50px 180px #000000, inset -50px -50px 180px #000000;
  letter-spacing: 0.5px;

  h1 {
    font-size: 2.6rem;
    padding: 10px;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.1rem;
    margin-top: 35px;
  }

  h5 {
    font-size: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    margin: 2px;
    margin-top: 5px;
    text-transform: uppercase;
  }

  p {
    padding: 0 200px;
    margin: 5px;
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    p {
      padding: 0 100px;
    }
  }

  @media (max-width: 950px) {
    p {
      padding: 0 50px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.9rem;
      padding: 0 30px;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 400px) {
    h4 {
      margin-top: 10px;
      font-size: 1rem;
    }

    p {
      display: none;
    }

    h1 {
      font-size: 1.8rem;
    }
  }
`;
