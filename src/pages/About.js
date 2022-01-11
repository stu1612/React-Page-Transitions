import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-2.jpeg";
import { motion } from "framer-motion";
import { animTwo, transition } from "../components/animations";

const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animTwo}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Bike 2"
        description="lorem"
        buttonText="Learn more"
      />
    </motion.div>
  );
};

export default About;
