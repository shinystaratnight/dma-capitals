function Condition() {
  return (
    <section className="condition">
      <div className="container">
        <div className="condition__wrapper d-flex">
          <div className="condition__contents w-50">
            <h2>Top trading conditions</h2>
            <p>
              Trade our best conditions yet, including some of the market`s most competitive spreads!
            </p>
            <ul className="conditions__list">
              <li>Leverage 1:2 - 1:500</li>
              <li>Forex typical spreads from 0.6 pips (EURUSD), micro lots and fractional shares</li>
              <li>Stocks CFDs — commission-free*</li>
              <li>Free real-time charts, market news and research</li>
              <li>4,000+ CFDs on currencies, energies, metals, indices, stocks & digital currencies</li>
              <li>4,500+ single shares and ETFs</li>
            </ul>
            <div>
              <button>Try free on demo</button>
            </div>
          </div>
          <div className="condition__quotes w-50">
            <div className="condition__quotes__table">
              <div className="condition__table__header d-flex">
                <div className="quote-header">Symbol</div>
                <div className="quote-header">Bid</div>
                <div className="quote-header">Ask</div>
                <div className="quote-header">Spread</div>
              </div>
              <div className="condition__table__body">
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
                <div className="condtion__table__row d-flex">
                  <div className="condition__table__cell">EURUSD</div>
                  <div className="condition__table__cell">15800.28</div>
                  <div className="condition__table__cell">15801.78</div>
                  <div className="condition__table__cell">1.5</div>
                </div>
              </div>
              <div className="condition__table__footer">
                <div>Prices above are indicative only</div>
                <div>Data from Trade.MT5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Condition;
