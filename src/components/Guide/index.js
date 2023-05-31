import GuideItem from "./GuideItem";

function Guide() {
  return (
    <section className="how-works">
      <div className="container">
        <h2>How it works</h2>
        <div className="row">
          <div className="col-4">
            <GuideItem
              active={true}
              counter={1}
              title="Register"
              content="Sign up with your name and email address to start trading"
            />
          </div>
          <div className="col-4">
            <GuideItem
              active={false}
              counter={2}
              title="Fund"
              content="Start investing from €1, and start trading from €100"
            />
          </div>
          <div className="col-4">
            <GuideItem
              active={false}
              counter={3}
              title="Trade"
              content="Log in and start trading more than 8,000 instruments!"
            />
          </div>
        </div>

        <div>
          <button>Sign up for free</button>
        </div>
      </div>
    </section>
  );
}

export default Guide;
