function Tab3() {
  return (
    <div className="trading-tab trading-tab-3 d-none">
      <div className="trading-tab__content w-50">
        <h4>
          MetaTrader WebTrader platform
        </h4>
        <p>
          Trade anywhere, any time, without having to download any software. Whether you use a Mac or a PC, 
          you can tap into to the markets via your browser hassle-free, with the WebTrader trading platform.
        </p>
        <div className="trading-tab__actions">
          <button>Start Trading</button>
        </div>
      </div>
      <div className="trading-tab__image w-50">
        <img src="/images/trading-tabs/tab-3.png" width="100%" alt="PC" />
      </div>
    </div>
  );
}

export default Tab3;
