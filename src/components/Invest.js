function Invest() {
  return (
    <div className="invest py-3">
      <div className="container d-flex align-items-center">
        <div className="invest__wrapper row align-items-center">
          <div className="invest__image col-md-6">
            <img src="/images/invest/invest-logos.png" alt="Invest Logo" width="100%" />
          </div>
          <div className="invest__info col-md-6">
            <h2 className="section__title invest__info-title">Global Stock Markets commission-free</h2>
            <h3 className="invest__info-subtitle">Invest from 1 Euro, Trade from 100 Euro</h3>
            <p className="invest__info-desc">
              Hundreds of Stocks & Stock CFDs from various exchanges of the world commission-free! The offer is eligible for Trade.MT4, 
              Trade.MT5, Invest MT5 accounts*.
            </p>

            <div>
              <button className="btn btn-success px-5">Start</button>
            </div>

            <div className="pt-4">
              <span className="invest__terms-apply">
                *
                <a href="#">Terms apply</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
