import React from 'react';
import { hot } from 'react-hot-loader';

import Slider from './components/Slider';
import Container from './components/Container';

import SpeakerSpotlight from "../speakerSpotlight";
const speakers = require( "../../data/speakers" );

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];

const speakerSpotlights = speakers.map(
  ( speaker ) => <SpeakerSpotlight details={ speaker } key={ speaker.id } />,
);

const SpeakerSlider = () => (
  <Container>
    <h1>KEYNOTE Speakers</h1>
    <Slider responsive={responsive}>
      { speakerSpotlights }
    </Slider>
  </Container>
);

export default hot(module)(SpeakerSlider);
