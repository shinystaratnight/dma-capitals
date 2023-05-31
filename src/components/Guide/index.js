import GuideItem from "./GuideItem";

function Guide() {
  return (
    <section className="how-works py-5 mb-4">
      <div className="container">
        <div className="how-works__wrapper">
          <h2 className="section__title text-center mt-4 mb-5">How it works</h2>
          <div className="row">
            <div className="col-4">
              <div className="guide__item">
                <div className="guide__item-number blue">1</div>
                <div className="guide__item-description">
                  <div className="guide__item-title">Register</div>
                  <div className="guide__item-content">Sign up with your name and email address to start trading</div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="guide__item">
                <div className="guide__item-number dark-green">2</div>
                <div className="guide__item-description">
                  <div className="guide__item-title">Fund</div>
                  <div className="guide__item-content">Start investing from €1, and start trading from €100</div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="guide__item">
                <div className="guide__item-number green">3</div>
                <div className="guide__item-description">
                  <div className="guide__item-title">Trade</div>
                  <div className="guide__item-content">Log in and start trading more than 8,000 instruments!</div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success btn-lg">Sign up for free</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
