function TryDemo() {
  return (
    <section className="try-demo">
      <div className="container">
        <div className="try-demo__wrapper row">
          <div className="try-demo__info col-md-6">
            <h2 className="section__title">Try demo trading</h2>
            <p className="section__text">Not sure how to start? We`ve got you! Start practicing trading with virtual funds on the Admirals demo trading account.</p>
            <button className="btn btn-success btn-lg">Try free on demo</button>
          </div>
          <div className="try-demo__cards col-md-6 d-flex align-items-center">
            <div className="try-demo__cards-item">
              <div className="try-demo__cards-item-image">
                <img src="/images/try-demo/icon-mood-green.svg" width={40} />
              </div>
              <p>No Stress</p>
            </div>
            <div className="try-demo__cards-item centered">
              <div className="try-demo__cards-item-image">
                <img src="/images/try-demo/icon-money-green.svg" width={40} />
              </div>
              <p>No Deposit</p>
            </div>
            <div className="try-demo__cards-item">
              <div className="try-demo__cards-item-image">
                <img src="/images/try-demo/icon-no-cc-green.svg" width={40} />
              </div>
              <p>No Credit card</p>
            </div>
          </div>
        </div>
      </div>

      <picture className="try-demo__bg">
          <source srcset="/images/try-demo/try-demo.png" media="(min-width: 768px)" />
          <source srcset="/images/try-demo/try-demo-bg-mobile.png" media="(max-width: 767px)" />
          <img src="/images/try-demo/try-demo.png" alt="Try demo trading" loading="lazy" width="100%" />
      </picture>
    </section>
  );
}

export default TryDemo;
