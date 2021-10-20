import styled from 'styled-components';
import manAvi from '../../photos/man.jpg';
import girlAvi from '../../photos/girl.jpeg';
import StarIcon from '@material-ui/icons/Star';

const Reviews = () => {
  return (
    <Section>
      <ReviewContainer>
        <AvatarWrapper>
          <Avatar src={manAvi}></Avatar>
          <h4>Josh Jenkins</h4>
        </AvatarWrapper>
        <ReviewWrapper>
          <Row>
            <h5>I should have read the warranty..</h5>
            <span>
              <StarIcon className="gold" />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
          </Row>
          <h6>
            "When I asked to test drive one of the vehicles Chuck said that it
            was running fine and insissted I sign the paperwork. "
          </h6>
        </ReviewWrapper>
      </ReviewContainer>
      <ReviewContainer>
        <AvatarWrapper>
          <Avatar src={girlAvi}></Avatar>
          <h4>Tara Thomas</h4>
        </AvatarWrapper>
        <ReviewWrapper>
          <Row>
            <h5>Didn't work out.</h5>
            <span>
              <StarIcon className="gold" />
              <StarIcon className="gold" />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
          </Row>
          <h6>
            "The owner was nice but nothing caught our eye. We came here
            thinking it was a dealership but it was a junk-yard."
          </h6>
        </ReviewWrapper>
      </ReviewContainer>
    </Section>
  );
};

export default Reviews;

const Section = styled.div`
  height: 500px;
  background-color: #bc0607;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReviewContainer = styled.div`
  height: 175px;
  width: 70%;
  background-color: whitesmoke;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  margin: 30px;
  display: flex;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;

  h4 {
    margin-top: 5px;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 80px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const ReviewWrapper = styled.div`
  width: 75%;
  text-align: center;
  flex: 0.7;
  display: flex;
  padding: 15px;
  margin-right: 20px;
  flex-direction: column;
  justify-content: center;

  h6 {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;
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
    font-size: 0.9rem;
    font-weight: 900;
    margin: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
