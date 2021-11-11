import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

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

  // reseting filter/sorting/checkboxes/inventory with refresh
  const resetSort = () => {};

  return (
    <SideBarContainer>
      <SortByContainer className="sticky">
        <h1>INVENTORY</h1>
        <h5>ALL TRUCKS 0.05% OFF!</h5>
        <ColWrapper>
          <h4>Show Trucks By Size:</h4>
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
              <HWrapper>
                <Input
                  className="reverse"
                  type="checkbox"
                  value="reverse"
                  onChange={handleReverse}
                />
                <span>Reverse Sorting</span>
              </HWrapper>
              <button className="reset" onClick={resetSort}>
                Reset
              </button>
            </form>
          </HWrapper>
        </ColWrapper>
      </SortByContainer>
      <ContactWrapper>
        <h3>
          <LocalShippingIcon />
          Chuck's Trucks
        </h3>
        <h5>Come see our trucks in person!</h5>
        <h6>
          <LocationOnIcon /> 123 Big Truck BLVD. Cleveland, OH
        </h6>
        <p className="hours">Today's Hours: 9:00 AM - 6:00 PM</p>

        <h4 className="sale">GET 1% OFF WITH CODE:</h4>
        <h4 className="code">'QUALITY'</h4>
        <p className="description">
          We've got some awesome new inventory that hasn't been added to our
          site yet! Be the first to take a test drive.
        </p>
        <p className="fine-print">No Driver's License Needed!</p>
      </ContactWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div``;

// Sort By Form
const SortByContainer = styled.div`
  width: 300px;
  height: 335px;
  background-color: white;
  padding: 5px 20px;
  margin-bottom: 40px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  border-radius: 5px;
  text-align: center;

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
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const HWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 10px;
    margin-bottom: 2px;
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
      margin-bottom: 8px;
    }

    :hover {
      cursor: pointer;
    }

    .reset {
      border: none;
      font-size: 0.8rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 0.9px;
      background-color: #bc0607;
      color: whitesmoke;
      text-align: center;
      width: 70px;
      padding: 7px 0px;
      border-radius: 2px;
      margin-top: 5px;

      :hover {
        cursor: pointer;
        background-color: #1b1717;
        color: whitesmoke;
      }
    }
  }

  .reverse {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  margin: 5px;
`;

// Location Section
const ContactWrapper = styled.div`
  width: 300px;
  height: 335px;
  background-color: white;
  padding: 10px 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  border-radius: 5px;
  text-align: center;

  .MuiSvgIcon-root {
    vertical-align: text-bottom;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 3px;

    .MuiSvgIcon-root {
      font-size: 1.5rem;
      margin-right: 10px;
    }
  }

  h5 {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  h6 {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 3px;

    .MuiSvgIcon-root {
      font-size: 1.2rem;
      color: #bc0607;
    }
  }

  .hours {
    font-size: 0.8rem;
    font-weight: 700;
  }

  .sale {
    margin-top: 25px;
  }
  .code {
    font-size: 1.5rem;
    color: #bc0607;
  }

  .description {
    font-size: 0.9rem;
    padding: 5px;
    margin-top: 20px;
    font-weight: 500;
  }

  .fine-print {
    margin-top: 10px;
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
