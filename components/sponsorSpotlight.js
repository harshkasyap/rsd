/* import React from "react";
import PropTypes from 'prop-types'

const SponsorSpotlight = ( { details } ) => (
    <div>
        <div className="sponsor-logo">
            <a target="_blank" rel="noopener noreferrer" href={ details.linkUrl }>
                <img src={ details.logoUrl } alt={ details.name } />
            </a>
        </div>
        <p><strong>{ details.name }</strong></p>
    </div>
);

const { shape, string } = PropTypes;
SponsorSpotlight.propTypes = {
    details: shape( {
        name: string.isRequired,
        logoUrl: string.isRequired,
        linkUrl: string.isRequired,
    } ).isRequired,
};

export default SponsorSpotlight;
 */

import React from "react";
import PropTypes from 'prop-types'
import theme from "../config/theme";

const SponsorSpotlight = ( { details } ) => (
    <div className="speaker-pic">
        <style jsx>{ `
            .speaker-pic {
                display: inline-block;
                width: 25%;
                margin-bottom: 30px;
            }

            .rounded {
                border-radius: 200px;
                height: 200px;
                width: 200px;
                margin: auto;
                position: relative;
                cursor: pointer;
            }

            .speaker-pic img {
                width: 200px;
            }

            .rounded:hover .social {
                opacity: 1;
                transform: translateY( 0 );
            }

            .rounded:hover .overlay {
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
        <div className="rounded">
            <a target="_blank" rel="noopener noreferrer" href={ details.linkUrl }>
                <img src={ details.logoUrl } alt={ details.name } />
                <div className="overlay" />
            </a>
        </div>
        <p><strong>{ details.name }</strong></p>
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
