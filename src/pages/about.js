import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
  <main>
    <header>
      <Link to="/">Home</Link>
    </header>
    <section>
      <h1>About Me</h1>
      <p>This is where you can tell more about yourself.</p>
    </section>
  </main>
);

export default AboutPage;
