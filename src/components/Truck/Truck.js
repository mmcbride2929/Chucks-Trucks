import React from 'react';
import styled from 'styled-components';

const Truck = ({ truck }) => {
  const { name, year, miles, id, photo, price, description, size } = truck;
  return (
    <Container>
      <TopContent>
        <img src={require(`../../photos/${photo}`).default} />
        <Wrapper>
          <h4>{year} </h4>
          <h3>{name} </h3>

          <p>- {miles} miles.</p>
        </Wrapper>
        <h3>{price}</h3>
        <h5>{description}</h5>
        <Wrapper>
          <h2>BUY NOW</h2>
          <h2>FINANCE</h2>
        </Wrapper>
      </TopContent>
    </Container>
  );
};

export default Truck;

const Container = styled.div`
  display: flex;
  margin: 0 30px;
  margin-bottom: 50px;
  width: 80%;
  box-shadow: rgba(28, 30, 31, 0.3) 2px 2px 4px 0px;
  background-color: white;
  border-radius: 5px;
`;

const TopContent = styled.div`
  text-align: center;
  padding: 20px 0;

  img {
    display: block;
    margin: 0 auto;
    margin-top: 8px;
    max-width: 380px;
    max-height: 305px;
    width: auto;
    height: auto;
  }

  h5 {
    padding: 0px 50px;
  }

  h3 {
    margin: 3px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin-left: 20px;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    background-color: #bc0607;
    color: whitesmoke;
    width: 100px;
    padding: 6px 0px;
    margin-top: 15px;
    border-radius: 2px;

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }

  h4 {
    font-size: 1.1rem;
    margin: 0 5px;
    padding-left: 12px;
  }

  p {
    font-weight: 600;
    margin: 0 5px;
  }
`;
