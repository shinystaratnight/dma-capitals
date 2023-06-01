import ConditionItem from "./ConditionItem";

function Condition() {
  return (
    <section className="condition">
      <div className="container">
        <div className="condition__wrapper d-flex">
          <div className="condition__contents w-50 px-5">
            <h2 className="section__title">Top trading conditions</h2>
            <p className="section__text">
              Trade our best conditions yet, including some of the market`s most competitive spreads!
            </p>
            <ul className="conditions__list">
              <ConditionItem
                content="Leverage 1:2 - 1:500"
              />
              <ConditionItem
                content="Forex typical spreads from 0.6 pips (EURUSD), micro lots and fractional shares"
              />
              <ConditionItem
                content="Stocks CFDs — commission-free*"
              />
              <ConditionItem
                content="Free real-time charts, market news and research"
              />
              <ConditionItem
                content="4,000+ CFDs on currencies, energies, metals, indices, stocks & digital currencies"
              />
              <ConditionItem
                content="4,500+ single shares and ETFs"
              />
            </ul>
            <div className="pt-3">
              <button className="btn btn-success">Try free on demo</button>
            </div>
          </div>
          <div className="condition__quotes w-50 px-5">
            <div className="condition__quotes__table mx-4">
              <div className="condition__table__header d-flex">
                <div className="quote-header">Symbol</div>
                <div className="quote-header">Bid</div>
                <div className="quote-header">Ask</div>
                <div className="quote-header">Spread</div>
              </div>
              <div className="condition__table__body">
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-up.svg" className="state-arrow" />
                    <a href="#">[DAX40]</a>
                  </div>
                  <div className="quote-cell">15719.13</div>
                  <div className="quote-cell">15722.63</div>
                  <div className="quote-cell">5</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-down.svg" className="state-arrow" />
                    <a href="#">EURUSD</a>
                  </div>
                  <div className="quote-cell">1.06896</div>
                  <div className="quote-cell">1.06890</div>
                  <div className="quote-cell">0.00006</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-up.svg" className="state-arrow" />
                    <a href="#">GBPUSD</a>
                  </div>
                  <div className="quote-cell">1.24366</div>
                  <div className="quote-cell">1.24387</div>
                  <div className="quote-cell">0.00013</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-down.svg" className="state-arrow" />
                    <a href="#">EURUSD</a>
                  </div>
                  <div className="quote-cell">1.06896</div>
                  <div className="quote-cell">1.06890</div>
                  <div className="quote-cell">0.00006</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-up.svg" className="state-arrow" />
                    <a href="#">GBPUSD</a>
                  </div>
                  <div className="quote-cell">1.24366</div>
                  <div className="quote-cell">1.24387</div>
                  <div className="quote-cell">0.00013</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-down.svg" className="state-arrow" />
                    <a href="#">EURUSD</a>
                  </div>
                  <div className="quote-cell">1.06896</div>
                  <div className="quote-cell">1.06890</div>
                  <div className="quote-cell">0.00006</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-up.svg" className="state-arrow" />
                    <a href="#">GBPUSD</a>
                  </div>
                  <div className="quote-cell">1.24366</div>
                  <div className="quote-cell">1.24387</div>
                  <div className="quote-cell">0.00013</div>
                </div>
                <div className="quote-row d-flex">
                  <div className="quote-cell">
                    <img src="/images/condition/arrow-down.svg" className="state-arrow" />
                    <a href="#">EURUSD</a>
                  </div>
                  <div className="quote-cell">1.06896</div>
                  <div className="quote-cell">1.06890</div>
                  <div className="quote-cell">0.00006</div>
                </div>
              </div>
              <div className="condition__table__footer">
                <span className="quote__text">Prices above are indicative only</span>
                <div>
                  <span className="quote__text">Data from Trade.MT5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Condition;
