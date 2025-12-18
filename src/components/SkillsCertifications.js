import React, { useEffect } from 'react';
import AOS from 'aos';

const SkillsCertifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="skills" className="section-content">
      <h2>Skills & Certifications</h2>
      <h3>Technical Skills:</h3>
      <p>
        Java, C, Python, AWS, RDBMS, SQL, Rust, Linux, HTML, JavaScript, NodeJS, Docker, Kubernetes
      </p>
      <h3>Certifications:</h3>
      <p>
        AWS Solutions Architect Associate<br />
        AWS Certified Cloud Practitioner
      </p>
    </section>
  );
};

export default SkillsCertifications;
