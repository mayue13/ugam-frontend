import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { format } from "date-fns";

import "./Skills.scss";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import { urlFor, client } from "../../client";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(expQuery).then((data) => {
      setExperience(data);
    });
  }, []);

  const monthYear = function (date) {
    if (date == null) return "Present";
    else var newDate = new Date(date);

    var year = newDate.getFullYear();
    var month = format(newDate, "LLL");

    return month + " " + year;
  };

  const workExperince = function (joiningDate, releaseDate) {
    joiningDate = new Date(joiningDate);
    releaseDate = releaseDate != null ? new Date(releaseDate) : new Date();

    const date1_time_stamp = joiningDate.getTime();
    const date2_time_stamp = releaseDate.getTime();

    let calc;
    if (date1_time_stamp > date2_time_stamp) {
      calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
      calc = new Date(date2_time_stamp - date1_time_stamp);
    }

    const calcFormatTmp =
      calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
    const calcFormat = calcFormatTmp.split("-");

    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];

    const result =
      (years_passed == 1
        ? years_passed + " " + yrsTxt[0] + " "
        : years_passed > 1
        ? years_passed + " " + yrsTxt[1] + " "
        : "") +
      (months_passed == 1
        ? months_passed + " " + mnthsTxt[0]
        : months_passed > 1
        ? months_passed + " " + mnthsTxt[1] + " "
        : "");

    return result;
  };

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgraoundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.company}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">
                        {monthYear(work.joiningDate)} -{" "}
                        {monthYear(work.releaseDate)} |{" "}
                        {workExperince(work.joiningDate, work.releaseDate)}
                      </p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

//export default AppWrap(Skills, "skills");

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
