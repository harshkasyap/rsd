import React from "react";

import Poster from  "../components/poster"
import Register from "../components/register"
import Paper from  "../components/paper"
import Gallery from "../components/Gallery";
import Layout from "../components/layout";
import dictionary from "../data/dictionary";
import Grid from '@material-ui/core/Grid';
import Slideshow from "../components/slider"
//import SpeakerSlider from "../components/slider/speakerSlider"
import SpeakerSpotlight from "../components/speakerSpotlight";
const speakers = require( "../data/speakers" );
import SponsorSlider from "../components/slider/sponsorSlider"
import TeamSlider from "../components/slider/teamSlider"
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const text = require( "../data/text" );

const Home = ( props ) => {

    const speakerSpotlights = speakers.map(
        ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
    );

    return (
        <Layout>
            <div className="section light" id="home">
                <Slideshow />
            </div>
            <div className="section light" id="about">
                <div className="container">
                    <h2>About the event</h2>
                    <br />
                    <p>{text.aboutPara1}</p>
                    <p>{text.aboutPara2}</p>
                    <p>{text.aboutPara3}</p>
                </div>
            </div>

            <Testimonials data={dictionary.testimonials}/>
            
            <div className="section light" id="register">
                <div className="container">
                    <br />
                    <h2>Enroll your participation here!</h2>
                    <br />

                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <Poster />   
                        </Grid>
                        <Grid item xs={4}>
                            <Register />
                        </Grid>
                        <Grid item xs={4}>
                            <Paper />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="section light" id="speakers">
                <h2>KEYNOTE Speakers</h2>
                <br />
                <div>
                    { speakerSpotlights }
                </div>
            </div>
            <div className="section light" id="gallery">
                <h2>Shades of Previous Events</h2>
                <Gallery />
            </div>
            <div className="section color" id="contact">
                <TeamSlider />
            </div>
            <div className="section light" id="gallery">
                <h2>Sponsors and Partners</h2>
                <br />
                <SponsorSlider />
            </div>
            <Footer />
            {/* <div className="section dark">
                <div className="container">
                    <h2>{dictionary.footer}</h2>
                    <p>Copyright ©2020 All Rights Reserved | Design By RSDP Team</p>
                </div>
            </div> */}
        </Layout>
    );
};

export default Home;