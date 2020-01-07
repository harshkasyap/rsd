import React, { Component } from 'react';
import ImportStyle from "./importStyle";

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
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
        background: #1F1F1F url(./static/images/testimonials-bg.jpg) no-repeat center center;
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
        padding-top: 96px;
        padding-bottom: 66px;
        padding-left: 266px;
        padding-right: 266px;
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
         <div className="row1">
            <div className="two1 columns1">
               <img className="profile-pic" src={"./static/images/director.jpg"} alt="Director" />
            </div>
            <div className="ten1 columns1 flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
   </div>
    );
  }
}

export default Testimonials;
