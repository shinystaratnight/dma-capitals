import { useState } from "react";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

function TradingTabs() {
  const [tabNumber, setTabNumber] = useState(0);

  const clickTab = (num) => {
    setTabNumber(num);
  };

  return (
    <section className="trading-tabs">
      <div className="container">
        <div className="trading-tabs__header">
          <div className="trading-tabs__title">
            <strong className="section__subtitle">Trading</strong>
          </div>
          <div className="trading-tabs__tabs d-flex">
            <div className={`trading-tabs__tab ${tabNumber == 0 ? 'active' : ''}`} onClick={() => clickTab(0)}>
              PC / MAC
            </div>
            <div className={`trading-tabs__tab ${tabNumber == 1 ? 'active' : ''}`} onClick={() => clickTab(1)}>
              Mobile
            </div>
            <div className={`trading-tabs__tab ${tabNumber == 2 ? 'active' : ''}`} onClick={() => clickTab(2)}>
              Web Trader
            </div>
          </div>
        </div>
        {tabNumber==0 && <Tab1 />}
        {tabNumber==1 && <Tab2 />}
        {tabNumber==2 && <Tab3 />}
      </div>
    </section>
  );
}

export default TradingTabs;
