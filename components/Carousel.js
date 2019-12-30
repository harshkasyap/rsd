import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div>
    <style jsx>{ `
    .carousel {
        height:100vh;
        position: absolute;
    }
        
    .carousel-inner &gt; .item &gt; img {
        height:100vh;
        object-fit: contain;
    }
    ` }</style>
    <br></br>
    <br></br>
    <br></br>
  <Carousel autoPlay>
    <div>
      <img src="./static/images/res1.jpg" height="100%"/>
      <p className="legend">res 1</p>
    </div>
    <div>
      <img src="./static/images/res2.jpg" height="100%"/>
      <p className="legend">res 2</p>
    </div>
    <div>
      <img src="./static/images/res3.jpg" height="100%"/>
      <p className="legend">res 3</p>
    </div>
  </Carousel>
  <br></br>
  <br></br>
  <br></br>
  </div>
);
