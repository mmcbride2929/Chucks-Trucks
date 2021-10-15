import styled from 'styled-components';
import AddressBanner from './components/AddressBanner/AddressBanner';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Chuck from './pages/Chuck';
import Finance from './pages/Finance';

function App() {
  return (
    <Router>
      <Page>
        <AddressBanner />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/chuck" component={Chuck} />
          <Route path="/finance" component={Finance} />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;

const Page = styled.div`
  background-color: whitesmoke;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;
