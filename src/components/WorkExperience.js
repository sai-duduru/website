import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="work" className="section-content">
      <h2 data-aos="fade-right">Work Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2024 – Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaStar />}
        >
          <h3 className="vertical-timeline-element-title">Cloud Support Associate (DMI)</h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon Web Services (AWS), Herndon, VA</h4>
          <p>Providing cloud support to clients and managing cloud infrastructure.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 – August 2023       "
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Cloud Support Associate Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon Web Services (AWS), Herndon, VA</h4>
          <ul>
            <li>Deployed and managed EC2 instances, incorporating load balancers, auto-scaling, and enforcing secure environments.</li>
            <li>Demonstrated expertise in securing a robust VPC infrastructure, ensuring data protection through policy management.</li>
            <li>Proficiently managed and built secure, highly available database servers such as DynamoDB, Aurora, RDS, and Redshift.</li>
            <li>Provided technical support to customers, proficiently troubleshooting and resolving service-related issues.</li>
            <li>Actively participated in case shadowing to deliver timely and efficient solutions.</li>
            <li>Contributed to the knowledge base by documenting interactions and sharing valuable insights and best practices.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2019 – August 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Computer Science Internship - Research Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">George Mason University</h4>
          <ul>
            <li>Updated and redacted research information, digitized data, and ensured proper storage management.</li>
            <li>Conducted research and analysis on social patterns and data, contributing to a better understanding of societal dynamics.</li>
            <li>Acquired a foundation in basic ARC-GIS, employing geospatial analysis techniques to enhance data visualization.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
