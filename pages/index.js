import React from "react";

import Poster from  "../components/poster"
import Register from "../components/register"
import Paper from  "../components/paper"
import Layout from "../components/layout";
import dictionary from "../data/dictionary";
import Slideshow from "../components/slider"
import CultTeamSlider from "../components/slider/cultTeamSlider"
import CoreTeamSlider from "../components/slider/coreTeamSlider"
import OrgTeamSlider from "../components/slider/orgTeamSlider"
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Speakers from '../components/Speakers';
import useScript from '../components/useScript';
import Sponsors from '../components/Sponsors';
import SponsorSlider from '../components/slider/sponsorSlider';

const text = require( "../data/text" );

const Home = ( props ) => {

    useScript('https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    useScript('./static/js/jquery-migrate-1.2.1.min.js');
    useScript('./static/js/jquery.flexslider.js');
    /*useScript('./static/js/waypoints.js');*/
    useScript('./static/js/jquery.fittext.js'); 
    useScript('./static/js/magnific-popup.js');
    useScript('./static/js/init.js');

    return (
        <Layout>
             <div className="section light" id="home">
                <Slideshow />
            </div>
            <div className="section light" id="about">
            <h2>About the event</h2>
                <div className="container">
                    <br />
                    <h4><i className="fa fa-quote-left"></i>{text.aboutPara1}</h4><br />
                    <h4>{text.aboutPara3}<i className="fa fa-quote-right"></i></h4>   
                </div>
            </div>

            <Testimonials data={dictionary.testimonials}/>
            
            <div className="section light" id="register">
                <br />
                <h2>Enroll your participation here!</h2>
                <br />
                <div className="row">
                <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                    <div className="columns portfolio-item">
                        <Poster />
                    </div>
                    <div className="columns portfolio-item">
                        <Register />
                    </div>
                    <div className="columns portfolio-item">
                        <Paper />
                    </div>
                </div>
                </div>
            </div>

            <div className="section light" id="speakers">
                <h2>KEYNOTE SPEAKERS</h2>
                <Speakers />
            </div>
            <div className="section light" id="contact">
                <CultTeamSlider />
                <CoreTeamSlider />
                <OrgTeamSlider />
            </div>
            <div className="section light" id="sponsors">
                <h2>Sponsors and Partners</h2>
                <div id="custom-link">
                    <a target="_blank" href="https://drive.google.com/file/d/1x1ZDfvcWHQLJoWy3YTXWoQOPByt8iwwE/view?usp=sharing" title="SPONSORSHIP / EXHIBITOR PROSPECTUS"><i className="fa fa-download"></i></a>
                </div>
                <SponsorSlider />
                {/* <Sponsors /> */}
            </div>
            <div className="section light" id="footer">
                <Footer />
            </div>
        </Layout>
    );
};

export default Home;