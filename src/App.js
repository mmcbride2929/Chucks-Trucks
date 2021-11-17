import styled from 'styled-components';
import AddressBanner from './components/AddressBanner/AddressBanner';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Chuck from './pages/Chuck';
import Finance from './pages/Finance';
import Footer from './components/Footer/Footer';

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
        <Footer />
      </Page>
    </Router>
  );
}

export default App;

const Page = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;
