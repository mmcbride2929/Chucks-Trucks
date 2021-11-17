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
  height: 285px;
  background: url(${hero}) no-repeat center center/cover;
  padding: 5px 30px;
  margin: 0 auto;
  text-align: center;
  box-shadow: inset 50px 50px 180px #000000, inset -50px -50px 180px #000000;
  letter-spacing: 0.5px;

  h1 {
    font-size: 3rem;
    padding: 15px;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.1rem;
    margin-top: 30px;
  }

  h5 {
    font-size: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    margin: 2px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  p {
    margin: 5px;
    margin-top: 50px;
    font-weight: 500;
  }

  .description {
    margin: 5px auto;
    width: 350px;
  }

  @media (max-width: 450px) {
    h4 {
      margin-top: 5px;
    }
    h5 {
      padding: 15px;
      margin-top: 20px;
    }

    .description {
      margin-top: 25px;
      font-size: 0.85rem;
      width: 270px;
    }
  }
`;
