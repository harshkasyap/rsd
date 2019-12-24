import React from "react";

import Poster from  "../components/poster"
import Register from "../components/register"
import Paper from  "../components/paper"
import Timer from "../components/timer"
import Layout from "../components/layout";
import SpeakerSpotlight from "../components/speakerSpotlight";
import SponsorSpotLight from "../components/sponsorSpotlight";
import TeamSpotlight from "../components/teamSpotlight";
import dictionary from "../data/dictionary";
import Grid from '@material-ui/core/Grid';
import Slideshow from "../components/slider"

const speakers = require( "../data/speakers" );
const sponsors = require( "../data/sponsors" );
const team = require ( "../data/team" );
const text = require( "../data/text" );

const Home = ( props ) => {
    const speakerSpotlights = speakers.map(
        ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
    );

    const teamSpotlight = team.map(
        ( member ) => <TeamSpotlight details={ member } key={ member.id } />,
    );

    const sponsorSpotlights = sponsors.map(
        ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
    );

    return (
        <Layout>
            <Slideshow />
            <div className="section color">
                <div>
                    <Timer />
                </div>
            </div>
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
                <h2>KEYNOTE Speakers</h2>
                <div>
                    { speakerSpotlights }
                </div>
            </div>
            <div className="section light" id="sponsors">
                <div className="container">
                    <h2>Sponsors And Partners</h2>
                </div>
                { sponsorSpotlights }
            </div>
            <div className="section color" id="contact">
                <h2>Team RSD</h2>
                <div className="container">
                { teamSpotlight }
                </div>
            </div>
            <div className="section dark">
                <div className="container">
                    <p>{dictionary.footer}</p>
                </div>
            </div>
        </Layout>
    );
};

export default Home;