function Tab1() {
  return (
    <div className="trading-tab trading-tab-1 d-flex">
      <div className="trading-tab__content w-50 pt-5 mt-4 pe-5">
        <h4 className="tab__title text-white">
          MetaTrader: The #1 tool for traders and investors worldwide
        </h4>
        <p className="section__text text-white w-75">
          Trade or invest in 8,000+ trading instruments including Forex pairs, CFDs on indices, commodities, 
          cryptocurrencies, shares, ETFs, and bonds, or purchase shares or exchange-traded funds. Available on both Windows and Mac.
        </p>
        <div className="trading-tab__actions d-flex pt-2">
          <div className="trading-tab__platform">
            <img src="/images/trading-tabs/mac-icon.svg" width={14} alt="MAC" />
          </div>
          <div className="trading-tab__platform">
            <img src="/images/trading-tabs/windows-icon.svg" width={14} alt="WIN" />
          </div>
          <button className="btn btn-success ms-2">Get Metatrader</button>
        </div>
      </div>
      <div className="trading-tab__image w-50 pt-5">
        <img src="/images/trading-tabs/tab-1.png" width="100%" alt="PC" />
      </div>
    </div>
  );
}

export default Tab1;
