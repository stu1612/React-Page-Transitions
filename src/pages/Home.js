import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-1.jpeg";
import { motion } from "framer-motion";
import { animOne, transition } from "../components/animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Bike 1"
        description="lorem"
        buttonText="Learn more"
      />
    </motion.div>
  );
};

export default Home;
