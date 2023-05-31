function TryDemo() {
  return (
    <section className="try-demo">
      <div className="container">
        <div className="try-domo__wrapper d-flex">
          <div className="try-demo__info w-50">
            <h2 className="section__title">Try demo trading</h2>
            <p>Not sure how to start? We`ve got you! Start practicing trading with virtual funds on the Admirals demo trading account.</p>
            <button>Try free on demo</button>
          </div>
          <div className="try-demo__cards w-50 d-flex">
            <div className="try-demo__cards-item">
              <img src="/images/try-demo/icon-mood-green.svg" width={40} />
              <p>No Stress</p>
            </div>
            <div className="try-demo__cards-item centered">
              <img src="/images/try-demo/icon-money-green.svg" width={40} />
              <p>No Deposit</p>
            </div>
            <div className="try-demo__cards-item">
              <img src="/images/try-demo/icon-no-cc-green.svg" width={40} />
              <p>No Credit card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryDemo;
