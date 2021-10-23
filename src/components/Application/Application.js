import styled from 'styled-components';

const Application = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <h1>Chuck's Trucks</h1>
        <h2>Credit Application</h2>
        <form action="submit" className="finance">
          <HWrapper>
            <VWrapper>
              <h3>Applicant Info</h3>
              <LeftContainer>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="employer">Employer / Company Name</label>
                <input type="text" id="employer" />

                <label htmlFor="income">Annual Income</label>
                <input type="text" id="income" />
              </LeftContainer>
            </VWrapper>
            <VWrapper>
              <h3>Loan Details</h3>
              <RightContainer>
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
                  <option value="50000">$50,000</option>
                </select>
                <RadioContainer>
                  <StyledRadio type="radio" value="buy" name="buy" />
                  <span>Buy</span>
                  <StyledRadio type="radio" value="lease" name="lease" />
                  <span>Lease</span>
                </RadioContainer>
              </RightContainer>
            </VWrapper>
          </HWrapper>
        </form>
        <input type="submit" form="finance" className="submit" />
      </FormContainer>
    </FormWrapper>
  );
};

export default Application;

const FormWrapper = styled.div`
  background-color: whitesmoke;
  height: 100%;
  display: flex;
  align-items: center;
`;

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  box-shadow: rgba(28, 30, 31, 0.3) 2px 2px 4px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'ZCOOL KuaiLe', cursive;
    margin-top: 50px;
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
      margin-top: 7px;
      width: 225px;
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
    margin-left: 20px;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    background-color: #bc0607;
    color: whitesmoke;
    width: 100px;
    padding: 10px 0px;
    margin-top: 50px;
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

  label {
    font-weight: 500;
  }
  input {
    background-color: whitesmoke;
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

  .option {
    width: 75px;
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
`;

const StyledRadio = styled.input`
  border: 0px;
  width: 8%;
  height: 1rem;
`;
