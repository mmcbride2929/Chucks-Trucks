import { useEffect, useState } from 'react';
import db from '../firebase';
import styled from 'styled-components';
import Truck from '../components/Truck/Truck';
import SideBar from '../components/SideBar/SideBar';
import Ad from '../components/Ad/Ad';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    db.collection('trucks').onSnapshot((snapshot) => {
      setInventory(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <InventoryContainer>
      <LeftContainer>
        <InvWrapper>
          <SideBar />
        </InvWrapper>
        <AdWrapper>
          <Ad />
        </AdWrapper>
      </LeftContainer>
      <RightContainer>
        {inventory.map((truck, index) => {
          return <Truck key={index} truck={truck} />;
        })}
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
  padding: 20px 50px;
  margin-bottom: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  border-radius: 5px;
  text-align: center;
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
`;
