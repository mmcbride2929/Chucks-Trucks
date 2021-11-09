import { useEffect, useState } from 'react';
import db from '../firebase';
import styled from 'styled-components';
import Truck from '../components/Truck/Truck';
import SideBar from '../components/SideBar/SideBar';
import Ad from '../components/Ad/Ad';

const Inventory = () => {
  // setting inventory, filters, and default sortBy
  const [inventory, setInventory] = useState([]); // array of trucks
  const [filterBySize, setFilterBySize] = useState([]);
  const [sortBy, setSortBy] = useState('sortPrice'); //default sort by price
  const [filterByCondition, setFilterByCondition] = useState([]);
  const [reverseOrder, setReverseOrder] = useState(false);

  // fetching inv from firebase and setting the inv state
  useEffect(() => {
    db.collection('trucks').onSnapshot((snapshot) => {
      setInventory(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // cloning our inv arr so that we do not mutate it
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
        <AdWrapper>
          <Ad />
        </AdWrapper>
      </LeftContainer>
      <RightContainer>
        {/* displaying inventory */}

        {/* default - all inventory */}
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
        {/* default - all inventory */}

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
              .map((truck, index) => {
                return <Truck key={index} truck={truck} />;
              })
          : filterByCondition.length > 0 &&
            filterBySize.length === 0 &&
            inventoryCopy
              .filter((truck) => filterByCondition.includes(truck.working))
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

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.6;
`;

const LeftContainer = styled.div`
  flex: 0.4;
  flex-direction: column;
`;

const InvWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: white;
  padding: 20px 80px;
  margin-bottom: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 1100px) {
    width: 90%;
    height: 350px;
    padding: 20px 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 40px;
  }

  @media (max-width: 675px) {
    width: 70%;
    padding: 20px 80px;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  @media (max-width: 550px) {
    height: 320px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    padding: 30px 0px;
  }
`;

const AdWrapper = styled.div`
  width: 100%;
  height: 475px;
  background-color: white;
  padding: 20px 50px;
  margin-bottom: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 1100px) {
    width: 90%;
    padding: 10px 25px;

    img {
      max-width: 275px;
      max-height: 300px;
    }

    .sale-price {
      margin: 5px;
    }
  }

  @media (max-width: 900px) {
    img {
      max-width: 225px;
      max-height: 250px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 450px;
    padding: 5px 20px;

    img {
      max-width: 275px;
      max-height: 300px;
    }
  }

  @media (max-width: 675px) {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 50px;

    img {
      max-width: 350px;
      max-height: 375px;
    }
  }

  @media (max-width: 550px) {
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 80%;
    height: 450px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 20px 50px;

    img {
      max-width: 300px;
      max-height: 325px;
    }
  }

  @media (max-width: 500px) {
    padding: 0px;
    img {
      max-width: 275px;
      max-height: 300px;
    }
  }
  @media (max-width: 375px) {
    height: 425px;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }

    .sale-price {
      margin: 10px;
    }
    img {
      max-width: 240px;
      max-height: 265px;
    }
  }
`;

{
  /* 
   -css inventory sidebar
        -delete truck of the week when it switches to col
        -truck year is too big at 375
        - home button (navbar)
        -maybe will have to have section for (size + sortBy) and (working + sortby) 
        -sorry no trucks fit that criteria   
        -loading state    
        */
}
