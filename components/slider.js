import React from "react";
import Carousel from "./Carousel";
import Dictionary from "../data/dictionary";
import Timer from "./timer"

const Slideshow = () => (
  <div>
    <style jsx>{ `
            .centered-text {
                position: absolute;
                height: 33vh;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }

            h1 {
                color: #dc1731;
                font-size: 5vh;
                margin: 1vh;
            }

            h2 {
              color: #9e2a22;
            }

            h3 {
              color: #f50057;
            }

            h4 {
              color: #6b6565;
            }

            .overlay {
                background: -webkit-radial-gradient(circle, rgba(0,0,0,0.5), #2F2727);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }

    .carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;-moz-transition:all .25s ease-in;-ms-transition:all .25s ease-in;-o-transitio
    n:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{o
    pacity:1}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:16px solid transparent;border-bottom:16px solid t
    ransparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:16px solid #ad1f4e}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:16px solid #ad1f4e}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:0 0;top:50%;margin-top:-13px;font-size:116px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:0px;height:0px;margin-right:6px;white-space:nowrap;overflow:hidden;border:0px solid #ad1f4e;padding:2px}.carousel .thumb:focus{border:0px solid #ccc;outline:0}.carousel .thumb.selected,.carousel .thumb:hover{border:0px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#ad1f4e;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#ad1f4e;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#ad1f4e;border-radius:50%;width:16px;height:16px;cursor:pointer;display:inline-block;margin:0 16px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#ad1f4e}.carousel:hover .slide .legend{opacity:1}
    ` }</style> 

      <Carousel/>
      <div className="overlay" />
      <div className="centered-text">
        {/* <div className="section light"> */}
          <h1>{ Dictionary.event.name }</h1>
          <Timer />
          <h3>{ Dictionary.event.period }</h3>
          <h4>{ Dictionary.event.place }</h4>
        {/* </div> */}
      </div>
  </div>
);

export default Slideshow;