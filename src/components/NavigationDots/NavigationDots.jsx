import React from "react";

export default function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "events", "gallary", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgraoundColor: "#313BAC" } : {}}
        ></a>
      ))}
    </div>
  );
}
