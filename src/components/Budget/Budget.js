import styled from 'styled-components';
import showCar from '../../photos/lg-cynder-blocks.jpg';

const Budget = () => {
  return (
    <Section>
      <ContentWrapper>
        <LeftContent>
          <h3>Chuck's Truck of the Week</h3>
          {/* need onclick to car's url */}
          <ImgContainer>
            <img src={showCar} alt="Ford Truck" />
          </ImgContainer>
          <TextContainer>
            <h4>
              Drive this off the lot... <span>TODAY!</span>
            </h4>
            <p>$36,995</p>
          </TextContainer>
        </LeftContent>
        <RightContent>
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
        </RightContent>
      </ContentWrapper>
    </Section>
  );
};

export default Budget;

const Section = styled.div`
  height: 375px;
  text-align: center;
  background-color: whitesmoke;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LeftContent = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    padding: 10px;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
  }

  p {
    color: #bc0607;
    font-weight: 500;
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
`;

const ImgContainer = styled.div`
  background-color: whitesmoke;
  padding: 0px 10px;
`;

const TextContainer = styled.div``;

const RightContent = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 20px;
    margin-top: 15px;
    color: #1a1a1a;
  }

  h4 {
    font-size: 1rem;
    padding: 10px 15px;
    font-weight: 500;
    background-color: #bc0607;
    color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  form {
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  label {
    font-weight: 700;
    padding: 5px;
    margin: 0 15px 0;
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
