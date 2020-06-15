import React from 'react';
import Heading from '../components/Heading';
import TerminalAboutMe from '../components/TerminalAboutMe';
import Projects from '../components/Projects';
import { GlobalDelayProvider } from '../components/GlobalDelayContext';

export const config = {
  unstable_runtimeJS: false,
};

const Home = () => (
  <GlobalDelayProvider>
    <Heading />
    <TerminalAboutMe />
    <Projects />
  </GlobalDelayProvider>
);

export default Home;
