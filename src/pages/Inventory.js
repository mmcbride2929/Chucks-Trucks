import { useEffect, useState } from 'react';
import db from '../firebase';
import styled from 'styled-components';
import Truck from '../components/Truck/Truck';
import SideBar from '../components/SideBar/SideBar';

const Inventory = () => {
  // setting inventory, filters, and default sortBy
  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState([]); // array of trucks
  const [filterBySize, setFilterBySize] = useState([]);
  const [sortBy, setSortBy] = useState('sortPrice'); //default sort by price
  const [filterByCondition, setFilterByCondition] = useState([]);
  const [reverseOrder, setReverseOrder] = useState(false);

  // fetching inv from firebase and setting the inv state
  useEffect(() => {
    db.collection('trucks').onSnapshot((snapshot) => {
      setInventory(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, []);

  // cloning our inv arr
  const inventoryCopy = [...inventory];

  return (
    <InventoryContainer>
      <LeftContainer>
        <InvWrapper>
          <SideBar
            setFilterBySize={setFilterBySize}
            setSortBy={setSortBy}
            setFilterByCondition={setFilterByCondition}
            filterBySize={filterBySize}
            sortBy={sortBy}
            filterByCondition={filterByCondition}
            setReverseOrder={setReverseOrder}
          />
        </InvWrapper>
      </LeftContainer>
      <RightContainer>
        {/* Display load screen if content isn't fetched yet */}
        {loading && <h1>GETTING TRUCKS!</h1>}
        {/* Display load screen if content isn't fetched yet */}

        {/* displaying inventory */}

        {/* default - display full inventory */}
        {!reverseOrder // if reverse is false, display default inv
          ? filterBySize.length === 0 &&
            filterByCondition.length === 0 &&
            inventoryCopy
              .sort((a, b) => a[sortBy] - b[sortBy])
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })
          : filterBySize.length === 0 && // if reverse is true, reverse & display
            filterByCondition.length === 0 &&
            inventoryCopy
              .sort((a, b) => a[sortBy] - b[sortBy])
              .reverse()
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })}
        {/* default - display full inventory */}

        {/* filter inv by size only */}
        {!reverseOrder
          ? filterBySize.length > 0 && // if filterBySize is populated..
            filterByCondition.length === 0 &&
            inventoryCopy
              .filter((truck) => filterBySize.includes(truck.size))
              .sort((a, b) => a[sortBy] - b[sortBy])
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })
          : filterBySize.length > 0 &&
            filterByCondition.length === 0 &&
            reverseOrder &&
            inventoryCopy
              .filter((truck) => filterBySize.includes(truck.size))
              .sort((a, b) => a[sortBy] - b[sortBy])
              .reverse()
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })}
        {/* filter inv by size only */}

        {/* filter inv by condition only */}
        {!reverseOrder
          ? filterByCondition.length > 0 &&
            filterBySize.length === 0 &&
            inventoryCopy
              .filter((truck) => filterByCondition.includes(truck.working))
              .sort((a, b) => a[sortBy] - b[sortBy])
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })
          : filterByCondition.length > 0 &&
            filterBySize.length === 0 &&
            inventoryCopy
              .filter((truck) => filterByCondition.includes(truck.working))
              .sort((a, b) => a[sortBy] - b[sortBy])
              .reverse()
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })}
        {/* filter inv by condition only */}

        {/* filter/sorting inv by size and condition */}
        {!reverseOrder
          ? filterBySize &&
            filterByCondition &&
            inventoryCopy
              .filter(
                (truck) =>
                  filterByCondition.includes(truck.working) &&
                  filterBySize.includes(truck.size)
              )
              .sort((a, b) => a[sortBy] - b[sortBy])
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })
          : filterBySize &&
            filterByCondition &&
            inventoryCopy
              .filter(
                (truck) =>
                  filterByCondition.includes(truck.working) &&
                  filterBySize.includes(truck.size)
              )
              .sort((a, b) => a[sortBy] - b[sortBy])
              .reverse()
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })}
        {/* filter/sorting inv by size and condition */}

        {/* finished displaying inventory */}
      </RightContainer>
    </InventoryContainer>
  );
};

export default Inventory;

const InventoryContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
  height: 100%;
  width: 100%;

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

// sort by & location card
const LeftContainer = styled.div`
  flex: 0.4;
  flex-direction: column;
`;

// trucks being displayed
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.6;
`;

const InvWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 675px) {
    position: sticky;
    top: 0;
    align-items: flex-start;
  }

  @media (max-width: 675px) {
    position: relative;
    justify-content: center;
  }
`;
