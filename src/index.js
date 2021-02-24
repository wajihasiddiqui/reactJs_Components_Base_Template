import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import data from "./Data";

ReactDOM.render(
  <>
    <h1 className="heading_style">Top 5 Netflix Series in 2020</h1>
    {data.map((val, index) => {
      return (
        <Card
          key={val.id}
          imagesrc={val.imagesrc}
          title={val.title}
          seriesName={val.seriesName}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
