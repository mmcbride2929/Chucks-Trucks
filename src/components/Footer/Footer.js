import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <NavWrapper>
        <StyledLink to="/inventory"> INVENTORY </StyledLink>
        <span>|</span>
        <StyledLink to="/chuck">CHUCK</StyledLink>
        <span>|</span>
        <StyledLink exact to="/finance">
          FINANCE
        </StyledLink>
      </NavWrapper>
      <h4>ALL SALES FINAL</h4>
      <InfoWrapper>
        <p>123 Big Truck BLVD Cleveland, OH </p>
        <p> (555) - BUY - TRUX</p>
      </InfoWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: whitesmoke;
  padding-top: 20px;
  padding-bottom: 5px;

  h4 {
    letter-spacing: 0.5px;
    margin: 2px;
    color: #bc0607;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavWrapper = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 10px;
  color: black;

  :hover {
    color: #bc0607;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 0px auto;

  p {
    font-size: 0.9rem;
    margin: 0 10px;
    margin-bottom: 10px;

    :hover {
      color: #bc0607;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
