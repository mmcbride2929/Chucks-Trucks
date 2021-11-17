import styled from 'styled-components';

const Ad = ({ image, name, salePrice, promo }) => {
  return (
    <AdContainer>
      <ImgContainer>
        <img src={image} alt="Ford Truck" />
      </ImgContainer>
      <TextContainer>
        <p>
          Drive this <span>{name}</span> off the lot...
          <br />
          <span className="today">TODAY!</span>
        </p>
        <PromoCode>
          <span>
            <span className="price">{salePrice} </span>With promo code:
          </span>
          <span className="promo">{promo}</span>
        </PromoCode>
      </TextContainer>
    </AdContainer>
  );
};

export default Ad;

const AdContainer = styled.div`
  background-color: white;
  margin: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const ImgContainer = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    min-width: 250px;
    height: auto;
    border-radius: 5px 5px 0px 0px;
  }
`;

const TextContainer = styled.div`
  p {
    font-weight: 400;
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
    font-size: 1rem;
  }

  .today {
    font-size: 1.3rem;
  }
`;

const PromoCode = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.3px;

  span {
    font-size: 0.9rem;

    .price {
      color: #bc0607;
    }
  }
  .promo {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #bc0607;
  }
`;
