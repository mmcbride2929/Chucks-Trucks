import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ad = ({ header, image, name, salePrice, price, promo }) => {
  return (
    <AdInfo>
      <h3>{header}</h3>
      <ImgContainer>
        <img src={image} alt="Ford Truck" />
      </ImgContainer>
      <TextContainer>
        <p>
          Drive this <span>{name}</span> off the lot... <span>TODAY!</span>
        </p>
        <h4 className="sale-price">{price}</h4>
        <PromoCode>
          <span className="price">{salePrice}</span> With promo code:
          <span className="promo">{promo}</span>
        </PromoCode>
      </TextContainer>
    </AdInfo>
  );
};

export default Ad;

const AdInfo = styled.div`
  background-color: white;
  padding: 15px;
  margin: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  h3 {
    text-transform: uppercase;
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
