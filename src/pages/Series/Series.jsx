import React from "react";

import Card from "../../components/Card/Card";

import data from "../../data/sample.json";

import "./Series.scss";

const Series = () => {
  return (
    <div className="series">
      {data.entries
        .filter((e) => e.releaseYear >= 2010 && e.programType === "series")
        .sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        })
        .slice(0, 21)
        .map((elem) => {
          return (
            <Card imageUrl={elem.images["Poster Art"].url} title={elem.title} />
          );
        })}
    </div>
  );
};
export default Series;
