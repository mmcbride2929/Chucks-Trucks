import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
  //setting state for our navbar
  const [active, setActive] = useState(false);

  // toggle navbar active
  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <Banner>
      <LeftWrapper>
        <ContentWrapper>
          <StyledLink exact to="/">
            <h1 onClick={() => setActive(false)}>Chuck's Trucks!</h1>
          </StyledLink>
        </ContentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <ContentWrapper>
          {/* toggling the navbar / close button */}
          {!active ? (
            <DehazeIcon className="nav-icon" onClick={toggleMenu} />
          ) : (
            <>
              <CloseIcon className="nav-icon" onClick={toggleMenu} />
              <Modal>
                <ModalLink exact to="/">
                  <h3 className="modal-link" onClick={toggleMenu}>
                    Home
                  </h3>
                </ModalLink>
                <ModalLink to="/inventory">
                  <h3 className="modal-link" onClick={toggleMenu}>
                    Inventory
                  </h3>
                </ModalLink>
                <ModalLink to="/chuck">
                  <h3 className="modal-link" onClick={toggleMenu}>
                    Chuck
                  </h3>
                </ModalLink>
                <ModalLink to="/finance">
                  <h3 className="modal-link" onClick={toggleMenu}>
                    Finance
                  </h3>
                </ModalLink>
              </Modal>
            </>
          )}
          <StyledLink exact to="/">
            <h3 onClick={() => setActive(false)} className="nav-link">
              Home
            </h3>
          </StyledLink>
          <StyledLink to="/inventory">
            <h3 onClick={() => setActive(false)} className="nav-link">
              Inventory
            </h3>
          </StyledLink>
          <StyledLink to="/chuck">
            <h3 onClick={() => setActive(false)} className="nav-link">
              Chuck
            </h3>
          </StyledLink>
          <StyledLink to="/finance">
            <h3 onClick={() => setActive(false)} className="nav-link">
              Finance
            </h3>
          </StyledLink>
        </ContentWrapper>
      </RightWrapper>
    </Banner>
  );
};

export default Navbar;

const Banner = styled.div`
  font-family: 'Assistant', sans-serif;
  background-color: whitesmoke;
  height: 60px;
  width: 100%;
  display: flex;
  color: #1b1717;
  align-items: center;

  .hide {
    display: none;
  }
`;

const LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 0.4;
  margin-left: 15px;

  @media (max-width: 500px) {
    flex: 0.6;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: 'ZCOOL KuaiLe', cursive;
    padding: 5px;
    font-weight: bold;
    color: black;
    text-shadow: 1px 2px #bc0607;

    :hover {
      cursor: pointer;
    }
  }

  .nav-icon {
    margin-right: 10px;
    font-size: 1.7rem;
    color: #4d4d4d;

    :hover {
      cursor: pointer;
      color: black;
    }
  }

  @media (max-width: 650px) {
    font-size: 0.75rem;
  }

  @media (max-width: 350px) {
    font-size: 0.7rem;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 110px;
  right: 0px;
  height: 300px;
  width: 100%;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 400px) {
    height: 285px;
  }
`;

const ModalLink = styled(Link)`
  text-decoration: none;
  cursor: default;
  z-index: 2;
  margin: 0 auto;

  .modal-link {
    width: 150px;
    background-color: white;
    color: black;
    border: 1px solid grey;
    margin: 5px auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: default;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.6;
  justify-content: flex-end;
  margin-right: 15px;

  @media (min-width: 801px) {
    .nav-icon {
      display: none;
    }
  }

  @media (max-width: 800px) {
    .nav-link {
      display: none;
    }
  }

  @media (max-width: 500px) {
    flex: 0.4;
    margin-right: 0px;
  }

  h3 {
    margin-left: 20px;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    background-color: #bc0607;
    color: whitesmoke;
    text-align: center;
    width: 100px;
    padding: 6px 0px;
    border-radius: 2px;

    :hover {
      cursor: pointer;
      background-color: #1b1717;
      color: whitesmoke;
    }
  }
`;
