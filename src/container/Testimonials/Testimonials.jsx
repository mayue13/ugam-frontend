import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import {BsLinkedin} from 'react-icons/bs';

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper/index";

import "./Testimonials.scss";

function Testimonials() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const queryBrand = '*[_type == "brands"]';
    const queryTestimonials = '*[_type == "testimonials"]';

    client.fetch(queryBrand).then((data) => {
      setBrands(data);
    });

    client.fetch(queryTestimonials).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testMo = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testMo.imgurl)}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testMo.feedback}</p>
              <div>
                <h4 className="bold-text"> {testMo.name} &nbsp;&nbsp;
                  <span>
                  <a href={testMo.linkedInUrl} target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>            
                  </span>
                </h4>
                <h5 className="p-text">
                  {testMo.designation} @{testMo.company}
                </h5>
              </div>
            </div>
          </div>

          {console.log(testimonials.length)}
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

//export default Testimonials;

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
