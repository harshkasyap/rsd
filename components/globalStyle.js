import React from "react";

export default ( ) => (
    <style jsx global>{ `
        .button {
            margin: 20px;
            border-style: solid;
            border-width: 3px;
            padding: 10px 30px;
            font-size: 1.5rem;
            transition: all 0.35s ease-in-out;
            cursor: pointer;
        }

        .button.light {
            background-color: transparent;
            color: #eee;
            border-color: #eee;
        }

        .button.light:hover {
            background-color: #f1c40f;
            color: #333;
            border-color: #f1c40f;
        }

        .button.dark {
            background-color: transparent;
            color: #333;
            border-color: #333;
        }

        .button.dark:hover {
            background-color: #333;
            color: #eee;
            border-color: #333;
        }

        .speaker-background{
            background: #1F1F1F url(./static/images/testimonials-bg.jpg) no-repeat center center;
        }

        .container {
            width: 80vw;
            margin: auto;
        }

        .reg-event {
            width: 100vw;
            margin-left: 6vw;
        }

        .header {
            position: fixed;
            width: 100%;
            z-index: 10;
        }

       /*  .footer {
            position: fixed;
            width: 100%;
            z-index: 10;
            background-color: #eee;
            color: #333;
        } */

        .main {
            padding-top: 59px;
        }

        .navlink {
            padding: 20px 30px;
            color: #eee;
            text-decoration: none;
            background-color: #333;
            transition: all 0.7s ease-out;
            cursor: pointer;
        }

        .navlink.highlight {
            color: #f1c40f;
        }

        .navlink:hover {
            background-color: #f1c40f;
            transition: all 0.35s ease-out;
            color: #333;
        }

        .section {
            padding: 20px;
        }

        .section.dark {
            background-color: #333;
            color: #eee;
        }

        .section.color {
            background-color: #f1c40f;
            color: #333;
        }

        .section.light {
            background-color: #eee;
            color: #333;
        }

        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            text-align: center;
        }

        h1, h2, h3, h4, h5, h6 {
            margin: 0;
        }

        p {
            font-weight: 300;
            font-size: 1.2rem;
        }

    ` }</style>
);
