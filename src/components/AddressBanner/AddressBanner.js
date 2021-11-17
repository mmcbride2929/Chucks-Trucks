import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const AddressBanner = () => {
  return (
    <Banner>
      <LeftWrapper>
        <ContentWrapper>
          <LocationOnIcon className="address" />
          <p className="address">123 Big Truck BLVD Cleveland, OH</p>
        </ContentWrapper>
        <ContentWrapper>
          <LocalPhoneIcon />
          <p className="phone-number">(555) - BUY - TRUX</p>
        </ContentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <a href="https://Facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://Twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://Instagram.com">
          <InstagramIcon />
        </a>
      </RightWrapper>
    </Banner>
  );
};

export default AddressBanner;

const Banner = styled.div`
  font-family: 'Assistant', sans-serif;
  background-color: #bc0607;
  height: 50px;
  width: 100%;
  display: flex;
  color: whitesmoke;
  align-items: center;
`;

const LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 0.6;
  margin-left: 15px;

  @media (max-width: 500px) {
    flex: 0.6;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin-right: 7px;
  }
  .MuiSvgIcon-root {
    margin: auto 0;
    padding-top: 2px;
    margin-right: 5px;
    font-size: 1.2rem;
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-left: 7px;
  align-items: center;

  @media (max-width: 800px) {
    .phone-number,
    .address {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 650px) {
    .address {
      display: none;
    }

    .phone-number {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 500px) {
    .phone-number {
      font-size: 1rem;
    }
  }

  @media (max-width: 350px) {
    .phone-number {
      font-size: 0.9rem;
    }
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.4;
  justify-content: flex-end;

  margin-right: 15px;

  a {
    font-size: 1.3rem;
    margin-left: 25px;
    background-color: #831d1fb5;
    margin: 0px 5px;
    padding: 0px 5px;
    color: whitesmoke;
    border-radius: 20px;

    :hover {
      background-color: whitesmoke;
      color: #000814;
    }
  }

  .MuiSvgIcon-root {
    margin-top: 5px;
  }
`;
