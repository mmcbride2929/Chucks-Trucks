import styled from 'styled-components';
import hero from '../../photos/Finance-Hero.jpg';

const FinanaceHeader = () => {
  return (
    <Header>
      <h1>Finance</h1>
      <h4>We're here to help.</h4>
      <p>
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
  box-shadow: inset 80px 70px 220px #000000, inset -80px -70px 220px #000000;
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
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    margin: 3px;
    margin-top: 20px;
    text-transform: uppercase;
  }

  p {
    padding: 0 200px;
    margin: 5px;
    font-weight: 500;
  }
`;
