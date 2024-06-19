import React, { useRef } from "react";

import "./App.css";

import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";

import defaultData from "./default_data.json";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "16vh",
  color: "#fff",
  lineHeight: "8vh",
  textAlign: "center",
  background: "#364d79",
};

const makePicker = (
  words: String[],
  ref: React.RefObject<CarouselRef>,
  key: number
) => {
  const content = words.map((w, index) => (
    <div key={index}>
      <h3 style={contentStyle}>{w}</h3>
    </div>
  ));
  return (
    <Carousel arrows infinite={true} ref={ref} key={key}>
      {content}
    </Carousel>
  );
};

const App: React.FC = () => {
  const data = [
    defaultData.adverbial,
    defaultData.verb,
    defaultData.subject,
    defaultData.object,
  ];
  const references = Array(data.length)
    .fill(null)
    .map(() => useRef<CarouselRef>(null));

  const pickers = (() => {
    const pickers = [];
    if (references.length != data.length) {
      throw new Error(
        "internal error - different number of references and data"
      );
    }
    for (let i = 0; i < 4; i++) {
      pickers.push(makePicker(data[i], references[i], i));
    }
    return pickers;
  })();

  const pickRandom = () => {
    for (const ref of references) {
      const maxLen = Math.max(...data.map((l) => l.length));
      const rand = Math.floor(maxLen * Math.random());
      console.log(`rotating ${rand}`);
      for (let i = 0; i < rand; i++) {
        ref.current?.next();
      }
    }
  };

  return (
    <>
      <h1>
        SatzWerkstatt
        <button onClick={pickRandom}>🎲</button>
      </h1>
      <div>{pickers}</div>
    </>
  );
};

export default App;
