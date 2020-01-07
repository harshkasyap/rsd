import React from "react";
import PropTypes from 'prop-types'
import theme from "../data/theme";

const SponsorSpotlight = ( { details } ) => (
    <div className="sponsor-pic">
        <style jsx>{ `
            .sponsor-pic {
                display: inline-block;
                width: 25%;
                // margin-bottom: 30px;
            }

            .rounded-sps {
                border-radius: 200px;
                height: 75px;
                width: 75px;
                margin: auto;
                overflow: hidden;
                position: relative;
                cursor: pointer;
            }

            .sponsor-pic img {
                width: 75px;
            }

            .rounded-sps:hover .social {
                opacity: 1;
                transform: translateY( 0 );
            }

            .rounded-sps:hover .overlay {
                opacity: 0.5;
            }

            .social {
                position: absolute;
                margin: auto;
                transition: all 0.2s;
                top: 45%;
                opacity: 0;
                width: 100%;
                transform: translateY( 100px );
            }

            .overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                opacity: 0;
                background-color: ${ theme.primaryColor };
                transition: all 1s;
            }

            .social a {
                margin: 10px;
                border: 1px solid black;
                padding: 5px 7px;
                border-radius: 100%;
                text-decoration: none;
                color: ${ theme.secondaryColor };
            }
        ` }</style>
        <div className="rounded-sps">
            <a target="_blank" rel="noopener noreferrer" href={ details.linkUrl }>
                <img src={ details.logoUrl } alt={ details.name } />
                <div className="overlay" />
            </a>
        </div>{/* 
        <p><strong>{ details.name }</strong></p> */}
    </div>
);

const { shape, string } = PropTypes;
SponsorSpotlight.propTypes = {
    details: shape( {
        name: string.isRequired,
        linkUrl: string.isRequired,
        logoUrl: string.isRequired,
    } ).isRequired,
};

export default SponsorSpotlight;
