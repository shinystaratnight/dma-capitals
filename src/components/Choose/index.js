function Choose() {
  return (
    <section className="choose">
      <div className="container">
        <h2 className="section__title text-center">Why choose DMA Capitals?</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="choose__item">
              <div className="choose_item-image">
                <img src="/images/choose/location.svg" width={28} loading="lazy" />
              </div>
              <h3 className="section__subtitle">We are global</h3>
              <p className="section__text text-center">Get support in your language, with 16 local offices and multilingual client support via phone, email and live chat</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="choose__item">
              <div className="choose_item-image">
                <img src="/images/choose/broker.svg" width={28} loading="lazy" />
              </div>
              <h3 className="section__subtitle">We are regulated</h3>
              <p className="section__text text-center">We are licensed by the world`s top regulators, in the UK, Estonia, Cyprus and Australia</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="choose__item">
              <div className="choose_item-image">
                <img src="/images/choose/security.svg" width={28} loading="lazy" />
              </div>
              <h3 className="section__subtitle">Funds are secured</h3>
              <p className="section__text text-center">All client deposits are kept separate from our own operating funds, plus we offer extra protection in a volatile market</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="choose__item">
              <div className="choose_item-image">
                <img src="/images/choose/work-green.svg" width={28} loading="lazy" />
              </div>
              <h3 className="section__subtitle">Start from €1</h3>
              <p className="section__text text-center">You can invest in stocks from €1, and start trading from €100</p>
              <button className="btn btn-light">Invest now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
