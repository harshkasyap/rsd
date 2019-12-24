import React from "react";

import Timer from "../components/timer"
import Layout from "../components/layout";
import Banner from "../components/banner";
import SpeakerSpotlight from "../components/speakerSpotlight";
import SponsorSpotLight from "../components/sponsorSpotlight";

const speakers = require( "../data/speakers" );
const sponsors = require( "../data/sponsors" );
const text = require( "../data/text" );

const Home = ( props ) => {
    const speakerSpotlights = speakers.map(
        ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
    );

    const sponsorSpotlights = sponsors.map(
        ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
    );

    return (
        <Layout>
            <Banner />
            <div className="section color" id="speakers">
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
            <div className="section light" id="agenda">
                <div className="container">
                    <h2>Schedule</h2>
                    <p>Curabitur vestibulum ante maximus maximus consectetur. Morbi elementum nisl nec risus varius volutpat. Sed vehicula, odio at gravida feugiat, urna lectus cursus metus, in molestie lorem purus ut risus. In ac volutpat metus, id iaculis est. Phasellus in nisi pharetra, ultricies est non, accumsan mauris. Suspendisse vel consequat quam. Aenean interdum lectus eget magna pellentesque, at posuere dui egestas. Morbi at lectus nulla. Nunc tristique, leo eget tincidunt iaculis, turpis nulla semper dolor, a molestie justo lacus id nulla.</p>

                    <p>Fusce dignissim quam aliquam orci bibendum dignissim. Nunc vehicula ante non diam consequat, sed mattis nibh dictum. Proin est nisl, placerat at lectus quis, eleifend ultrices nisi. Donec ac interdum lectus, nec consectetur erat. Suspendisse eget libero at nisl consectetur viverra. Quisque sit amet mauris ac nibh rhoncus bibendum id eu sapien. Vestibulum a urna non nisl vehicula hendrerit. Vivamus id odio vel leo consequat rhoncus a in diam. Quisque rhoncus vulputate lacus ac luctus. Curabitur leo orci, mattis pellentesque augue nec, hendrerit faucibus nulla. Vestibulum a efficitur nisl.</p>
                </div>
            </div>
            <div className="section dark" id="sponsors">
                <div className="container">
                    <h2>Sponsors</h2>
                </div>
                { sponsorSpotlights }
            </div>
            <div className="section color" id="register">
                <div className="container">
                    <h2>Register</h2>
                </div>
            </div>
            <div className="section light" id="gallery">
                <div className="container">
                    <h2>Gallery</h2>
                </div>
            </div>
            <div className="section dark" id="contact">
                <div className="container">
                    <h2>Team-RSD-IITP-2020</h2>
                </div>
                { speakerSpotlights }
            </div>
            <div className="section color">
                <div className="container">
                    <p>Join us on 7th, March 2020.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Home;