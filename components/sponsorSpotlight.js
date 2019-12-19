import React from "react";
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
