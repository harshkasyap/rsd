import React from 'react';
import { hot } from 'react-hot-loader';

import Slider from './components/Slider';
import Container from './components/Container';

import SponsorSpotLight from "../sponsorSpotlight";
const sponsors = require( "../../data/sponsors" );

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];

const sponsorSpotlights = sponsors.map(
  ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
);

const SponsorSlider = () => (
  <Container>
    <h1>Sponsors And Partners</h1>
    <Slider responsive={responsive}>
      { sponsorSpotlights }
    </Slider>
  </Container>
);

export default hot(module)(SponsorSlider);
