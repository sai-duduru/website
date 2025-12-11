import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import '../styles/loading.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import awsLogo from '../components/picutres/aws.png';
import linkedinLogo from '../components/picutres/linkedin.png';
import githubLogo from '../components/picutres/github.png';
import resumeLogo from '../components/picutres/resume.png';
import profileLogo from '../components/picutres/profile.png';
import gmuLogo from '../components/picutres/gmu.png';
import strawHat from '../components/picutres/strawhat.svg';
import 'aos/dist/aos.css';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/global.css';
import Modal from './Modal';
import ClipLoader from "react-spinners/ClipLoader";

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [color, setColor] = useState('black'); // Color state
  const [collapsed, setCollapsed] = useState({});
  const [typedName, setTypedName] = useState('');
  const [timelineLayout, setTimelineLayout] = useState('2-columns');
  const fullName = "Sai Duduru";
  const frameRef = useRef(null);
  const latestPageCoords = useRef({ x: '50%', y: '50%' });
  const lastClientCoords = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate loading time, then set isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Register any data-aos elements that appear after the loader finishes
    if (!isLoading) {
      AOS.refreshHard();
    }
  }, [isLoading]);

  useEffect(() => {
    // Array of colors to cycle through
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink', 'cyan', 'magenta'];

    let index = 0;

    // Function to update color every 1 second
    const colorChangeInterval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length; // Loop through colors array
    }, 1000); // Change color every 1 second

    return () => clearInterval(colorChangeInterval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Update CSS vars so the background glow follows the cursor
    const setCSSVars = () => {
      const { x, y } = latestPageCoords.current;
      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
      frameRef.current = null;
    };

    const scheduleCSSUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(setCSSVars);
    };

    const updateFromClientCoords = (immediate = false) => {
      const client = lastClientCoords.current;
      if (!client) return;
      latestPageCoords.current = {
        x: `${client.x + window.scrollX}px`,
        y: `${client.y + window.scrollY}px`,
      };

      if (immediate) {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
        const { x, y } = latestPageCoords.current;
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
        return;
      }

      scheduleCSSUpdate();
    };

    // Initialize to center of viewport so the glow has a sane starting point
    if (typeof window !== 'undefined') {
      lastClientCoords.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      updateFromClientCoords(true);
    }

    const handleMouseMove = (event) => {
      lastClientCoords.current = {
        x: event.clientX,
        y: event.clientY,
      };
      latestPageCoords.current = {
        x: `${event.pageX}px`,
        y: `${event.pageY}px`,
      };

      // Batch updates to the next animation frame to avoid jank on fast moves/scroll
      scheduleCSSUpdate();
    };

    const handleScroll = () => {
      // Keep highlight aligned when wheel scroll happens without mousemove
      updateFromClientCoords(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index += 1;

      if (index === fullName.length) {
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [fullName]);

  useEffect(() => {
    const updateTimelineLayout = () => {
      if (typeof window === 'undefined') return;
      const isNarrow = window.innerWidth < 900;
      setTimelineLayout(isNarrow ? '1-column-left' : '2-columns');
    };

    updateTimelineLayout();
    window.addEventListener('resize', updateTimelineLayout, { passive: true });
    return () => window.removeEventListener('resize', updateTimelineLayout);
  }, []);

  const nameLetters = typedName.split("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const experiences = [
    {
      id: 'aws-dmi',
      title: 'Cloud Support Engineer (DMI)',
      subtitle: 'Amazon Web Services, Herndon, VA',
      date: 'June 2024 – Present',
      icon: awsLogo,
      bullets: [
        'Collaborated internationally with global enterprises and GovCloud clients to enhance and deliver scalable solutions and resolve complex infrastructure and networking issues.',
        'Specialized in AWS services such as SQS, SNS, GameLift, Amplify, GameSparks, and SimSpaceWeaver.',
        'Received MVP award for my domain across all North America sites.',
        'Provided solutions on how to configure clients’ cloud infrastructure to project specifications.',
        'Designed and deployed Amplify-based full-stack solutions integrating AppSync GraphQL APIs and DynamoDB with secure Cognito authentication workflows.',
        'Provided tailored cloud infrastructure configurations in coordination with third-party vendors and carriers.',
        'Helped mentor and assist new engineers, sharing best practices and tooling insights.'
      ]
    },
    {
      id: 'aws-intern',
      title: 'Cloud Support Associate Intern',
      subtitle: 'Amazon Web Services (AWS), Herndon, VA',
      date: 'May 2023 – August 2023',
      icon: awsLogo,
      bullets: [
        'Deployed and managed EC2 instances, incorporating load balancers, auto-scaling, and enforcing secure environments.',
        'Demonstrated expertise in securing a robust VPC infrastructure, ensuring data protection through policy management.',
        'Proficiently managed and built secure, highly available database servers such as DynamoDB, Aurora, RDS, and Redshift.',
        'Provided technical support to customers, proficiently troubleshooting and resolving service-related issues.',
        'Actively participated in case shadowing to deliver timely and efficient solutions.',
        'Contributed to the knowledge base by documenting interactions and sharing valuable insights and best practices.'
      ]
    },
    {
      id: 'gmu',
      title: 'Computer Science Internship - Research Assistant',
      subtitle: 'George Mason University',
      date: 'June 2019 – August 2019',
      icon: gmuLogo,
      bullets: [
        'Updated and redacted research information, digitized data, and ensured proper storage management.',
        'Conducted research and analysis on social patterns and data, contributing to a better understanding of societal dynamics.',
        'Acquired a foundation in basic ARC-GIS, employing geospatial analysis techniques to enhance data visualization.'
      ]
    }
  ];

  // Loading screen component
  const LoadingScreen = () => (
    <div className="loading-container">
      <div className="loading-message">Welcome to my Personal Website</div>
      <div className="loading-spinner"></div>
      <div className="name-animation">Sai Duduru</div>
    </div>
  );

  // Conditionally render loading screen or main content
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <main>
            <nav className="top-nav">
              <div className="nav-brand">Sai Duduru</div>
              <div className="nav-links">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <button type="button" className="nav-contact" onClick={openModal}>Contact</button>
              </div>
            </nav>

            <div className="content">
              <header>
                <div className="name-container typewriter">
                  {nameLetters.map((letter, index) => (
                    <span
                      key={index}
                      className={`name-letter hover-effect ${letter === ' ' ? 'space' : ''}`}
                      onMouseOver={(e) => e.target.classList.add('shine')}
                      onAnimationEnd={(e) => e.target.classList.remove('shine')}
                    >
                      {letter}
                    </span>
                  ))}
                  <img src={strawHat} alt="Straw hat" className="straw-hat" />
                </div>
              </header>

              {/* Quantum web component with dynamic color
              <div className="quantum-container" data-aos="fade-up">
                <l-quantum size="200" speed="3" color={color}></l-quantum>
              </div> */}
              
<div className="main-container">
  <section id="about" data-aos="fade-up" className="section-content">
    <div className="about-header-container">
      <h2>About Me</h2>
      <div className="helix-container">
        <l-helix size="40" speed="3" color={color}></l-helix>
      </div>
    </div>
    <span className="highlighted-text">
      I’m Sai Duduru, a Computer Science Engineering graduate from Virginia Tech with hands-on experience in cloud computing and software development. 
      I am currently a Cloud Support Engineer at AWS. I specialize in deploying and managing cloud services, ensuring robust and secure environments.
      I am seeking new opportunities and am open to interviews and new roles.
      I am also interested in the world of Cyber Security and Data Engineering. Welcome to my personal website where I showcase my projects and skills.
    </span>
  </section>

  <section id="work" className="section-content">
  <div className="work-header-container">
    <h2 data-aos="fade-right">Work Experience</h2>
    <div className="hourglass-container">
      <l-hourglass size="30" bg-opacity="0.1" speed="1.75" color="red"></l-hourglass>
    </div>
  </div>
  <VerticalTimeline
    layout={timelineLayout}
    lineColor="rgba(123, 210, 255, 0.35)"
    className="stack-timeline circuit-timeline"
  >
    {experiences.map((role) => {
      const isCollapsed = collapsed[role.id];
      const bulletsToShow = isCollapsed ? role.bullets.slice(0, 3) : role.bullets;
      return (
        <VerticalTimelineElement
          key={role.id}
          className="vertical-timeline-element--work stack-node"
          iconClassName="bezier-icon"
          iconStyle={{
            background: 'linear-gradient(135deg, #111c32, #1b2a4a)',
            color: '#fff',
            border: '1px solid rgba(123, 210, 255, 0.35)',
          }}
          icon={
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                src={role.icon} 
                alt={`${role.title} Logo`} 
                style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  width: role.icon === awsLogo ? '87%' : '100%',
                  height: role.icon === awsLogo ? '87%' : '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }} 
              />
            </div>
          }
        >
          <div className="work-card interactive-card">
            <div className="work-header">
              <div>
                <h3 className="vertical-timeline-element-title">{role.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{role.subtitle}</h4>
              </div>
              <div className="pill">{role.date}</div>
            </div>
            <ul>
              {bulletsToShow.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {role.bullets.length > 3 && (
              <button
                className="toggle-bullets"
                onClick={() =>
                  setCollapsed((prev) => ({
                    ...prev,
                    [role.id]: !prev[role.id],
                  }))
                }
              >
                {isCollapsed ? 'Show more' : 'Show less'}
              </button>
            )}
          </div>
        </VerticalTimelineElement>
      );
    })}
  </VerticalTimeline>
</section>


              <section id="skills" data-aos="fade-up" className="section-content">
                <h2>Skills & Certifications</h2>
                <div className="skills-container">
                  <div className="skills-row first-row">
                    <div className="skills-box">
                      <h3>Technical Skills</h3>
                      <ul>
                        <li>Programming Languages: Python, Java, C, Swift</li>
                        <li>Cloud Computing: AWS, Azure</li>
                        <li>Web Development: JavaScript, React, HTML, CSS, Node.js </li>
                        <li>Data Tools: Pandas, Scikit-Learn, Jupyter, PyTorch</li> 
                        <li>Database Management: SQL, Docker, Kubernetes</li>                                                   
                      </ul>
                    </div>
                    <div className="skills-box">
                      <h3>Certifications</h3>
                      <ul>
                        <li><a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank">AWS Certified Solutions Architect</a></li>
                        <li><a href="https://aws.amazon.com/certification/certified-data-engineer-associate/?ch=sec&sec=rmg&d=1" target="_blank">AWS Certified Data Engineer Associate</a></li>
                        <li><a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank">AWS Certified Cloud Practitioner</a></li>
                        <li><a href="https://aws.amazon.com/certification/certified-ai-practitioner/" target="_blank">AWS Certified AI Practitioner</a></li>
                      </ul>
                    </div>

                    <div className="skills-box">
                      <h3>Upcoming Certifications</h3>
                      <ul>
                        <li><a href="https://aws.amazon.com/certification/certified-machine-learning-specialty/" target="_blank">AWS Certified Machine Learning - Specialty</a></li>
                        <li><a href="https://aws.amazon.com/certification/certified-developer-associate/" target="_blank">AWS Certified Developer - Associate</a></li>
                        <li>Azure Certifications</li>
                        <li></li>
                      </ul>
                    </div>
                  </div>

                      <div className="skills-row wide-row">
                    <div className="skills-box skills-box-wide">
                      <h3>Skills in training</h3>
                      <ul>
                        <li>Taking courses in Machine Learning University to learn neural networks, training data, language chains, and AutoGluon.</li>
                        <li>Training with AWS SimSpaceWeaver to learn how to simulate at scale.</li>
                        <li>Learning TensorFlow.</li>
                        <li>Learning how to play actual golf.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </section>

                
                <section id="projects" className="section-content">
                <h5>Projects</h5>
                <div className="container">
                <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>Created iOS App using AWS Amplify SDK</h6>
                    </header>
                    <section>
                      <p>
                      Using AWS Amplify SDK, developed the backend and frontend for an iOS app. 
                      The iOS app is integrated with the AppSync API, which interacts with DynamoDB as the backend for data storage, 
                      and uses Cognito for authentication.
                      Users submit data to be stored in a DynamoDB table for querying.
                      Utilized Amplify CLI, Xcode, CocoaPods, Swift.                       
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>Created Android App using AWS Amplify SDK</h6>
                    </header>
                    <section>
                      <p>
                      Using AWS Amplify SDK, developed the backend and frontend for an Android app. 
                      The Android app is integrated with the AppSync API, which interacts with DynamoDB as the backend for data storage, 
                      and uses Cognito for authentication.
                      Users submit data to be stored in a DynamoDB table for querying.
                      Utilized Amplify CLI, Android Studio, and Node.js.                       
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>
                 

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>In Progress: Stock Market Tracker Dashboard</h6>
                    </header>
                    <section>
                      <p>
                    Creating a stock market tracker dashboard ETL pipeline using Python and AWS Athena for processing. Will use the Tiingo stock API
                    to gather real-time data and stock changes.                     
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>Personal Website</h6>
                    </header>
                    <section>
                      <p>
                        Built a personal website to showcase my resume and other skills, using Gatsby with HTML, CSS, React, and JavaScript.
                        Currently learning how to make custom animations, transitions, and layouts for websites.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>CS 3214 Personal web and video server Project</h6>
                    </header>
                    <section>
                      <p>
                        Developing a robust and scalable personal web server in C. Aiming to implement HTTP/1.1, file sharing, MP4 streaming, and token-based authentication. Gaining expertise in network protocols, security, and concurrent programming.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>CS 3114 Data Structure</h6>
                    </header>
                    <section>
                      <p>
                        Implemented a high-performance data structure supporting range queries in 3D space. Utilized Range Trees and KD-Trees to efficiently compute the number of points within or on the boundary of a given rectangular prism. Achieved optimal time and space complexities.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                  <div className="card" data-aos="fade-up">
                    <header>
                      <span></span>
                      <h6>CS 3114 Kruskal’s</h6>
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
                      <span></span>
                      <h6>Covid Tracker</h6>
                    </header>
                    <section>
                      <p>
                        Developed a Java-based tracker that categorized COVID-19 data by ethnicity and infection rates, providing insights into regional and demographic impacts.
                      </p>
                    </section>
                    <footer className="author">
                      <a href="https://github.com/SaiDuduru">Read more</a>
                    </footer>
                  </div>

                 

                  
                </div>
              </section>
            </div>
          </div>
 {/* Floating buttons container */}
 <div className="fixed-button-container">
  <a
    href="https://www.linkedin.com/in/saiduduru/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed-button linkedin-button"
  >
    <img src={linkedinLogo} alt="LinkedIn" />
  </a>
  <a
    href="/resume.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    className="fixed-button resume-button"
  >
    <img src={resumeLogo} alt="Resume" />
  </a>
  <a
    href="https://github.com/sai-duduru"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed-button github-button"
  >
    <img src={githubLogo} alt="Github" />
  </a>
  <a
    href="#"
    className="fixed-button contact-button"
    onClick={openModal} 
  >
    <img src={profileLogo} alt="Contact" />
  </a>
</div>


          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />} {/* Render the modal conditionally */}
          
          <footer>
            <p>&copy; 2025 My Personal Website</p>
          </footer>
          </main>
        </div>
      )}
    </>
  );
};

export default IndexPage;
