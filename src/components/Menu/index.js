function Menu() {
  return (
    <div className="main-menu position-fixed w-100">
      <div className="main-menu__wrapper">
        <div className="menu__header">
          <div className="container">
            <div className="menu__header-wrapper d-flex justify-content-end align-items-center pt-2 pb-2">
              <a href="#" className="menu__header-item">Help Center</a>
              <a href="#" className="menu__header-item">Contact us</a>
              <a href="#" class="btn btn-link text-decoration-none">Login</a>
              <a href="#" class="btn btn-success">Register</a>
            </div>
          </div>
        </div>

        <div className="menu__panel">
          <div className="container">
            <div className="menu__panel-wrapper d-flex justify-content-between align-items-center py-2">
              <div className="logo">
                <a href="/">
                  <img src="/images/logo-dmac.png" height={40} alt="DMG Logo" loading="lazy" />
                </a>
              </div>
              <div className="menu__panel-items d-flex">
                <div className="menu__panel-item">
                  <div className="menu__panel-item__title">
                    <span className="menu__panel-underscore"></span>
                    <a className="menu__panel-item__text">Start Trading</a>
                  </div>
                  <div className="menu__panel-dropdown">
                    <div className="menu__panel-drowdown__wrapper">
                      <ul className="submenu__list">
                        <li className="submenu__list-item">
                          <span></span>
                          Invest in Stocks & ETFs
                        </li>
                        <li className="submenu__list-item">
                          <span></span>
                          Demo Trading Account
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="menu__panel-item">
                  <div className="menu__panel-item__title">
                    <span className="menu__panel-underscore"></span>
                    <a className="menu__panel-item__text">Platforms</a>
                  </div>
                  <div className="menu__panel-dropdown">
                    <div className="menu__panel-drowdown__wrapper">
                      <ul className="submenu__list">
                        <li className="submenu__list-item">
                          <span></span>
                          MetaData 5
                        </li>
                        <li className="submenu__list-item">
                          <span></span>
                          MetaData 4
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="menu__panel-item">
                  <div className="menu__panel-item__title">
                    <span className="menu__panel-underscore"></span>
                    <a className="menu__panel-item__text">Products</a>
                  </div>
                  <div className="menu__panel-dropdown">
                    <div className="menu__panel-drowdown__wrapper">
                      <ul className="submenu__list">
                        <li className="submenu__list-item">
                          <span></span>
                          Forex
                        </li>
                        <li className="submenu__list-item">
                          <span></span>
                          Commodities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="menu__panel-item">
                  <div className="menu__panel-item__title">
                    <span className="menu__panel-underscore"></span>
                    <a className="menu__panel-item__text">Education</a>
                  </div>
                  <div className="menu__panel-dropdown">
                    <div className="menu__panel-drowdown__wrapper">
                      <ul className="submenu__list">
                        <li className="submenu__list-item">
                          <span></span>
                          Forex
                        </li>
                        <li className="submenu__list-item">
                          <span></span>
                          Commodities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="menu__panel-item">
                  <div className="menu__panel-item__title">
                    <span className="menu__panel-underscore"></span>
                    <a className="menu__panel-item__text">Analytics</a>
                  </div>
                  <div className="menu__panel-dropdown">
                    <div className="menu__panel-drowdown__wrapper">
                      <ul className="submenu__list">
                        <li className="submenu__list-item">
                          <span></span>
                          Forex
                        </li>
                        <li className="submenu__list-item">
                          <span></span>
                          Commodities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="menu__panel-item">
                  <div className="menu__panel-item__title">
                    <span className="menu__panel-underscore"></span>
                    <a className="menu__panel-item__text">Partnership</a>
                  </div>
                  <div className="menu__panel-dropdown">
                    <div className="menu__panel-drowdown__wrapper">
                      <ul className="submenu__list">
                        <li className="submenu__list-item">
                          <span></span>
                          Forex
                        </li>
                        <li className="submenu__list-item">
                          <span></span>
                          Commodities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
