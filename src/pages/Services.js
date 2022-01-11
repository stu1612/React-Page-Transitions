import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-3.jpeg";
import { motion } from "framer-motion";
import { animThree, transition } from "../components/animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animThree}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Bike 3"
        description="lorem"
        buttonText="Learn more"
      />
    </motion.div>
  );
};

export default Services;
