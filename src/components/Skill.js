import SectionTitle from "./SectionTitle";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJenkins,
  FaShopify,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiSelenium,
  SiTypescript,
} from "react-icons/si";

const skillsData = [
  { id: 1, name: "HTML", icon: FaHtml5 },
  { id: 2, name: "CSS", icon: FaCss3Alt },
  { id: 3, name: "JavaScript", icon: FaJs },
  { id: 4, name: "React.js", icon: FaReact },
  { id: 5, name: "Next.js", icon: SiNextdotjs },
  { id: 6, name: "Node.js", icon: FaNodeJs },
  { id: 7, name: "Express.js", icon: SiExpress },
  { id: 8, name: "MongoDB", icon: SiMongodb },
  { id: 9, name: "SQL", icon: SiMysql },
  { id: 10, name: "TypeScript", icon: SiTypescript },
  { id: 11, name: "Shopify", icon: FaShopify },
  { id: 12, name: "Docker", icon: FaDocker },
  { id: 13, name: "Kubernetes", icon: SiKubernetes },
  { id: 14, name: "Jenkins", icon: FaJenkins },
  { id: 15, name: "Selenium", icon: SiSelenium },
];

// 🔥 split into 3 rows evenly
const splitIntoRows = (arr, rowsCount) => {
  const rows = Array.from({ length: rowsCount }, () => []);
  arr.forEach((item, index) => {
    rows[index % rowsCount].push(item);
  });
  return rows;
};

const Skill = () => {
  const rows = splitIntoRows(skillsData, 3);

  return (
    <section className="skill-section bg-gray" id="skills" >
      <div className="container">
<SectionTitle heading={"Our Skills"} subHeading={"Skills"} />
        {/* TEXT */}
        

        {/* SKILLS */}
        <div className="skills-wrapper">
          {rows.map((row, index) => (
            <div key={index} className="slider">
              <div
                className={`track ${
                  index % 2 === 0 ? "move-right" : "move-left"
                }`}
              >
                {[...row, ...row].map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div className="card" key={i}>
                      <Icon size={38} />
                      <h6>{skill.name}</h6>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .slider {
          overflow: hidden;
          width: 100%;
        }

        .track {
          display: flex;
          gap: 20px;
        }

        /* ✅ 4 CARDS PER ROW */
        .card {
          flex: 0 0 calc(25% - 15px);
          height: 140px;
          border-radius: 16px;
          border: 2px solid #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 600;
        }

        .card h6 {
          margin-top: 10px;
        }

        /* 🔥 STEP ANIMATION */
        .move-right {
          animation: slideRight 10s infinite;
        }

        .move-left {
          animation: slideLeft 10s infinite;
        }

        @keyframes slideRight {
          0% { transform: translateX(0); }
          30% { transform: translateX(0); }         /* pause */
          50% { transform: translateX(-25%); }      /* move 1 card */
          80% { transform: translateX(-25%); }      /* pause */
          100% { transform: translateX(0); }
        }

        @keyframes slideLeft {
          0% { transform: translateX(-25%); }
          30% { transform: translateX(-25%); }
          50% { transform: translateX(0); }
          80% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
};

export default Skill;