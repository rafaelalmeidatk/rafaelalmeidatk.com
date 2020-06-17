import React from 'react';
import { GlobalDelayProvider } from '../components/GlobalDelayContext';
import Heading from '../components/Heading';
import TerminalAboutMe from '../components/terminalAboutMe/TerminalAboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export const config = {
  unstable_runtimeJS: false,
};

const Home = () => (
  <GlobalDelayProvider>
    <Heading />
    <TerminalAboutMe />
    <Projects />

    <Footer showAnimation />
  </GlobalDelayProvider>
);

export default Home;
