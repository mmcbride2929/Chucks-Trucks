import styled from 'styled-components';
import { useState } from 'react';

const SideBar = () => {
  const [Sticky, setSticky] = useState(false);

  return (
    <SideBarContainer>
      <h1>INVENTORY</h1>
      <h5>ALL TRUCKS 0.05% OFF!</h5>
      <ColWrapper>
        <h4>What size truck are you looking for?</h4>
        <HWrapper>
          <Input type="radio" value="big" name="size" />
          <span>Small</span>
          <Input type="radio" value="bigger" name="size" />
          <span>Medium</span>
          <Input type="radio" value="biggest" name="size" />
          <span>Large</span>
        </HWrapper>
      </ColWrapper>
      <ColWrapper>
        <h4>Working Condition:</h4>
        <HWrapper>
          <Input type="radio" value="yes" name="working-condition" />
          <span>Yes</span>
          <Input type="radio" value="no" name="working-condition" />
          <span>No</span>
          <Input type="radio" value="debatable" name="working-condition" />
          <span>Debatable</span>
        </HWrapper>
        <HWrapper>
          <form>
            <label htmlFor="sortBy">Sort By: </label>
            <select name="sortBy">
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="YearOld">Year: Old to New</option>
              <option value="YearNew">Year: New to Old</option>
              <option value="Mileage">Mileage</option>
            </select>
          </form>
        </HWrapper>
      </ColWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  h1 {
    font-size: 2rem;
    letter-spacing: 0.6px;
  }

  h5 {
    color: #bc0607;
    margin-bottom: 10px;
    font-size: 0.8rem;
    letter-spacing: 0.6px;
    font-weight: 700;
  }
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  h4 {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

const HWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-right: 10px;
    font-weight: 400;
    letter-spacing: 0.1px;
    :hover {
      cursor: pointer;
    }
  }

  form {
    margin: 20px 0;

    label {
      font-weight: 700;
    }
    select {
      outline: none;
      margin: 0 8px;
      padding: 3px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  color: red;
  margin: 5px;
`;
