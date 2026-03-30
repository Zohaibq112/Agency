import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "FullStack Development",
    icon: "bi bi-code-slash",
    desc: "Building complete web applications from frontend to backend with scalable architecture, secure systems, and modern technologies to deliver reliable and high-performance digital products.",
  },
  {
    id: 2,
    name: "UI/UX & Web Design",
    icon: "bi bi-palette",
    desc: "Designing clean, modern, and user-focused interfaces that enhance usability, strengthen brand identity, and create engaging experiences across all devices and screen sizes.",
  },
  {
    id: 3,
    name: "Web App Development",
    icon: "bi bi-window",
    desc: "Developing secure and scalable web applications tailored to business requirements, ensuring smooth functionality, strong performance, and long-term maintainability.",
  },
  {
    id: 4,
    name: "DevOps Solutions",
    icon: "bi bi-diagram-3",
    desc: "Implementing efficient DevOps practices including CI/CD pipelines, automation, and deployment workflows to improve development speed, reliability, and system stability.",
  },
  {
    id: 5,
    name: "Cloud Infrastructure",
    icon: "bi bi-cloud",
    desc: "Designing and managing cloud-based infrastructure using platforms like AWS and Azure to ensure scalability, security, and reliable performance for modern applications.",
  },
  {
    id: 6,
    name: "Website Monitoring",
    icon: "bi bi-bar-chart",
    desc: "Monitoring website performance, uptime, and system health to quickly detect issues, maintain stability, and ensure consistent performance for users.",
  },
  {
    id: 7,
    name: "Shopify Development",
    icon: "bi bi-bag",
    desc: "Creating and customizing Shopify stores with optimized design, seamless integrations, and scalable functionality to support growing eCommerce businesses.",
  },
  {
    id: 8,
    name: "WordPress Solutions",
    icon: "bi bi-globe",
    desc: "Developing flexible WordPress websites with custom themes, plugin integrations, and optimized performance tailored to business and content needs.",
  },
  {
    id: 9,
    name: "API & System Integrations",
    icon: "bi bi-plug",
    desc: "Integrating third-party services, APIs, and business systems to extend functionality and enable smooth communication between different platforms.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services We Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
