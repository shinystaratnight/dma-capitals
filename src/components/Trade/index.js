import TradeItem from "./TradeItem";

function Trade() {
  return (
    <div className="trade py-5">
      <div className="container">
        <div className="trade__wrapper">
          <h2 className="section__title text-center">Trade and invest in 8,000+ markets today</h2>
          <div className="row">
            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-forex.svg"
                title="Forex"
                content="80 CFDs on currency pairs"
              />
            </div>
            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-indices.svg"
                title="Indices"
                content="43 Indices CFDs, including cash CFDs and Index Futures"
              />
            </div>
            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-share.svg"
                title="Stocks"
                content="3000+ Share CFDs, as well as the ability to invest in thousands of shares"
              />
            </div>

            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-commodities.svg"
                title="Commodities"
                content="CFDs on metals, energies and agriculture commodities"
              />
            </div>
            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-bonds.svg"
                title="Bonds"
                content="US Treasuries and Germany Bund CFDs"
              />
            </div>
            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-ETFs.svg"
                title="ETFs"
                content="370+ ETF CFDs, plus hundreds of ETFs available through Invest.MT5"
              />
            </div>

            <div className="col-md-4 my-3">
              <TradeItem
                imgSrc="/images/trade/icon-crypto.svg"
                title="Cryptocurrencies"
                content="CFDs on Bitcoin, Dash, Ether, Litecoin, Monero and more"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
