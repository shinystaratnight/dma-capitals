function Tab2() {
  return (
    <div className="trading-tab trading-tab-2 d-flex">
      <div className="trading-tab__content w-50 pt-5 mt-4 pe-5">
        <h4 className="tab__title text-white">
          Trade with Admirals mobile app
        </h4>
        <p className="section__text text-white w-75">
          Trade on-the-go with the Admirals mobile trading app! You can monitor the markets, access charts, 
          open and close trades and more from your gadget. Available for iOS and Android.
        </p>
        <div className="trading-tab__actions d-flex pt-2">
          <img src="/images/trading-tabs/app_store.svg" width={120} height={40} loading="lazy" alt="MAC" />
          <img src="/images/trading-tabs/google_store.svg" className="ms-2" width={120} height={40} loading="lazy" alt="WIN" />
        </div>
      </div>
      <div className="trading-tab__image w-50 pt-5">
        <img src="/images/trading-tabs/tab-2.png" width="100%" alt="PC" />
      </div>
    </div>
  );
}

export default Tab2;
