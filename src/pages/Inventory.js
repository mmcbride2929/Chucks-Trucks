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

    @media (max-width: 768px) {
      width: 100%;
      height: 450px;
      padding: 5px 20px;

      img {
        max-width: 275px;
        max-height: 300px;
      }
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

    @media (max-width: 500px) {
      padding: 10px 20px;
      img {
        max-width: 275px;
        max-height: 300px;
      }
    }
  }
`;
