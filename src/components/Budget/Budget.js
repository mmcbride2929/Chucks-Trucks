import styled from 'styled-components';
import Ad from '../Ad/Ad';

const Budget = () => {
  return (
    <Section>
      <ContentWrapper>
        <LeftContent>
          <SaleBackground>
            <Ad />
          </SaleBackground>
        </LeftContent>
        <RightContent>
          {/* <FormBackground> */}
          <h2>Whats your budget?</h2>
          <h4>Enter your budget & we will do the rest!</h4>
          <form>
            <Wrapper>
              <label htmlFor="budget">Budget</label>
              <select name="budget" id="budet">
                <option value="5000">$5,000</option>
                <option value="10000">$10,000</option>
                <option value="25000">$25,000</option>
                <option value="50000">$50,000</option>
              </select>
            </Wrapper>
            <Wrapper>
              <input type="submit" value="SHOP" />
            </Wrapper>
          </form>
          {/* </FormBackground> */}
        </RightContent>
      </ContentWrapper>
    </Section>
  );
};

export default Budget;

const Section = styled.div`
  height: auto;
  width: 100%;
  padding: 40px;
  text-align: center;
  background-color: whitesmoke;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sale-price {
    margin: 5px;
  }

  span {
    font-weight: 700;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 300px;
    max-height: 325px;
    width: auto;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 4px 5px;
  }
  @media (max-width: 1150px) {
    img {
      max-width: 250px;
      max-height: 200px;
    }
  }

  @media (max-width: 1000px) {
    img {
      max-width: 225px;
      max-height: 175px;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
    img {
      margin-top: 10px;
      max-width: 300px;
      max-height: 250px;
    }

    h4 {
      margin-top: 10px;
    }
  }

  @media (max-width: 550px) {
    img {
      max-width: 275px;
      max-height: 225px;
    }
  }
  @media (max-width: 400px) {
    .sale-price {
      display: none;
    }
  }

  @media (max-width: 350px) {
    img {
      max-width: 250px;
      max-height: 200px;
    }
  }
`;

const SaleBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  min-width: 275px;
  padding: 15px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: #1a1a1a;
  }

  h4 {
    max-width: 351px;
    max-height: 300px;
    font-size: 1rem;
    padding: 10px 15px;
    font-weight: 500;
    background-color: #bc0607;
    color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  form {
    max-width: 350px;
    max-height: 200px;
    background-color: #e0e0e0;
    padding: 40px 75px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  select {
    outline: none;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 500px) {
    padding: 25px;
    h4,
    form {
      width: 85%;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 400px) {
    justify-content: center;
  }

  label {
    font-weight: 700;
    padding: 5px;
    margin: 0 15px;
  }

  input {
    margin: 20px auto;
    border: none;
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

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }
`;
