import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="./static/images/cover.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="./static/images/paper.jpeg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="./static/images/poster.jpeg" />
      <p className="legend">Legend 2</p>
    </div>
  </Carousel>
);
