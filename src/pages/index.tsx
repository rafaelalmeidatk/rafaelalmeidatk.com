import React from 'react';
import Heading from '../components/Heading';
import TerminalAboutMe from '../components/TerminalAboutMe';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

export const config = {
  unstable_runtimeJS: false,
};

const Home = () => (
  <>
    <Heading />
    <TerminalAboutMe />
    {/* <AboutMe /> */}
    <Projects />
  </>
);

export default Home;
