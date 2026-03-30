import { useState } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { id: 1, label: "Phone", value: "+923105319501", icon: "fas fa-phone-alt" },
  { id: 2, label: "Mail", value: "zohaib@thewebdevelopers.site", icon: "fas fa-envelope" },
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // For thank you animation

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  // Manual submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formID", "260872657720059");
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const response = await fetch("https://submit.jotform.com/submit/260872657720059", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setIsSubmitted(true); // Show thank you
        setFormData({});
        setStep(1);
      } else {
        alert("Submission failed. Try again!");
      }
    } catch (error) {
      console.error(error);
      alert("Submission error. Check console.");
    }
  };

  return (
    <section id="contactus" className="section contactus-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Let's Discuss Your Project"} subHeading={"Contact"} />

        <div className="row gx-5">
          {/* FORM or THANK YOU */}
          <div className="col-lg-7 col-md-12">
            <div className="form-card">
              {!isSubmitted ? (
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                  <input type="hidden" name="formID" value="260872657720059" />

                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="step">
                      <input
                        name="q2_q2_fullname0[first]"
                        placeholder="First Name *"
                        required
                        className="theme-input"
                        value={formData["q2_q2_fullname0[first]"] || ""}
                        onChange={handleChange}
                      />
                      <input
                        name="q2_q2_fullname0[last]"
                        placeholder="Last Name *"
                        required
                        className="theme-input"
                        value={formData["q2_q2_fullname0[last]"] || ""}
                        onChange={handleChange}
                      />
                      <input
                        name="q3_q3_email1"
                        type="email"
                        placeholder="Email *"
                        required
                        className="theme-input"
                        value={formData.q3_q3_email1 || ""}
                        onChange={handleChange}
                      />
                      <input
                        name="q4_q4_phone2[full]"
                        placeholder="WhatsApp Number"
                        className="theme-input"
                        value={formData["q4_q4_phone2[full]"] || ""}
                        onChange={handleChange}
                      />
                      <select
                        name="q5_q5_radio3"
                        required
                        className="theme-input"
                        value={formData.q5_q5_radio3 || ""}
                        onChange={handleChange}
                      >
                        <option value="">Select Project Type</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Ecommerce Store">Ecommerce Store</option>
                        <option value="SaaS / Web App">SaaS / Web App</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Redesign Existing Website">Redesign Existing Website</option>
                      </select>

                      <div className="btn-group">
                        <button type="button" className="px-btn" onClick={nextStep}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="step">
                      <input
                        name="q48_purpose"
                        placeholder="Purpose of the website"
                        className="theme-input"
                        value={formData.q48_purpose || ""}
                        onChange={handleChange}
                      />
                      <select
                        name="q38_numberOf38"
                        className="theme-input"
                        value={formData.q38_numberOf38 || ""}
                        onChange={handleChange}
                      >
                        <option value="">Number of Products</option>
                        <option value="1-10">1-10</option>
                        <option value="10-50">10-50</option>
                        <option value="50+">50+</option>
                      </select>
                      <select
                        name="q39_areYour"
                        className="theme-input"
                        value={formData.q39_areYour || ""}
                        onChange={handleChange}
                      >
                        <option value="">Are your products ready?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <input
                        name="q40_paymentMethods"
                        placeholder="Payment methods needed"
                        className="theme-input"
                        value={formData.q40_paymentMethods || ""}
                        onChange={handleChange}
                      />
                      <input
                        name="q41_shippingRegions"
                        placeholder="Shipping regions"
                        className="theme-input"
                        value={formData.q41_shippingRegions || ""}
                        onChange={handleChange}
                      />
                      <div className="btn-group">
                        <button type="button" className="px-btn" onClick={prevStep}>
                          Back
                        </button>
                        <button type="button" className="px-btn" onClick={nextStep}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <div className="step">
                      <select
                        name="q6_q6_dropdown4"
                        required
                        className="theme-input"
                        value={formData.q6_q6_dropdown4 || ""}
                        onChange={handleChange}
                      >
                        <option value="">Budget Range *</option>
                        <option value="$500–$1k">$500–$1k</option>
                        <option value="$1k–$3k">$1k–$3k</option>
                        <option value="$3k+">$3k+</option>
                      </select>
                      <select
                        name="q7_q7_dropdown5"
                        required
                        className="theme-input"
                        value={formData.q7_q7_dropdown5 || ""}
                        onChange={handleChange}
                      >
                        <option value="">Timeline *</option>
                        <option value="ASAP">ASAP</option>
                        <option value="2–4 weeks">2–4 weeks</option>
                        <option value="1–2 months">1–2 months</option>
                      </select>
                      <textarea
                        name="q8_q8_textarea6"
                        placeholder="Detailed project description"
                        required
                        className="theme-input textarea"
                        value={formData.q8_q8_textarea6 || ""}
                        onChange={handleChange}
                      />
                      <input
                        type="file"
                        name="q36_optionalFileUpload"
                        className="theme-input"
                        onChange={handleChange}
                      />
                      <div className="btn-group">
                        <button type="button" className="px-btn" onClick={prevStep}>
                          Back
                        </button>
                        <button type="submit" className="px-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                <div className="thankyou-container">
                  <div className="checkmark">&#10004;</div>
                  <h2>Thank You!</h2>
                  <p>Your project details have been submitted successfully.</p>
                </div>
              )}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="col-lg-5 col-md-12 pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((c) => (
                <li key={c.id} className="contact-info-item">
                  <div className="contact-icon">
                    <i className={c.icon} />
                  </div>
                  <div className="contact-text">
                    <h5>{c.label}</h5>
                    <p>{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img src="assets/img/footer.png" className="footer-img" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-card {
          background: #fff;
          border: 2px solid #000;
          border-radius: 12px;
          padding: 50px 35px;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #000;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .textarea {
          min-height: 120px;
        }
        .px-btn {
          padding: 14px 35px;
          border-radius: 30px;
          background: #5c64cf;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        .btn-group {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .thankyou-container {
          text-align: center;
          animation: fadeIn 1s ease-in-out;
        }
        .checkmark {
          font-size: 80px;
          color: #5c64cf;
          animation: pop 0.5s ease forwards;
        }
        @keyframes pop {
          0% { transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Contact;