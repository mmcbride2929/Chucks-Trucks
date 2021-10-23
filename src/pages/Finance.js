import styled from 'styled-components';
import Application from '../components/Application/Application';
import FinanaceHeader from '../components/FinanceHeader/FinanaceHeader';

const Finance = () => {
  return (
    <StyledContainer>
      <FinanaceHeader />
      <Application />
    </StyledContainer>
  );
};

export default Finance;

const StyledContainer = styled.div`
  background-color: whitesmoke;
  height: 900px;
  display: flex;
  flex-direction: column;
`;
