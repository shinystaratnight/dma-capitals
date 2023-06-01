function Tab3() {
  return (
    <div className="trading-tab trading-tab-3 d-flex">
      <div className="trading-tab__content w-50 pt-5 mt-4 pe-5">
        <h4 className="tab__title text-white">
          MetaTrader WebTrader platform
        </h4>
        <p className="section__text text-white w-75">
          Trade anywhere, any time, without having to download any software. Whether you use a Mac or a PC, 
          you can tap into to the markets via your browser hassle-free, with the WebTrader trading platform.
        </p>
        <div className="trading-tab__actions d-flex pt-2">
          <button className="btn btn-success">Start Trading</button>
        </div>
      </div>
      <div className="trading-tab__image w-50 pt-5">
        <img src="/images/trading-tabs/tab-3.png" width="100%" alt="PC" />
      </div>
    </div>
  );
}

export default Tab3;
