import React from "react";
import PropTypes from 'prop-types'
import theme from "../data/theme";

const TeamSpotlight = ( { details } ) => (
    <div className="member-pic">
        <style jsx>{ `
            .member-pic {
                display: inline-block;
                width: 65%;
                margin-bottom: 30px;
            }

            .rounded {
                border-radius: 200px;
                height: 150px;
                width: 150px;
                overflow: hidden;
                margin: auto;
                position: relative;
                cursor: pointer;
            }

            .member-pic img {
                width: 150px;
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
            <a target="_blank" href={details.url} title={details.name}>
                <img src={ details.imageUrl } alt={ details.name } />
            </a>
        </div>
        <p><strong>{ details.name }</strong></p>
        <p>{ details.position }</p>
    </div>

);

const { shape, string } = PropTypes;
TeamSpotlight.propTypes = {
    details: shape( {
        name: string.isRequired,
        position: string.isRequired,
        imageUrl: string.isRequired,
    } ).isRequired,
};

export default TeamSpotlight;
