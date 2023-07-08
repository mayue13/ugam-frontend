import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper/index";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>About Us</span>
      </h2>

      <div className="details">
        <p>
          Welcome to Ugam Pratisthan, Established in 2017, we are a renowned
          group known for our grand-sized dhol and our commitment to preserving
          the cultural heritage of Ganpati Bappa and Chhatrapati Shivaji
          Maharaj. Our hashtag, #Mothya_Dholach_Pathak, represents our passion
          and dedication to the art of playing the big-sized dhol.
        </p>
        <p>
          Ugam Pratisthan is an organization that specializes in providing
          mesmerizing dhol performances for a range of events and occasions. We
          bring the thundering beats of our dhol to boost the intensity and
          excitement of these important occasions, from the magnificent
          celebrations of Ganapati Utsav to the jubilant sentiments of Ram
          Navami and the remembrance of Chhatrapati Shivaji Maharaj Jayanti, or
          Rajyaabhishek. Our captivating performances captivate audiences and
          leave a lasting impression.
        </p>
        <p>
          Join us at Ugam Pratisthan as we celebrate the spirit of Ganpati Bappa
          and the legacy of Chhatrapati Shivaji Maharaj through the resounding
          beats of our big-sized dhol. Explore our website, connect with us on
          social media, and stay updated with our upcoming performances and
          events. Together, let's create a symphony of love, devotion, and
          celebration with Ugam Pratisthan, the home of the Mothya Dholach
          Pathak.
        </p>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
