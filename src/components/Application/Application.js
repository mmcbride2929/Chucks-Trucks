import styled from 'styled-components';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const Application = () => {
  const [active, setActive] = useState(false);

  // toggling the modal with the submit button and close icon
  const toggleMenu = (e) => {
    if (e.target.value === 'submit') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <FormContainer>
      <h1>Chuck's Trucks</h1>
      <h2>Credit Application</h2>
      {!active ? (
        <form action="submit" className="finance">
          <HWrapper>
            <VWrapper>
              <h3>Applicant Info</h3>
              <LeftContainer className="">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="employer">Employer / Company Name</label>
                <input type="text" id="employer" />

                <label htmlFor="income">Annual Income</label>
                <div className="dollar">
                  <input type="text" id="income" />
                </div>
              </LeftContainer>
            </VWrapper>
            <VWrapper>
              <h3>Loan Details</h3>
              <RightContainer className="">
                <label htmlFor="down-payment">Down-Payment</label>
                <div className="dollar">
                  <input type="text" id="down-payment" />
                </div>
                <label htmlFor="credit">Credit Score</label>
                <input id="credit" type="text" />
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
                  <StyledRadio type="radio" value="buy" name="buy" />
                  <span>Buy</span>
                  <StyledRadio type="radio" value="lease" name="lease" />
                  <span>Lease</span>
                </RadioContainer>
                <button
                  value="submit"
                  type="reset"
                  className="submit"
                  onClick={toggleMenu}
                >
                  submit
                </button>
              </RightContainer>
            </VWrapper>
          </HWrapper>
        </form>
      ) : (
        <Modal>
          <CloseIcon onClick={toggleMenu} />
          <h2>Congratulations!</h2>
          <h4>You've been approved!</h4>
          <h5>Loan Details:</h5>
          <p>Up to $781 with an APR of 40%!</p>
          <p>Looks like you'll be driving a used truck in no time!</p>
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

    @media (max-width: 425px) {
      width: 300px;
      margin: 0 auto;
    }

    @media (max-width: 375px) {
      width: 255px;
    }
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

  .MuiSvgIcon-root {
    position: absolute;
    top: 5px;
    right: 5px;

    :hover {
      cursor: pointer;
      color: red;
    }
  }

  h2 {
    margin-top: 45px;
    margin-bottom: 0px;
  }

  h4 {
    color: green;
    margin-top: 5px;
    padding: 0px;
  }
`;

// onclick.. delete modals hide class + add hide to left and right container
// modal appears
// onclick of x add modals hide class and delt container's
