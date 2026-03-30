const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                We Are A <br />
                Web Agency
                <br />
                Crafting Digital Excellence
              </h1>
              <p>
As a forward-thinking agency, we specialize in designing and developing bespoke websites, web services, and online stores for clients of all sizes. By focusing on modern, stylish, and highly functional solutions, we deliver exceptional results that elevate your digital presence. Over the years, we’ve helped 50+ businesses worldwide strengthen their brand, engage audiences, and grow revenue.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="assets/img/home-banner.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
