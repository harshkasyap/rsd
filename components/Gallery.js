import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Gallery () {
  return (
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
  <Carousel autoPlay>
    <div>
      <img src="./static/images/gallery/inaug.JPG" height="100%"/>
      <p className="legend">legend</p>
    </div>
    <div>
      <img src="./static/images/gallery/welcome1.JPG" height="100%"/>
      <p className="legend">legend</p>
    </div>
    <div>
      <img src="./static/images/gallery/welcome2.JPG" height="100%"/>
      <p className="legend">legend</p>
    </div>
    <div>
      <img src="./static/images/gallery/winner.jpg" height="100%"/>
      <p className="legend">legend</p>
    </div>
  </Carousel>
  <br></br>
  <br></br>
  <br></br>
  </div>
  )
  };
