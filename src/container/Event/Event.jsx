import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Event.scss";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import { urlFor, client } from "../../client";

function Event() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [events, setEvents] = useState([]);
  const [filterEvent, setFilterEvent] = useState([]);

  useEffect(() => {
    const query = '*[_type == "events"]';
    client.fetch(query).then((data) => {
      setEvents(data);
      setFilterEvent(data);
    });
  }, []);

  const handleEventFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterEvent(events);
      } else {
        setFilterEvent(events.filter((event) => event.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Events <span>Ugam</span> Played
      </h2>

      <div className="app__event-filter">
        {["Ganpati", "Shiv Jayanti", "Corporate", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleEventFilter(item)}
            className={`app__event-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__event-portfolio"
      >
        {filterEvent.map((event, index) => (
          <div className="app__event-item app__flex" key={index}>
            <div className="app__event-img app__flex">
              <img src={urlFor(event.imgUrl)} alt={event.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__event-hover app__flex"
              >
                <a href={event.eventink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.5 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__event-content app__flex">
              <h4 className="bold-text">{event.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {event.description}
              </p>

              <div className="app__event-tag app__flex">
                <p className="p-text">{event.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Event, "app__events"),
  "event",
  "app__primarybg"
);
