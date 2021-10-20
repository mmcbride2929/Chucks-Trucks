import styled from 'styled-components';
import chuck from '../photos/Chuck.jpg';
import StarIcon from '@material-ui/icons/Star';

const Chuck = () => {
  return (
    <TestContainer>
      <ContentContainer>
        <h1>MEET CHUCK!</h1>
        <HWrapper>
          <LeftContainer>
            <h2>Chuck HiggleBottom</h2>
            <h4>CEO of Chuck's Trucks</h4>
            <p>
              Chuck HiggleBottom began his journey in the auto-mobile industry
              nearly 3 weeks ago, and has not looked back! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Itaque, eveniet. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Debitis tempore error laudantium rerum cupiditate! Mr.
              HiggleBottom hopes to one day pass the business down to his son,
              Darryl who has promised to never change the company name.
            </p>
            <Row>
              <p>2.2</p>
              <span>
                <StarIcon className="gold" />
                <StarIcon className="gold" />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
              <h5>6 Reviews</h5>
            </Row>
            <p className="company-name">Chuck's Trucks</p>
          </LeftContainer>

          <RightContainer>
            <img src={chuck} alt="Chuck" />
            <p>
              "My name is Chuck, and I <span>know</span> trucks."
            </p>
          </RightContainer>
        </HWrapper>
      </ContentContainer>
    </TestContainer>
  );
};

export default Chuck;

const TestContainer = styled.div`
  height: 75vh;
`;
const ContentContainer = styled.div`
  width: 80%;
  height: 600px;
  background-color: white;
  margin: 100px auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;

  h1 {
    text-align: center;
    font-size: 2.3rem;
    padding: 35px;
  }
`;

const LeftContainer = styled.div`
  padding: 20px 40px;
  flex: 0.45;

  h2 {
    text-align: center;
    font-size: 1.4rem;
    padding-bottom: 4px;
    background-color: #bc0607;
    color: whitesmoke;
  }

  h4 {
    text-align: center;
    font-size: 1.05rem;
    margin-bottom: 10px;
    padding-bottom: 3px;
    background-color: whitesmoke;
  }

  p {
    text-align: left;
    padding: 5px;
    font-size: 0.95rem;
  }

  .company-name {
    padding: 0px;
    opacity: 0.75;
  }
`;

const Row = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  p {
    font-size: 1.05rem;
    letter-spacing: 0.75px;
    margin-right: 2px;
  }
  .MuiSvgIcon-root {
    margin-top: 5px;
    font-size: 1.2rem;
    color: #cecece;
  }

  .gold {
    color: gold;
  }

  h5 {
    margin-left: 6px;
    font-size: 1rem;
  }
`;

const RightContainer = styled.div`
  padding: 20px 40px;
  flex: 0.55;

  img {
    display: block;
    margin: 0px auto;
    max-width: 330px;
    max-height: 355px;
    width: auto;
    height: auto;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  p {
    text-align: center;
    margin-top: 15px;
    font-weight: 600;
  }

  span {
    font-weight: 700;
  }
`;

const HWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
