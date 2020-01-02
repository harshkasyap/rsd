import React from "react";

import Poster from  "../components/poster"
import Register from "../components/register"
import Paper from  "../components/paper"
import Timer from "../components/timer"
import Layout from "../components/layout";
import dictionary from "../data/dictionary";
import Grid from '@material-ui/core/Grid';
import Slideshow from "../components/slider"
import SpeakerSlider from "../components/slider/speakerSlider"
import SponsorSlider from "../components/slider/sponsorSlider"
import TeamSlider from "../components/slider/teamSlider"

const text = require( "../data/text" );

const Home = ( props ) => {
    return (
        <Layout>
            <div className="section light" id="home">
                <Slideshow />
            </div>
            {/* <div className="section color">
                <div>
                    <Timer />
                </div>
            </div> */}
            <div className="section light" id="about">
                <div className="container">
                    <h2>About the event</h2>
                    <p>{text.aboutPara1}</p>
                    <p>{text.aboutPara2}</p>
                    <p>{text.aboutPara3}</p>
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
            <div className="section dark">
                <div className="container">
                    <h2>Director's Message</h2>
                    <p>{text.directorMsg}</p>
                    <p>{text.directorName}</p>
                </div>
            </div>
            <div className="section color" id="speakers">
                <SpeakerSlider />
            </div>
            <div className="section light" id="sponsors">
                <SponsorSlider />
            </div>
            <div className="section dark" id="contact">
                <TeamSlider />
            </div>
            <div className="section color">
                <div className="container">
                    <p>{dictionary.footer}</p>
                </div>
            </div>
        </Layout>
    );
};

export default Home;