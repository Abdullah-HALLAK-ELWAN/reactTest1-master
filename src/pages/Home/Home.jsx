import React from "react";
import { withRouter } from "react-router-dom";

import Card from "../../components/Card/Card";

import defaulMovieImage from "../../assests/default_movie.png";

import "./Home.scss";

const Home = ({ history }) => {
  return (
    <div className="homepage">
      <Card
        imageUrl={defaulMovieImage}
        title="Popular Series"
        onClick={() => history.push("/series")}
      />
      <Card
        imageUrl={defaulMovieImage}
        title="Popular Movies"
        onClick={() => history.push("/movies")}
      />
    </div>
  );
};
export default withRouter(Home);
