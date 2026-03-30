import React from "react";
import SectionTitle from "./SectionTitle";
import { FaSearch, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Audit & Strategy",
    icon: <FaSearch />,
    description:
      "We analyze your ecosystem, uncover conversion gaps, and define a clear strategic direction.",
  },
  {
    id: "02",
    title: "Architecture & Wireframing",
    icon: <FaDraftingCompass />,
    description:
      "We map user journeys and structure before visuals to ensure clarity and conversion.",
  },
  {
    id: "03",
    title: "Build & Integrate",
    icon: <FaCode />,
    description:
      "We develop and connect all systems into one seamless, scalable experience.",
  },
  {
    id: "04",
    title: "Test & Launch",
    icon: <FaRocket />,
    description:
      "We optimize performance, test thoroughly, and launch with precision.",
  },
];

export default function Process() {
  return (
    <>
      <section id="process" className="section">
        <div className="container">
          <SectionTitle
            heading={"How We Build Sites That Actually Work"}
            subHeading={"The Method"}
          />

          <div className="row">
  {steps.map((step) => (
    <div
      className="col-sm-6 col-lg-6"
      key={step.id}
      style={{ padding: "12px" }} // added gap between cards
    >
      <div className="portfolio-box process-box">
        {/* Icon (like image area) */}
        <div className="process-icon">{step.icon}</div>

        <div className="portfolio-info">
          <span className="process-number">{step.id}</span>
          <h6>{step.title}</h6>
          <p>{step.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <style jsx>{`
        .process-box {
          border-radius: 8px;
          background: #fff;
          padding: 25px;
          height: 100%;
          transition: all 0.25s ease;
        }

        /* Icon area acts like image */
        .process-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: #f7af24; /* updated color */
          border-radius: 50%; /* circle */
          color: #000; /* icon color */
        }

        .portfolio-info {
          text-align: left;
          padding: 0;
        }

        .process-number {
          font-size: 11px;
          color: #999;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 5px;
        }

        .portfolio-info h6 {
          font-weight: 600;
          margin-bottom: 6px;
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
}