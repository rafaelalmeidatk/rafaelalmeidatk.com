import React from "react";
import Head from "next/head";
import Noise from "../components/Noise";
import Heading from "../components/Heading";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Home = () => (
  <>
    <Noise />

    <Heading />
    <AboutMe />
    <Projects />
  </>
);

export default Home;
