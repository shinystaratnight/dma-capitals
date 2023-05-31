function InTouch() {
  return (
    <section className="in-touch">
      <div className="container">
        <div className="in-touch__wrapper d-flex align-items-center">
          <div className="in-touch__image col-md-6 px-5 position-relative">
            <img src="/images/in-touch/flat-phone.png" width="100%" className="position-absolute" />
          </div>
          <div className="in-touch__info col-md-6 px-5">
            <h2 className="section__title">Get in touch</h2>
            <p className="section__text">More questions? Contact us today!</p>
            <button className="btn btn-success btn-lg">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InTouch;
