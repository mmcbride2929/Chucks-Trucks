import styled from 'styled-components';
import Ad from '../Ad/Ad';
import f150 from '../../photos/lg-cynder-blocks.jpg';
import blazer from '../../photos/chevy-blazer.jpg';

const AdSection = () => {
  return (
    <Section>
      <LeftContent>
        <Ad
          header={"Chuck's Truck of the Week"}
          image={f150}
          name={'F-150'}
          salePrice={'$36,900'}
          price={'$36,995 '}
          promo={'3WHEELS'}
        />
      </LeftContent>
      <RightContent>
        <Ad
          header={"Chuck's Newest Truck!"}
          image={blazer}
          name={'Blazer'}
          salePrice={'$24,449 '}
          price={'$24,550'}
          promo={'PAINT-JOB'}
        />
      </RightContent>
    </Section>
  );
};

export default AdSection;

const Section = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightContent = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* .sale-price {
    margin: 5px;
  }

  span {
    font-weight: 700;
  }

   */
