import styled from 'styled-components';
import showCar from '../../photos/lg-cynder-blocks.jpg';

const Ad = () => {
  return (
    <AdInfo>
      <h3>Chuck's Truck of the Week</h3>
      {/* need onclick to only this car */}
      <ImgContainer>
        <img src={showCar} alt="Ford Truck" />
      </ImgContainer>
      <TextContainer>
        <p>
          Drive this <span>F-150</span> off the lot... <span>TODAY!</span>
        </p>

        <h4>$36,995 </h4>
        <PromoCode>
          <span className="price">$36,900</span> With promo code:
          <span className="promo">3WHEELS</span>
        </PromoCode>

        <h2>BUY NOW</h2>
      </TextContainer>
    </AdInfo>
  );
};

export default Ad;

const AdInfo = styled.div`
  h3 {
    text-transform: uppercase;
    margin: 5px;
  }
`;

const ImgContainer = styled.div`
  img {
    display: block;
    margin: 0 auto;
    max-width: 350px;
    max-height: 375px;
    width: auto;
    height: auto;
  }
`;

const TextContainer = styled.div`
  p {
    margin-top: 10px;
    font-weight: 400;
  }

  span {
    font-weight: 700;
    font-size: 1.05rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    background-color: #bc0607;
    color: whitesmoke;
    width: 100px;
    padding: 6px 0px;
    margin: 0px auto;
    margin-top: 15px;
    border-radius: 2px;

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }
`;

const PromoCode = styled.h4`
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.3px;

  .promo {
    font-size: 1.1rem;
    margin: 7px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #bc0607;
  }
  .price {
    color: #bc0607;
    margin: 3px;
  }
`;
