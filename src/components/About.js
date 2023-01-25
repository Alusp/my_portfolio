import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';
import ProfileImg from '../images/profile.jpg';

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                Hello! my name is Alusine Jalloh and I am a Full-Stack developer
                with a passion for back-end development, and accessibility. I
                have a Bsc. honours degree in Information Technology which
                enabled me to learn many tech stacks. I love coding specifically because
                I love the puzzle-solving aspect of it.
                {' '}
              </p>
              <br />
              <p>
                {' '}
                I am a Passionate Software Developer that is able to use my own
                initiative and I am very comfortable working on web and mobile
                applications. I have been developing professionally for 5 years
                but have been tinkering since I was a kid. I started in tech
                with an internship, freelance services and part time positions
                during college.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: '50', opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
