import styled from 'styled-components';

const SideBar = ({
  setSortBy,
  setFilterByCondition,
  setFilterBySize,
  filterByCondition,
  filterBySize,
  setReverseOrder,
}) => {
  // setting filter by size value
  const handleSizeFilter = (value) => {
    if (value.target.checked === true) {
      const sizeArr = filterBySize.concat(value.target.value);
      setFilterBySize(sizeArr);
    } else {
      const sizeArr = [...filterBySize];
      const index = sizeArr.indexOf(value.target.value);
      if (index !== -1) {
        sizeArr.splice(index, 1);
        setFilterBySize(sizeArr);
      }
    }
  };

  // setting filter by truck condition
  const handleConditionFilter = (value) => {
    // if checked, add value to arr, copy, update
    if (value.target.checked === true) {
      const conditionArr = filterByCondition.concat(value.target.value);
      setFilterByCondition(conditionArr);
    } else {
      // if unchecked copy arr, check index of value, delete, update
      const conditionArr = [...filterByCondition];
      const index = conditionArr.indexOf(value.target.value);
      if (index !== -1) {
        conditionArr.splice(index, 1);
        setFilterByCondition(conditionArr);
      }
    }
  };

  // setting sort by miles, year, price
  const handleSort = (value) => {
    setSortBy(value.target.value);
  };

  // setting reverse to true or false
  const handleReverse = (value) => {
    if (value.target.checked === true) {
      setReverseOrder(true);
    } else {
      setReverseOrder(false);
    }
  };

  // reseting filter/sorting state to display full inventory
  const resetSort = () => {
    setFilterBySize([]);
    setFilterByCondition([]);
    setSortBy('');
    setReverseOrder(false);
  };

  return (
    <SideBarContainer>
      <h1>INVENTORY</h1>
      <h5>ALL TRUCKS 0.05% OFF!</h5>
      <ColWrapper>
        <h4>What size truck are you looking for?</h4>
        <HWrapper>
          <Input
            type="checkbox"
            value="Small"
            name="size"
            onChange={handleSizeFilter}
          />
          <span>Big</span>
          <Input
            type="checkbox"
            value="Medium"
            name="size"
            onChange={handleSizeFilter}
          />
          <span>Bigger</span>
          <Input
            type="checkbox"
            value="Large"
            name="size"
            onChange={handleSizeFilter}
          />
          <span>Biggest</span>
        </HWrapper>
      </ColWrapper>
      <ColWrapper>
        <h4>Working Condition:</h4>
        <HWrapper>
          <Input
            type="checkbox"
            value="yes"
            name="working-condition"
            onChange={handleConditionFilter}
          />
          <span>Yes</span>
          <Input
            type="checkbox"
            value="no"
            name="working-condition"
            onChange={handleConditionFilter}
          />
          <span>No</span>
          <Input
            type="checkbox"
            value="debatable"
            name="working-condition"
            onChange={handleConditionFilter}
          />
          <span>Debatable</span>
        </HWrapper>
        <HWrapper>
          <form>
            <label htmlFor="sortBy">Sort By: </label>
            <select name="sortBy" onChange={handleSort}>
              <option value="sortPrice">Price: Low to High</option>
              <option value="year">Year: Old to New</option>
              <option value="sortMiles">Miles: Low to High</option>
            </select>
            <Input type="checkbox" value="reverse" onChange={handleReverse} />
            <span>Reverse Sorting</span>
            <button onClick={() => resetSort}>Show All</button>
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
