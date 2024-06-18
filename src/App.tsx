import React from "react";

import "./App.css";

import { Carousel } from "antd";

import defaultData from "./default_data.json";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "150px",
  color: "#fff",
  lineHeight: "140px",
  textAlign: "center",
  background: "#364d79",
};

const Picker = (props: { words: String[] }) => {
  const content = props.words.map((w) => (
    <div>
      <h3 style={contentStyle}>{w}</h3>
    </div>
  ));
  return (
    <Carousel arrows infinite={true}>
      {content}
    </Carousel>
  );
};

const App: React.FC = () => (
  <>
    <h1>SatzWerkstatt</h1>
    <Picker words={defaultData.adverbial} />
    <Picker words={defaultData.verb} />
    <Picker words={defaultData.subject} />
    <Picker words={defaultData.object} />
  </>
);

export default App;
