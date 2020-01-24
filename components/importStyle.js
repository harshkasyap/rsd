import React from "react";

export default ( ) => (
    <style jsx global>{ 
        `/*
=====================================================================
*   Ceevee v1.0 Default Stylesheet
*   url: styleshout.com
*   03-17-2014
=====================================================================

TOC:
a. Webfonts and Icon fonts
b. Reset
c. Default Styles
   1. Basic
   2. Typography
   3. Links
   4. Images
   5. Buttons
   6. Forms
d. Grid
e. Others
   1. Clearing
   2. Misc

=====================================================================  */

/* ------------------------------------------------------------------ */
/* a. Webfonts and Icon fonts
 ------------------------------------------------------------------ */

 //@import url("fonts.css");
 //@import url("fontello/css/fontello.css");
 //@import url("font-awesome/css/font-awesome.min.css");
 
 /* ------------------------------------------------------------------
 /* b. Reset
       Adapted from:
       Normalize.css - https://github.com/necolas/normalize.css/
       HTML5 Doctor Reset - html5doctor.com/html-5-reset-stylesheet/
 /* ------------------------------------------------------------------ */
 
 html, body, div, span, object, iframe,
 h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 abbr, address, cite, code,
 del, dfn, em, img, ins, kbd, q, samp,
 small, strong, sub, sup, var,
 b, i,
 dl, dt, dd, ol, ul, li,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
 article, aside, canvas, details, figcaption, figure,
 footer-c, header, hgroup, menu, nav, section, summary,
 time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
 }
 
 article,aside,details,figcaption,figure,
 footer-c,header,hgroup,menu,nav,section {
    display: block;
 }
 
 audio,
 canvas,
 video {
    display: inline-block;
 }
 
 audio:not([controls]) {
    display: none;
    height: 0;
 }
 
 [hidden] { display: none; }
 
 code, kbd, pre, samp {
    font-family: monospace, serif;
    font-size: 1em;
 }
 
 pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
 }
 
 blockquote, q { quotes: &#8220 &#8220; }
 
 blockquote:before, blockquote:after,
 q:before, q:after {
    content: '';
    content: none;
 }
 
 ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
 }
 
 mark {
    background-color: #A7F4F6;
    color: #555;
 }
 
 del { text-decoration: line-through; }
 
 abbr[title], dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
 }
 
 table {
    border-collapse: collapse;
    border-spacing: 0;
 }
 
 
 /* ------------------------------------------------------------------ */
 /* c. Default and Basic Styles
       Adapted from:
       Skeleton CSS Framework - http://www.getskeleton.com/
       Typeplate Typographic Starter Kit - http://typeplate.com/
 /* ------------------------------------------------------------------ */
 
 /*  1. Basic  ------------------------------------------------------- */
 
 *,
 *:before,
 *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
 }
 
 html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
 }
 
 body {
    background: #fff;
    font-family: 'opensans-regular', sans-serif;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
     color: #838C95;
 
    -webkit-font-smoothing: antialiased; /* Fix for webkit rendering */
     -webkit-text-size-adjust: 100%;
 }
 
 /*  2. Typography
        Vertical rhythm with leading derived from 6
 --------------------------------------------------------------------- */
 
 h1, h2, h3, h4, h5, h6 {
    color: #313131;
     font-family: 'opensans-bold', sans-serif;
    font-weight: normal;
 }
 h1 a, h2 a, h3 a, h4 a, h5 a, h6 a { font-weight: inherit; }
 h1 { font-size: 38px; line-height: 42px; margin-bottom: 12px; letter-spacing: -1px; }
 h2 { font-size: 28px; line-height: 36px; margin-bottom: 6px; }
 h3 { font-size: 22px; line-height: 30px; margin-bottom: 12px; }
 h4 { font-size: 20px; line-height: 30px; margin-bottom: 6px; }
 h5 { font-size: 18px; line-height: 30px; }
 h6 { font-size: 14px; line-height: 30px; }
 .subheader { }
 
 p { margin: 0 0 1vh 0; }
 p img { margin: 0; }
 p.lead {
    font: 19px/36px 'opensans-light', sans-serif;
    margin-bottom: 18px;
 }
 
 /* for 'em' and 'strong' tags, font-size and line-height should be same with
 the body tag due to rendering problems in some browsers */
 em { font: 15px/30px 'opensans-italic', sans-serif; }
 strong, b { font: 15px/30px 'opensans-bold', sans-serif; }
 small { font-size: 11px; line-height: inherit; }
 
 /*	Blockquotes */
 blockquote {
    margin: 30px 0px;
    padding-left: 40px;
    position: relative;
 }
 blockquote:before {
    content: "\\201C";
    opacity: 0.45;
    font-size: 80px;
    line-height: 0px;
    margin: 0;
    font-family: arial, sans-serif;
 
    position: absolute;
    top:  30px;
     left: 0;
 }
 blockquote p {
    font-family: 'librebaskerville-italic', serif;
    padding: 0;
    font-size: 18px;
    line-height: 36px;
 }
 blockquote cite {
    display: block;
    font-size: 12px;
    font-style: normal;
    line-height: 18px;
 }
 blockquote cite:before { content: "\\2014 \\0020"; }
 blockquote cite a,
 blockquote cite a:visited { color: #8B9798; border: none }
 
 /* ---------------------------------------------------------------------
 /*  Pull Quotes Markup
 /*
     <aside class="pull-quote">
         <blockquote>
             <p></p>
         </blockquote>
      </aside>
 /*
 /* --------------------------------------------------------------------- */
 .pull-quote {
    position: relative;
     padding: 18px 30px 18px 0px;
 }
 .pull-quote:before,
 .pull-quote:after {
     height: 1em;
     opacity: 0.45;
     position: absolute;
     font-size: 80px;
    font-family: Arial, Sans-Serif;
 }
 .pull-quote:before {
     content: "\\201C";
     top:  33px;
     left: 0;
 }
 .pull-quote:after {
     content: '\\201D';
     bottom: -33px;
     right: 0;
 }
 .pull-quote blockquote {
    margin: 0;
 }
 .pull-quote blockquote:before {
    content: none;
 }
 
 /* Abbreviations */
 abbr {
    font-family: 'opensans-bold', sans-serif;
     font-variant: small-caps;
     text-transform: lowercase;
    letter-spacing: .5px;
     color: gray;
 }
 abbr:hover { cursor: help; }
 
 /* drop cap */
 .drop-cap:first-letter {
     float: left;
     margin: 0;
     padding: 14px 6px 0 0;
     font-size: 84px;
     font-family: /* Copperplate */ 'opensans-bold', sans-serif;
    line-height: 60px;
     text-indent: 0;
     background: transparent;
     color: inherit;
 }
 
 hr { border: solid #E3E3E3; border-width: 1px 0 0; clear: both; margin: 11px 0 30px; height: 0; }
 
 
 /*  3. Links  ------------------------------------------------------- */
 
 a, a:visited {
    text-decoration: none;
    outline: 0;
    color: #11ABB0;
 
    -webkit-transition: color .3s ease-in-out;
    -moz-transition: color .3s ease-in-out;
    -o-transition: color .3s ease-in-out;
    transition: color .3s ease-in-out;
 }
 a:hover, a:focus { color: #313131; }
 p a, p a:visited { line-height: inherit; }
 
 
 /*  4. List  --------------------------------------------------------- */
 
 ul, ol { margin-bottom: 24px; margin-top: 12px; }
 ul { list-style: none outside; }
 ol { list-style: decimal; }
 ol, ul.square, ul.circle, ul.disc { margin-left: 30px; }
 ul.square { list-style: square outside; }
 ul.circle { list-style: circle outside; }
 ul.disc { list-style: disc outside; }
 ul ul, ul ol,
 ol ol, ol ul { margin: 6px 0 6px 30px; }
 ul ul li, ul ol li,
 ol ol li, ol ul li { margin-bottom: 6px; }
 li { line-height: 18px; margin-bottom: 12px; }
 ul.large li { }
 li p { }
 
 /* ---------------------------------------------------------------------
 /*  Stats Tab Markup
 
     <ul class="stats-tabs">
         <li><a href="#">[value]<b>[name]</b></a></li>
      </ul>
 
     Extend this object into your markup.
 /*
 /* --------------------------------------------------------------------- */
 .stats-tabs {
    padding: 0;
    margin: 24px 0;
 }
 .stats-tabs li {
     display: inline-block;
     margin: 0 10px 18px 0;
     padding: 0 10px 0 0;
     border-right: 1px solid #ccc;
 }
 .stats-tabs li:last-child {
     margin: 0;
     padding: 0;
     border: none;
 }
 .stats-tabs li a {
     display: inline-block;
     font-size: 22px;
     font-family: 'opensans-bold', sans-serif;
    border: none;
    color: #313131;
 }
 .stats-tabs li a:hover {
    color:#11ABB0;
 }
 .stats-tabs li a b {
     display: block;
     margin: 6px 0 0 0;
     font-size: 13px;
     font-family: 'opensans-regular', sans-serif;
    color: #8B9798;
 }
 
 /* definition list */
 dl { margin: 12px 0; }
 dt { margin: 0; color:#11ABB0; }
 dd { margin: 0 0 0 20px; }
 
 /* Lining Definition Style Markup */
 .lining dt,
 .lining dd {
     display: inline;
     margin: 0;
 }
 .lining dt + dt:before,
 .lining dd + dt:before {
     content: "\A";
     white-space: pre;
 }
 .lining dd + dd:before {
     content: ", ";
 }
 .lining dd:before {
     content: ": ";
     margin-left: -0.2em;
 }
 
 /* Dictionary Definition Style Markup */
 .dictionary-style dt {
     display: inline;
     counter-reset: definitions;
 }
 .dictionary-style dt + dt:before {
     content: ", ";
     margin-left: -0.2em;
 }
 .dictionary-style dd {
     display: block;
     counter-increment: definitions;
 }
 .dictionary-style dd:before {
     content: counter(definitions, decimal) ". ";
 }
 
 /* Pagination */
 .pagination {
    margin: 36px auto;
    text-align: center;
 }
 .pagination ul li {
    display: inline-block;
    margin: 0;
    padding: 0;
 }
 .pagination .page-numbers {
    font: 15px/18px 'opensans-bold', sans-serif;
    display: inline-block;
    padding: 6px 10px;
    margin-right: 3px;
    margin-bottom: 6px;
     color: #6E757C;
     background-color: #E6E8EB;
 
     -webkit-transition: all 200ms ease-in-out;
     -moz-transition: all 200ms ease-in-out;
     -o-transition: all 200ms ease-in-out;
     -ms-transition: all 200ms ease-in-out;
     transition: all 200ms ease-in-out;
 
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
     border-radius: 3px;
 }
 .pagination .page-numbers:hover {
    background: #838A91;
    color: #fff;
 }
 .pagination .current,
 .pagination .current:hover {
    background-color: #11ABB0;
    color: #fff;
 }
 .pagination .inactive,
 .pagination .inactive:hover {
    background-color: #E6E8EB;
     color: #A9ADB2;
 }
 .pagination .prev, .pagination .next {}
 
 /*  5. Images  --------------------------------------------------------- */
 
 img {
    max-width: 100%;
    height: auto;
 }
 img.pull-right { margin: 12px 0px 0px 18px; }
 img.pull-left { margin: 12px 18px 0px 0px; }
 
 /*  6. Buttons  --------------------------------------------------------- */
 
 .button-c,
 .button-c:visited,
 button-c,
 input[type="submit"],
 input[type="reset"],
 input[type="button-c"] {
    font: 16px/30px 'opensans-bold', sans-serif;
    background: #11ABB0;
    display: inline-block;
     text-decoration: none;
    letter-spacing: 0;
    color: #fff;
     padding: 12px 20px;
     margin-bottom: 18px;
    border: none;
    cursor: pointer;
    height: auto;
 
    -webkit-transition: all .2s ease-in-out;
     -moz-transition: all .2s ease-in-out;
     -o-transition: all .2s ease-in-out;
     -ms-transition: all .2s ease-in-out;
     transition: all .2s ease-in-out;
 
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    border-radius: 3px;
 }
 
 .button-c:hover,
 button-c:hover,
 input[type="submit"]:hover,
 input[type="reset"]:hover,
 input[type="button-c"]:hover {
    background: #3d4145;
    color: #fff;
 }
 
 .button-c:active,
 button-c:active,
 input[type="submit"]:active,
 input[type="reset"]:active,
 input[type="button-c"]:active {
    background: #3d4145;
    color: #fff;
 }
 
 .button-c.full-width,
 button-c.full-width,
 input[type="submit"].full-width,
 input[type="reset"].full-width,
 input[type="button-c"].full-width {
     width: 100%;
     padding-left: 0 !important;
     padding-right: 0 !important;
     text-align: center;
 }
 
 /* Fix for odd Mozilla border & padding issues */
 button-c::-moz-focus-inner,
 input::-moz-focus-inner {
     border: 0;
     padding: 0;
 }
 
 
 /*  7. Forms  --------------------------------------------------------- */
 
 form { margin-bottom: 24px; }
 fieldset { margin-bottom: 24px; }
 
 input[type="text"],
 input[type="password"],
 input[type="email"],
 textarea,
 select {
    display: block;
    padding: 18px 15px;
    margin: 0 0 24px 0;
    border: 0;
    outline: none;
    vertical-align: middle;
    min-width: 225px;
     max-width: 100%;
    font-size: 15px;
    line-height: 24px;
     color: #647373;
     background: #D3D9D9;
 
 }
 
 /* select { padding: 0;
    width: 220px;
    } */
 
 input[type="text"]:focus,
 input[type="password"]:focus,
 input[type="email"]:focus,
 textarea:focus {
    color: #B3B7BC;
     background-color: #3d4145;
 }
 
 textarea { min-height: 220px; }
 
 label,
 legend {
    font: 16px/24px 'opensans-bold', sans-serif;
     margin: 12px 0;
    color: #3d4145;
    display: block;
 }
 label span,
 legend span {
     color: #8B9798;
    font: 14px/24px 'opensans-regular', sans-serif;
 }
 
 input[type="checkbox"],
 input[type="radio"] {
     font-size: 15px;
     color: #737373;
 }
 
 input[type="checkbox"] { display: inline; }
 
 /* ------------------------------------------------------------------ */
 /* d. Grid
 ---------------------------------------------------------------------
    gutter = 40px.
 /* ------------------------------------------------------------------ */
 
 /* default
 --------------------------------------------------------------- */
 .row {
    width: 96%;
    max-width: 1020px;
    margin: 0 auto;
 }
 /* fixed width for IE8 */
 .ie .row { width: 1000px ; }
 
 .narrow .row { max-width: 980px; }
 
 .row .row { width: auto; max-width: none; margin: 0 -20px; }
 
 /* row clearing */
 .row:before,
 .row:after {
     content: " ";
     display: table;
 }
 .row:after {
     clear: both;
 }
 
 .column, .columns {
    position: relative;
    padding: 0 20px;
    min-height: 1px;
    float: left;
 }
 .column.centered, .columns.centered  {
     float: none;
     margin: 0 auto;
 }
 
 /* removed gutters */
 .row.collapsed > .column,
 .row.collapsed > .columns,
 .column.collapsed, .columns.collapsed  { padding: 0; }
 
 [class*="column"] + [class*="column"]:last-child { float: right; }
 [class*="column"] + [class*="column"].end { float: right; }
 
 /* column widths */
 .row .one         { width: 8.33333%; }
 .row .two         { width: 16.66667%; }
 .row .three       { width: 25%; }
 .row .four        { width: 33.33333%; }
 .row .five        { width: 41.66667%; }
 .row .six         { width: 50%; }
 .row .seven       { width: 58.33333%; }
 .row .eight       { width: 66.66667%; }
 .row .nine        { width: 75%; }
 .row .ten         { width: 83.33333%; }
 .row .eleven      { width: 91.66667%; }
 .row .twelve      { width: 100%; }
 
 /* Offsets */
 .row .offset-1    { margin-left: 8.33333%; }
 .row .offset-2    { margin-left: 16.66667%; }
 .row .offset-3    { margin-left: 25%; }
 .row .offset-4    { margin-left: 33.33333%; }
 .row .offset-5    { margin-left: 41.66667%; }
 .row .offset-6    { margin-left: 50%; }
 .row .offset-7    { margin-left: 58.33333%; }
 .row .offset-8    { margin-left: 66.66667%; }
 .row .offset-9    { margin-left: 75%; }
 .row .offset-10   { margin-left: 83.33333%; }
 .row .offset-11   { margin-left: 91.66667%; }
 
 /* Push/Pull */
 .row .push-1      { left: 8.33333%; }
 .row .pull-1      { right: 8.33333%; }
 .row .push-2      { left: 16.66667%; 	}
 .row .pull-2      { right: 16.66667%; }
 .row .push-3      { left: 25%; }
 .row .pull-3      { right: 25%;	}
 .row .push-4      { left: 33.33333%; }
 .row .pull-4      { right: 33.33333%; }
 .row .push-5      { left: 41.66667%; }
 .row .pull-5      { right: 41.66667%; }
 .row .push-6      { left: 50%; }
 .row .pull-6      { right: 50%; }
 .row .push-7      { left: 58.33333%; }
 .row .pull-7      { right: 58.33333%; }
 .row .push-8      { left: 66.66667%; 	}
 .row .pull-8      { right: 66.66667%; }
 .row .push-9      { left: 75%; }
 .row .pull-9      { right: 75%; }
 .row .push-10     { left: 83.33333%; }
 .row .pull-10     { right: 83.33333%; }
 .row .push-11     { left: 91.66667%; }
 .row .pull-11     { right: 91.66667%; }
 
 /* block grids
 --------------------------------------------------------------------- */
 .bgrid-sixths [class*="column"]   { width: 16.66667%; }
 .bgrid-quarters [class*="column"] { width: 25%; }
 .bgrid-thirds [class*="column"]   { width: 33.33333%; }
 .bgrid-halves [class*="column"]   { width: 50%; }
 
 [class*="bgrid"] [class*="column"] + [class*="column"]:last-child { float: left; }
 
 /* Left clearing for block grid columns - columns that changes width in
 different screen sizes. Allows columns with different heights to align
 properly.
 --------------------------------------------------------------------- */
 .first { clear: left; }   /* first column in default screen */
 .s-first { clear: none; } /* first column in smaller screens */
 
 /* smaller screens
 --------------------------------------------------------------- */
 @media only screen and (max-width: 900px) {
 
    /* block grids on small screens */
    .s-bgrid-sixths [class*="column"]   { width: 16.66667%; }
    .s-bgrid-quarters [class*="column"] { width: 25%; }
    .s-bgrid-thirds [class*="column"]   { width: 33.33333%; }
    .s-bgrid-halves [class*="column"]   { width: 50%; }
 
    /* block grids left clearing */
    .first { clear: none; }
    .s-first { clear: left; }
 
 }
 
 /* mobile wide/smaller tablets
 --------------------------------------------------------------- */
 @media only screen and (max-width: 767px) {
 
    .row {
        width: 460px;
        margin: 0 auto;
       padding: 0;
     }
    .column, .columns {
        width: auto !important;
        float: none;
        margin-left: 0;
        margin-right: 0;
       padding: 0 30px;
    }
    .row .row { width: auto; max-width: none; margin: 0 -30px; }
 
    [class*="column"] + [class*="column"]:last-child { float: none; }
    [class*="bgrid"] [class*="column"] + [class*="column"]:last-child { float: none; }
 
    /* Offsets */
    .row .offset-1    { margin-left: 0%; }
    .row .offset-2    { margin-left: 0%; }
    .row .offset-3    { margin-left: 0%; }
    .row .offset-4    { margin-left: 0%; }
    .row .offset-5    { margin-left: 0%; }
    .row .offset-6    { margin-left: 0%; }
    .row .offset-7    { margin-left: 0%; }
    .row .offset-8    { margin-left: 0%; }
    .row .offset-9    { margin-left: 0%; }
    .row .offset-10   { margin-left: 0%; }
    .row .offset-11   { margin-left: 0%; }
 }
 
 /* mobile narrow
 --------------------------------------------------------------- */
 @media only screen and (max-width: 460px) {
 
    .row { width: auto; }
 
 }
 
 /* larger screens
 --------------------------------------------------------------- */
 @media screen and (min-width: 1200px) {
 
    .wide .row { max-width: 1180px; }
 
 }
 
 /* ------------------------------------------------------------------ */
 /* e. Others
 /* ------------------------------------------------------------------ */
 
 /*  1. Clearing
     (http://nicolasgallagher.com/micro-clearfix-hack/
 --------------------------------------------------------------------- */
 
 .cf:before,
 .cf:after {
     content: " ";
     display: table;
 }
 .cf:after {
     clear: both;
 }
 
 /*  2. Misc -------------------------------------------------------- */
 
 .remove-bottom { margin-bottom: 0 !important; }
 .half-bottom { margin-bottom: 12px !important; }
 .add-bottom { margin-bottom: 24px !important; }
 .no-border { border: none; }
 
 .text-center  { text-align: center !important; }
 .text-left    { text-align: left !important; }
 .text-right   { text-align: right !important; }
 .pull-left    { float: left !important; }
 .pull-right   { float: right !important; }
 .align-center {
     margin-left: auto !important;
     margin-right: auto !important;
     text-align: center !important;
 } 

 /* ------------------------------------------------------------------ */
/* i. Footer
/* ------------------------------------------------------------------ */

footer-c {
   background: #1F1F1F url(./static/images/back1.jpg) no-repeat center center;
   padding-top: 48px;
   //margin-bottom: 48px;
   color: #303030;
   font-size: 14px;
   text-align: center;
   position: relative;
   size: 100vw;
}

footer-c a, footer-c a:visited { color: #525252; }
footer-c a:hover, footer-c a:focus { color: #fff; }

/* copyright */
footer-c .copyright {
    margin: 0;
    padding: 0;
 }
footer-c .copyright li {
    display: inline-block;
    margin: 0;
    padding: 0;
    line-height: 1vh;
}

footer-c .copyright li h4{
   color: #f1c40f;
}
.ie footer-c .copyright li {
   display: inline;
}
/* footer-c .copyright li:before {
    content: "\\2022";
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    color: #095153;
} */
footer-c .copyright  li:first-child:before {
    display: none;
}

/* social links */
footer-c .social-links {
   margin: 2.5vh 0 0.5vh 0;
   padding: 0;
   font-size: 30px;
}
footer-c .social-links li {
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-left: 1.5vw;
}

footer-c .social-links li a{
   color: #349494;
}

footer-c .social-links li:first-child { margin-left: 0; }

 #custom-link {
   position: relative;
   left: 50%;
   margin-left: -30px;
 }
 #custom-link a p {
   display:none;
 }
 #custom-link a:hover p {
   position: absolute;
   top: -12px;
   left: 7%;
   display:block;
 }
 #custom-link a {
   text-decoration: none;
   border: 0 none;
   display: block;
   width: 60px;
   height: 60px;
   background-color: #525252;
 
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
 
    color: #fff;
    font-size: 21px;
    line-height: 60px;
    border-radius: 100%;
 }

 #custom-link a:hover { background-color: #0F9095; }

/* Go To Top Button */
#go-top {
	position: absolute;
	top: -24px;
   left: 50%;
   margin-left: -30px;
}
#go-top a {
	text-decoration: none;
	border: 0 none;
	display: block;
	width: 60px;
	height: 60px;
	background-color: #525252;

	-webkit-transition: all 0.2s ease-in-out;
   -moz-transition: all 0.2s ease-in-out;
   -o-transition: all 0.2s ease-in-out;
   -ms-transition: all 0.2s ease-in-out;
   transition: all 0.2s ease-in-out;

   color: #fff;
   font-size: 21px;
   line-height: 60px;
 	border-radius: 100%;
}
#go-top a:hover { background-color: #0F9095; }

/* ------------------------------------------------------------------ */
/* e. Portfolio Section
/* ------------------------------------------------------------------ */

#portfolio {
   background: #ebeeee;
   padding-top: 5vh;
   padding-bottom: 60px;
}
#portfolio h1 {
   font: 1.5vw/1.5vw 'opensans-semibold', sans-serif;
   text-transform: uppercase;
   letter-spacing: 1px;
   text-align: center;
   margin-bottom: 48px;
   color: #3f51b5;
}

/* Portfolio Content */
#portfolio-wrapper .columns { margin-bottom: 36px; }
.portfolio-item .item-wrap {
   background: #fff;
   overflow: hidden;
   position: relative;

   -webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
.portfolio-item .item-wrap a {
   display: block;
   cursor: pointer;
}

/* overlay */
.portfolio-item .item-wrap .overlay {
   position: absolute;
   left: 0;
   top: 0;

	opacity: 0;
	-moz-opacity: 0;
	filter:alpha(opacity=0);

   -webkit-transition: opacity 0.3s ease-in-out;
	-moz-transition: opacity 0.3s ease-in-out;
	-o-transition: opacity 0.3s ease-in-out;
	transition: opacity 0.3s ease-in-out;

   background: url(./static/images/overlay-bg.png) repeat;
}
.portfolio-item .item-wrap .link-icon {
   display: block;
   color: #fff;
   height: 30px;
   width: 30px;
   font-size: 18px;
   line-height: 30px;
   text-align: center;

   opacity: 0;
	-moz-opacity: 0;
	filter:alpha(opacity=0);

   -webkit-transition: opacity 0.3s ease-in-out;
	-moz-transition: opacity 0.3s ease-in-out;
	-o-transition: opacity 0.3s ease-in-out;
	transition: opacity 0.3s ease-in-out;

   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -15px;
   margin-top: -15px;
}
.portfolio-item .item-wrap img {
   vertical-align: bottom;
}
.portfolio-item .portfolio-item-meta { padding: 18px }
.portfolio-item .portfolio-item-meta h5 {
   font: 14px/21px 'opensans-bold', sans-serif;
   color: #fff;
}
.portfolio-item .portfolio-item-meta p {
   font: 12px/18px 'opensans-light', sans-serif;
   color: #c6c7c7;
   margin-bottom: 0;
}

/* on hover */
.portfolio-item:hover .overlay {
	opacity: 1;
	-moz-opacity: 1;
	filter:alpha(opacity=100);
}
.portfolio-item:hover .link-icon {
   opacity: 1;
	-moz-opacity: 1;
	filter:alpha(opacity=100);
}

/* primary navigation
--------------------------------------------------------------------- */
#nav-wrap ul, #nav-wrap li, #nav-wrap a {
	 margin: 0;
	 padding: 0;
	 border: none;
	 outline: none;
}

/* nav-wrap */
#nav-wrap {
   font: 12px 'opensans-bold', sans-serif;
   width: 100%;
   text-transform: uppercase;
   letter-spacing: 2.5px;
   margin: 0 auto;
   z-index: 100;
   position: fixed;
   left: 0;
   top: 0;
}
.opaque { background-color: #333; }

/* hide toggle button */
#nav-wrap > a.mobile-btn { display: none; }

ul#nav {
   min-height: 48px;
   width: auto;

   /* center align the menu */
   text-align: center;
}
ul#nav li {
   position: relative;
   list-style: none;
   height: 48px;
   display: inline-block;
}

/* Links */
ul#nav li a {

/* 8px padding top + 8px padding bottom + 32px line-height = 48px */

   display: inline-block;
   padding: 8px 13px;
   line-height: 32px;
	text-decoration: none;
   text-align: left;
   color: #fff;

	-webkit-transition: color .2s ease-in-out;
	-moz-transition: color .2s ease-in-out;
	-o-transition: color .2s ease-in-out;
	-ms-transition: color .2s ease-in-out;
	transition: color .2s ease-in-out;
}

ul#nav li a:active { background-color: transparent !important; }
ul#nav li.current a { color: #F06000; }

/* mobile wide/smaller tablets
---------------------------------------------------------------------- */

@media only screen and (max-width: 767px) {

   /* mobile navigation
   -------------------------------------------------------------------- */
   #nav-wrap {
      font: 12px 'opensans-bold', sans-serif;
      background: transparent !important;
      letter-spacing: 1.5px;  
      width: auto;
      position: fixed;
      top: 0;
      right: 0;
   }
   #nav-wrap > a {
	   width: 48px;
		height: 48px;
		text-align: left;
		background-color: #CC5200;
		position: relative;
      border: none;
      float: right;

      font: 0/0 a;
      text-shadow: none;
      color: transparent;

      position: relative;
      top: 0px;
      right: 30px;
   }

	#nav-wrap > a:before,
   #nav-wrap > a:after {
	   position: absolute;
		border: 2px solid #fff;
		top: 35%;
		left: 25%;
		right: 25%;
		content: '';
	}
   #nav-wrap > a:after { top: 60%; }

   /* toggle buttons */
	#nav-wrap:not( :target ) > a:first-of-type,
	#nav-wrap:target > a:last-of-type  {
	   display: block;
	}

   /* hide menu panel */
   #nav-wrap ul#nav {
      height: auto;
		display: none;
      clear: both;
      width: auto; 
      float: right;     

      position: relative;
      top: 12px;
      right: 0;
   }

   /* display menu panels */
	#nav-wrap:target > ul#nav	{
	   display: block;
      padding: 30px 20px 48px 20px;
      background: #1f2024;
      margin: 0 30px;
      clear: both;
   }

   ul#nav li {
      display: block;
      height: auto;      
      margin: 0 auto; 
      padding: 0 4%;           
      text-align: left;
      border-bottom: 1px solid #2D2E34;
      border-bottom-style: dotted; 
   }
  
   ul#nav li a {  
      display: block;    
      margin: 0;
      padding: 0;      
      margin: 12px 0; 
      line-height: 16px; /* reset line-height from 48px */
      border: none;
   }  
}

 ` }</style>
 );