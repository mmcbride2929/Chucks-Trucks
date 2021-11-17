import styled from 'styled-components';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const Application = () => {
  // toggling whether the loan modal is active or not
  const [active, setActive] = useState(false);

  // setting whether or not the loan results are loading
  const [loading, setLoading] = useState(false);

  // toggling the modal with the submit button and close icon
  const toggleMenu = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  // giving loading time for loan to be 'approved'
  const setLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <FormContainer>
      <h1>Chuck's Trucks</h1>
      <h2>Credit Application</h2>
      {!active ? (
        <form action="submit" className="finance" onSubmit={toggleMenu}>
          <HWrapper>
            <VWrapper>
              <h3>Applicant Info</h3>
              <LeftContainer>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required />
                <label htmlFor="employer">Employer / Company Name</label>
                <input type="text" id="employer" required />

                <label htmlFor="income">Annual Income</label>
                <div className="dollar">
                  <input type="text" id="income" required />
                </div>
              </LeftContainer>
            </VWrapper>
            <VWrapper>
              <h3>Loan Details</h3>
              <RightContainer>
                <label htmlFor="down-payment">Down-Payment</label>
                <div className="dollar">
                  <input type="text" id="down-payment" required />
                </div>
                <label htmlFor="credit">Credit Score</label>
                <input id="credit" type="text" required />
                <label htmlFor="budget" className="budget">
                  Budget
                </label>
                <select name="budget" id="budet" className="option">
                  <option value="5000">$5,000</option>
                  <option value="10000">$10,000</option>
                  <option value="25000">$25,000</option>
                  <option value="10000">$50,000</option>
                </select>
                <RadioContainer>
                  <StyledRadio type="radio" value="buy" name="radio" required />
                  <span>Buy</span>
                  <StyledRadio
                    type="radio"
                    value="lease"
                    name="radio"
                    required
                  />
                  <span>Lease</span>
                </RadioContainer>
                <input type="submit" className="submit" onClick={setLoad} />
              </RightContainer>
            </VWrapper>
          </HWrapper>
        </form>
      ) : loading ? (
        <LoadingModal className="loading-modal">
          <h2>One Moment..</h2>
          <h3>Finalizing Your Approval Letter </h3>
        </LoadingModal>
      ) : (
        <Modal>
          <CloseIcon className="close" onClick={toggleMenu} />
          <h2>Congratulations!</h2>
          <h4>You've been approved!</h4>
          <h5>Loan Details:</h5>
          <p>Up to $2781 with an APR of 40%!</p>
          <h5 className="red">No down payment required!</h5>
          <LocalAtmIcon className="money" />
          <p className="lorem">
            Chuck's loans are better than gold! Our budget friendly loans have a
            great program where we allow you to pay off your truck over the next
            12 years! Hopefully your truck out-lasts the loan! I guess we will
            see!
          </p>
        </Modal>
      )}
    </FormContainer>
  );
};

export default Application;

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'ZCOOL KuaiLe', cursive;
    margin-top: 35px;
    padding: 2px;
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
    text-shadow: 1px 2px #bc0607;
  }

  h2 {
    margin: 3px;
    margin-bottom: 35px;
  }

  form {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;

    input,
    select {
      font-size: 0.9rem;
      margin-top: 7px;
      width: 225px;
      padding-left: 3px;
      margin-bottom: 25px;
      border: none;
      outline: none;
      border-bottom: 1px solid black;
    }

    #name {
      width: 200px;
    }

    #income {
      width: 150px;
    }
  }

  .submit {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    background-color: #bc0607;
    color: whitesmoke;
    width: 80px;
    padding: 8px 0px;
    margin: 5px auto;
    border-radius: 2px;
    border: none;

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  padding: 20px 80px;
  background-color: whitesmoke;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  margin-bottom: 50px;

  label {
    font-weight: 500;
  }
  input {
    background-color: whitesmoke;
  }

  .dollar {
    display: inline-block;
    position: relative;
  }
  .dollar input {
    padding-left: 15px;
  }
  .dollar:before {
    position: absolute;
    content: '$';
    left: 5px;
    top: 3px;
  }

  @media (max-width: 925px) {
    width: 350px;
    padding: 20px 60px;
  }

  @media (max-width: 850px) {
    width: 400px;
    padding: 20px 80px;
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    width: 300px;
    padding: 20px 50px;
    margin: 0 auto;
    margin-bottom: 25px;
  }

  @media (max-width: 375px) {
    padding: 20px 30px;
    width: 255px;

    #email,
    #employer {
      width: 200px;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  padding: 20px 80px;
  background-color: whitesmoke;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  margin-bottom: 50px;

  .option {
    width: 90px;
    background-color: whitesmoke;
  }

  #down-payment,
  #credit {
    width: 200px;
    background-color: whitesmoke;
  }

  label {
    font-weight: 500;
  }

  .dollar {
    display: inline-block;
    position: relative;
  }
  .dollar input {
    padding-left: 15px;
  }
  .dollar:before {
    position: absolute;
    content: '$';
    left: 5px;
    top: 3px;
  }

  @media (max-width: 925px) {
    width: 350px;
  }

  @media (max-width: 850px) {
    width: 400px;
  }

  @media (max-width: 425px) {
    width: 300px;
    padding: 20px 50px;
  }

  @media (max-width: 375px) {
    width: 255px;
    padding: 20px 30px;

    .budget,
    .option {
      margin: 5px auto;
      margin-top: 0px;
    }
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 200px;
  margin: 0 auto;
  margin-top: 3px;

  span {
    font-weight: 500;
    margin: 5px;
    margin-top: 3px;
    margin-right: 25px;
  }

  @media (max-width: 375px) {
    margin-top: 15px;
  }
`;

const VWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  h3 {
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
    background-color: #bc0607;
    color: whitesmoke;
    letter-spacing: 1px;
    margin-top: 10px;
  }
`;

const HWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const StyledRadio = styled.input`
  border: 0px;
  width: 8%;
  height: 1rem;
`;

//modal
const Modal = styled.div`
  height: 425px;
  width: 400px;
  background-color: whitesmoke;
  margin-bottom: 30px;
  position: relative;
  text-align: center;

  .close {
    position: absolute;
    top: 5px;
    right: 5px;

    :hover {
      cursor: pointer;
      color: #bc0607;
    }
  }

  h2 {
    margin-top: 50px;
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 5px;
    padding: 0px;
  }

  h5 {
    margin-top: 25px;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
    padding: 0 50px;
    margin: 5px;
  }

  .red {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #bc0607;
  }

  .money {
    margin-top: 10px;
    vertical-align: text-bottom;
    font-size: 4rem;
    color: #066106;
  }

  .lorem {
    font-weight: 500;
    margin: 20px 0;
  }

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 350px) {
    width: 280px;
    height: 500px;
  }
`;

// loading modal

const LoadingModal = styled.div`
  height: 425px;
  width: 400px;
  background-color: whitesmoke;
  margin-bottom: 30px;
  position: relative;
  text-align: center;

  h2 {
    margin-top: 100px;
  }
  h3 {
  }
`;
