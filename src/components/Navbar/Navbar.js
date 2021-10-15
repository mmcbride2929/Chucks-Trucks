import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Banner>
      <LeftWrapper>
        <ContentWrapper>
          <StyledLink exact to="/">
            <h1>Chuck's Trucks!</h1>
          </StyledLink>
        </ContentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <ContentWrapper>
          <StyledLink to="/inventory">
            <h3>Inventory</h3>
          </StyledLink>
          <StyledLink to="/chuck">
            <h3>Chuck</h3>
          </StyledLink>
          <StyledLink to="/finance">
            <h3>Finance</h3>
          </StyledLink>
        </ContentWrapper>
      </RightWrapper>
    </Banner>
  );
};

export default Navbar;

const Banner = styled.div`
  font-family: 'Assistant', sans-serif;
  background-color: whitesmoke;
  height: 60px;
  width: 100%;
  display: flex;
  color: #1b1717;
  align-items: center;
`;

const LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 0.4;
  margin-left: 15px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: 'ZCOOL KuaiLe', cursive;
    padding: 5px;
    font-weight: bold;
    color: black;
    text-shadow: 1px 2px #bc0607;

    :hover {
      cursor: pointer;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: default;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.6;
  justify-content: flex-end;
  margin-right: 15px;

  h3 {
    margin-left: 20px;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    background-color: #bc0607;
    color: whitesmoke;
    text-align: center;
    width: 100px;
    padding: 6px 0px;
    border-radius: 2px;

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }
`;
