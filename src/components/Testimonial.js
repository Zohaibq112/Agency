import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import SectionTitle from "./SectionTitle";

const testimonialData = [
  {
    id: 1,
    avatar: "assets/img/avatar-1.jpg",
    name: "Sophia Müller",
    designation: "Founder",
    company: "BrightSolutions GmbH",
    comment:
      "The Web Developers transformed our online presence. Our new website is sleek, fast, and truly reflects our brand.",
  },
  {
    id: 2,
    avatar: "assets/img/avatar-2.jpg",
    name: "Liam O'Connor",
    designation: "Marketing Head",
    company: "Foodify Ltd.",
    comment:
      "Working with The Web Developers was seamless. Their attention to detail and creativity made our project stand out.",
  },
  {
    id: 3,
    avatar: "assets/img/avatar-3.jpg",
    name: "Isabella Rossi",
    designation: "CEO",
    company: "EcoHomes International",
    comment:
      "The Web Developers delivered beyond our expectations. The website is modern, responsive, and exactly what we needed.",
  },
  {
    id: 4,
    avatar: "assets/img/avatar-4.jpg",
    name: "Hiroshi Tanaka",
    designation: "Co-Founder",
    company: "TechNest Global",
    comment:
      "We loved collaborating with The Web Developers. Professional, reliable, and incredibly skilled at bringing our vision to life.",
  },
];

const Testimonial = () => {
  return (
    <section className="section testimonial-section ">
      <div className="container">
        <SectionTitle
          heading={"What Our Clients Say"}
          subHeading={"Testimonials"}
        />
        <Swiper {...sliderProps.testimonial} className="lightbox-gallery">
          {testimonialData.map((testimonial) => (
            <SwiperSlide className="feature-box-03" key={testimonial.id}>
              <div className="feature-img">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left" />
                </div>
                <p>{testimonial.comment}</p>
                <h6>{testimonial.name}</h6>
                <span>
                  {testimonial.designation} at {testimonial.company}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;