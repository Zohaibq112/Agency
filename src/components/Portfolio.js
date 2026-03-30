import SectionTitle from "./SectionTitle";

const portfolioData = [
  { id: 1, title: "FuelMeals", image: "assets/img/Document1.jpg", website: "https://www.fuelmeals.com/" },
  { id: 2, title: "HEDGEHOUSE", image: "assets/img/Document2.jpg", website: "https://www.hedgehouseusa.com/" },
  { id: 3, title: "WRAY", image: "assets/img/Document3.jpg", website: "https://wray.nyc/" },
  { id: 4, title: "Nufti - NFT", image: "assets/img/portfolio1.png", website: "https://communitymedcare.com/" },
  { id: 5, title: "ANJA UK PHOTOGRAPHY", image: "assets/img/image_original.png", website: "https://www.anjaukphotography.com/" },
  { id: 8, title: "ALTHEAD", image: "assets/img/image2.png", website: "https://www.athlead.com.au/" },
];

const Portfolio = () => {
  return (
    <>
      <section id="work" className="section work-section">
        <div className="container">
          <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
          <div className="row g-4 lightbox-gallery">
            {portfolioData.map((portfolio) => (
              <div className="col-sm-6 col-lg-4" key={portfolio.id}>
                <div className="portfolio-box">
                  <div className="portfolio-img">
                    <a href={portfolio.image} className="gallery-link">
                      <img src={portfolio.image} alt={portfolio.title} />
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h6>{portfolio.title}</h6>
                    {/* Arrow now links to website */}
                    <a
                      href={portfolio.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-link"
                    >
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .portfolio-box {
          overflow: hidden;
          border-radius: 8px;
          background: #fff;
          text-align: center;
        }

        .portfolio-img img {
          width: 100%;
          height: 250px; /* uniform height */
          object-fit: cover;
          display: block;
        }

        .portfolio-info {
          padding: 10px 15px;
        }
      `}</style>
    </>
  );
};

export default Portfolio;