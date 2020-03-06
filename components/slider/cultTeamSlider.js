import React from 'react';
import { hot } from 'react-hot-loader';

import Slider from './components/Slider';
import Container from './components/Container';

import TeamSpotlight from "../teamSpotlight";
const team = require( "../../data/cultTeam" );

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
  { breakPoint: 260, cardsToShow: 1 },
];

const teamSpotlight = team.map(
  ( member ) => <TeamSpotlight details={ member } key={ member.id } />,
);

const CultTeamSlider = () => (
  <Container>
    <h2>Cultural Evening</h2>
    <br/ >
    <Slider responsive={responsive}>
      { teamSpotlight }
    </Slider>
  </Container>
);

export default hot(module)(CultTeamSlider);
