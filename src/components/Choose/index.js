function Choose() {
  return (
    <section className="choose">
      <div className="container">
        <h2 className="section__title text-center">Why choose Admirals?</h2>
        <div className="row">
          <div className="col-3">
            <div className="choose__item">
              <img src="/images/choose/location.svg" width={28} loading="lazy" />
              <h3>We are global</h3>
              <p>Get support in your language, with 16 local offices and multilingual client support via phone, email and live chat</p>
            </div>
          </div>
          <div className="col-3">
            <div className="choose__item">
              <img src="/images/choose/broker.svg" width={28} loading="lazy" />
              <h3>We are regulated</h3>
              <p>We are licensed by the world`s top regulators, in the UK, Estonia, Cyprus and Australia</p>
            </div>
          </div>
          <div className="col-3">
            <div className="choose__item">
              <img src="/images/choose/security.svg" width={28} loading="lazy" />
              <h3>Funds are secured</h3>
              <p>All client deposits are kept separate from our own operating funds, plus we offer extra protection in a volatile market</p>
            </div>
          </div>
          <div className="col-3">
            <div className="choose__item">
              <img src="/images/choose/location.svg" width={28} loading="lazy" />
              <h3>Start from €1</h3>
              <p>You can invest in stocks from €1, and start trading from €100</p>
              <button>Invest now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
