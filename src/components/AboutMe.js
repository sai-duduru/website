import React, { useEffect } from 'react';
import AOS from 'aos';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="about" className="section-content visible">
      <h2>About Me</h2>
      <p data-aos="fade-up">
        I recently graduated from Virginia Tech with a degree in Computer Science with an interest in Cyber Security
        and Data Science. I am currently working full-time at AWS as a Cloud Support Engineer working in the DMI profile.
      </p>
    </section>
  );
};

export default AboutMe;
