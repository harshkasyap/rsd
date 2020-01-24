import React, { Component } from 'react';
import ImportStyle from "./importStyle";

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text1}</p>
               <p>{testimonials.text2}</p>
               <p>{testimonials.text3}</p>
               <p>{testimonials.text4}</p>
               <p><h2>{testimonials.text5}</h2></p>
               <p><h2>{testimonials.text6}</h2></p>
               <cite><h3>{testimonials.user}</h3></cite>
               <h3>{testimonials.designation}</h3>
            </blockquote>
         </li>
      })
    }

    return (
      <div>
      <style jsx global>{ `
        /* ------------------------------------------------------------------
        /* g. Testimonials
        /* ------------------------------------------------------------------ */

        #testimonials {
        background: #1F1F1F url(./static/images/back.jpeg) no-repeat center center;
        background-size: cover !important;
            -webkit-background-size: cover !important;
        background-attachment: fixed;

        position: relative;
        min-height: 200px;
        width: 100%;
        overflow: hidden;
        }

        #testimonials .profile-pic {
         position: relative;
         width: 200px;
         height: 200px;
         border-radius: 100%;
       }

        #testimonials .text-container {
        padding-top: 5vh;
        padding-bottom: 5vh;
        padding-left: 10vw;
        padding-right: 10vw;
        }
        #testimonials h1 {
        font: 18px/24px 'opensans-bold', sans-serif;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #fff;
        }
        #testimonials h1 span { display: none; }
        #testimonials .header-col { padding-top: 9px; }
        #testimonials .header-col h1:before {
        font-family: 'FontAwesome';
        content: "\f10d";
            padding-right: 10px;
            font-size: 72px;
        line-height: 72px;
        text-align: left;
        float: left;
        color: #fff;
        }

        /*	Blockquotes */
        #testimonials blockquote {
        margin: 0 0px 30px 0px;
        padding-left: 0;
        position: relative;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, 1);
        }
        #testimonials blockquote:before { content: none; }
        #testimonials blockquote p {
        font-family: 'librebaskerville-italic', serif;
        padding: 0;
        font-size: 24px;
        line-height: 48px;
        color: #fff
        }
        #testimonials blockquote cite {
        display: block;
        font-size: 12px;
        font-style: normal;
        line-height: 18px;
        color: #fff;
        }
        #testimonials blockquote cite:before { content: "\\2014 \\0020"; }
        #testimonials blockquote cite a,
        #testimonials blockquote cite a:visited { color: #8B9798; border: none }
        ` }</style>
      <section id="testimonials">
      <div className="text-container">
         {/* <div className="row"> */}
{/*             <div className="one columns">
               <img className="profile-pic" src={"./static/images/director.jpg"} alt="Director" />
            </div> */}
              <div className="twelve columns flex-container">
                  <img className="profile-pic" src={"./static/images/director.jpg"} alt="Director" /> 
                  <ul className="slides">
                      {testimonials}
                  </ul>
              </div>
            {/* </div> */}
         </div>
   </section>
   </div>
    );
  }
}

export default Testimonials;
