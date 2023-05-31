function Tab1() {
  return (
    <div className="trading-tab trading-tab-1 d-flex">
      <div className="trading-tab__content w-50">
        <h4>
          MetaTrader: The #1 tool for traders and investors worldwide
        </h4>
        <p>
          Trade or invest in 8,000+ trading instruments including Forex pairs, CFDs on indices, commodities, 
          cryptocurrencies, shares, ETFs, and bonds, or purchase shares or exchange-traded funds. Available on both Windows and Mac.
        </p>
        <div className="trading-tab__actions">
          <div className="trading-tab__platform" style={{backgroundColor: '#000'}}>
            <img src="/images/trading-tabs/mac-icon.svg" width={14} alt="MAC" />
          </div>
          <div className="trading-tab__platform" style={{backgroundColor: '#000'}}>
            <img src="/images/trading-tabs/windows-icon.svg" width={14} alt="WIN" />
          </div>
          <button>Get Metatrader</button>
        </div>
      </div>
      <div className="trading-tab__image w-50">
        <img src="/images/trading-tabs/tab-1.png" width="100%" alt="PC" />
      </div>
    </div>
  );
}

export default Tab1;
