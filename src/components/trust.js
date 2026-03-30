import SectionTitle from "./SectionTitle";
import { FaGlobe, FaBolt, FaPalette, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaGlobe />,
    title: "50+ Clients Worldwide",
    desc: "Helping businesses across the globe grow with modern websites.",
  },
  {
    id: 2,
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "Quick turnaround without compromising quality.",
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: "Modern Design",
    desc: "Clean, stylish, and conversion-focused UI.",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Proven Results",
    desc: "We focus on real business growth.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <>
      <section className="section bg-gray">
        <div className="container">

          <SectionTitle heading={"Why Work With Us"} subHeading={"Our Advantage"} />

          {/* Badge */}
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
            </div>
          </div>

          <div className="row g-4">
            {features.map((item) => (
              <div className="col-sm-6 col-lg-3" key={item.id}>
                <div className="portfolio-box feature-box">
                  <div className="feature-content">
                    <div className="feature-icon">{item.icon}</div>
                    <div className="portfolio-info">
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

<style jsx>{`
  .feature-box {
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    border: 2px solid #000; /* structured black border */
    background: #fff; /* white background */
    border-radius: 12px;
  }

  .feature-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    background: #f7af24; /* yellow circle */
    border-radius: 50%;
    color: #000; /* black icon */
    transition: transform 0.25s ease;
  }

  .portfolio-info h6 {
    font-weight: 600;
    margin: 0;
  }

  .portfolio-info p {
    font-size: 14px;
    color: #555;
    margin: 0;
    line-height: 1.5;
  }
`}</style>
    </>
  );
};

export default WhyWorkWithUs;