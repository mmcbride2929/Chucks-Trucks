import styled from 'styled-components';
import Ad from '../Ad/Ad';
import f150 from '../../photos/lg-blocks.jpg';
import blazer from '../../photos/chevy-blazer.jpg';

const AdSection = () => {
  return (
    <Section>
      <CardContainer>
        <h2 className="TOTW">Chuck's Truck of the Week!</h2>
        <LeftContent>
          <Ad
            image={f150}
            name={'F-150'}
            salePrice={'$36,900'}
            price={'$36,995 '}
            promo={'3WHEELS'}
          />
        </LeftContent>
      </CardContainer>
      <CardContainer>
        <h2 className="margin"> Chuck's Newest Truck!</h2>
        <RightContent>
          <Ad
            image={blazer}
            name={'Blazer'}
            salePrice={'$24,449 '}
            price={'$24,550'}
            promo={'PAINT-JOB'}
          />
        </RightContent>
      </CardContainer>
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
    .margin {
      margin-top: 50px;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 50px;

  @media (max-width: 900px) {
    .TOTW {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 5px 5px;
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
