import React, { useEffect } from 'react';
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (

     <section id="projects" className="section-content">
                <h2>Projects</h2>
                <div className="container">
                  <div className="card" data-aos="fade-up">
                    <header>
                      <span>Project</span>
                      <h2>CS 3214 Personal web and video server Project</h2>
                    </header>
                    <section>
                      <p>
                        Developing a robust and scalable personal web server in C. Aiming to implement HTTP/1.1, file sharing, MP4 streaming, and Token-based authentication. Going to gain expertise in network protocols, security, and concurrent programming.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span>Project</span>
                      <h2>CS 3114 Data Structure</h2>
                    </header>
                    <section>
                      <p>
                        Data Structure that supporting 3D point set: Implemented a high-performance data structure supporting range queries in 3D space. Utilized Range Trees and KD-Trees to efficiently compute the number of points within or on the boundary of a given rectangular prism. Achieved optimal time and space complexities.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span>Project</span>
                      <h2>CS 3114 Kruskal’s</h2>
                    </header>
                    <section>
                      <p>
                        Implemented Kruskal's algorithm to compute the cost of the minimum spanning tree and perform k-clustering on a weighted connected undirected graph. Utilized Union-Find data structure with path compression technique to optimize runtime efficiency and achieved accurate results on multiple test cases.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span>Project</span>
                      <h2>Covid Tracker</h2>
                    </header>
                    <section>
                      <p>
                        Developed a Java-based tracker that categorized COVID-19 data by ethnicity, infection rates, providing insights into regional and demographic impacts.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span>Project</span>
                      <h2>Wind Powered Turbine</h2>
                    </header>
                    <section>
                      <p>
                      Collaborated on building a wind-powered turbine that generates electricity and integrates 
                      with Arduino for telemetry readings
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span>Project</span>
                      <h2>Personal Website</h2>
                    </header>
                    <section>
                      <p>
                        Built a personal website to showcase my resume and other skills, built using gatsby, and uses html, css, react, javscript.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                </div>
              </section>
  );
};

export default Projects;
