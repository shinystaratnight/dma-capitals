import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import Invest from './components/Invest';
import Trade from './components/Trade';
import Guide from './components/Guide';
import TradingTabs from './components/TradingTabs';
import Condition from './components/Condition';
import Choose from './components/Choose';
import TryDemo from './components/TryDemo';
import InTouch from './components/InTouch';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Banner />
        <Invest />
        <Trade />
        <Guide />
        <TradingTabs />
        <Condition />
        <Choose />
        <TryDemo />
        <InTouch />
      </div>
    </div>
  );
}

export default App;
