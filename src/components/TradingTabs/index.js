import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

function TradingTabs() {
  return (
    <section className="trading-tabs">
      <div className="container">
        <div className="trading-tabs__header">
          <div className="trading-tabs__title">
            <strong>Trading</strong>
          </div>
          <div className="trading-tabs__tabs d-flex">
            <div className="trading-tabs__tab">
              PC / MAC
            </div>
            <div className="trading-tabs__tab">
              Mobile
            </div>
            <div className="trading-tabs__tab">
              Web Trader
            </div>
          </div>
        </div>
        <Tab1 />
        <Tab2 />
        <Tab3 />
      </div>
    </section>
  );
}

export default TradingTabs;
