import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Truck = ({ truck }) => {
  const { name, year, miles, photo, price, description } = truck;

  return (
    <Container>
      <TopContent>
        <img src={require(`../../photos/${photo}`).default} />
        <Wrapper>
          <h4 className="year">{year} </h4>
          <h3>{name} </h3>
          <p>- {miles} mi.</p>
        </Wrapper>
        <h3>{price}</h3>
        <h5>{description}</h5>
        <Wrapper>
          <h2>BUY NOW</h2>
          <StyledLink to="/finance">
            <h2>FINANCE</h2>
          </StyledLink>
        </Wrapper>
      </TopContent>
    </Container>
  );
};

export default Truck;

// truck card container
const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 350px;
  box-shadow: rgba(28, 30, 31, 0.3) 2px 2px 4px 0px;
  background-color: white;
  border-radius: 5px;

  @media (max-width: 675px) {
  }

  @media (max-width: 350px) {
    width: 275px;
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

// card content - image, title, desc
const TopContent = styled.div`
  text-align: center;

  img {
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    min-width: 250px;
    height: auto;
    border-radius: 5px 5px 0px 0px;
  }

  h3 {
    margin: 3px;
  }

  h4 {
    font-size: 1.1rem;
    margin: 0 5px;
    padding-left: 12px;
  }

  h5 {
    padding: 0px 15px;
  }

  p {
    font-weight: 600;
    margin: 0 5px;
  }

  @media (max-width: 500px) {
    h3,
    h4 {
      font-size: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// button wrapper
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  // 'button' style
  h2 {
    margin: 0 10px;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    background-color: #bc0607;
    color: whitesmoke;
    width: 100px;
    padding: 6px 0px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 2px;

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }
`;
