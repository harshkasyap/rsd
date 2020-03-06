import React from 'react';
import { hot } from 'react-hot-loader';

import Slider from './components/footer';
import Container from './components/Container';

import SponsorSpotLight from "../sponsorSpotlight";
import dictionary from '../../data/dictionary'

const responsive = [
  { breakPoint: 1280, cardsToShow: 6 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 3 },
  { breakPoint: 260, cardsToShow: 1 },
];

const sponsorSpotlights = dictionary.sponsors.map(
  ( sponsor ) => <SponsorSpotLight details={ sponsor } key={ sponsor.id } />,
);

const SponsorSlider = () => (
  <Container>
    <Slider responsive={responsive}>
      { sponsorSpotlights }
    </Slider>
  </Container>
);

export default hot(module)(SponsorSlider);
