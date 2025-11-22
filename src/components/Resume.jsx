import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase } from 'lucide-react';

const Resume = () => {
    const education = [
        {
            title: "Master of Science in Computer Science",
            school: "California State University, East Bay",
            period: "2021 - 2023"
        },
        {
            title: "Bachelor of Engineering in Computer Engineering",
            school: "LDRP Institute of Technology and Research",
            period: "2015 - 2019"
        }
    ];

    const experience = [
        {
            title: "System Development Engineer",
            company: "Amazon",
            period: "July 2024 – Present",
            description: "Architected Terraform-driven provisioning pipelines for multi-region EKS clusters."
        },
        {
            title: "Software Engineer (DevOps)",
            company: "Lucid Motors",
            period: "Oct 2023 – July 2024",
            description: "Led migration of CI/CD pipelines from Jenkins to internal Developer Platform."
        },
        {
            title: "Software Engineer",
            company: "DSK",
            period: "Feb 2023 – Sep 2023",
            description: "Created real-time Okta monitoring dashboards using React and Django."
        },
        {
            title: "Software Engineer",
            company: "Arvaan Techno-Lab",
            period: "Aug 2019 – Nov 2020",
            description: "Engineered healthcare management microservices using Flask and Django."
        }
    ];

    const skills = [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "AWS", level: 95 },
        { name: "Kubernetes", level: 80 },
        { name: "React", level: 75 },
        { name: "Terraform", level: 85 }
    ];

    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <BookOpen size={20} />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    {education.map((edu, index) => (
                        <li key={index} className="timeline-item">
                            <h4 className="h4 timeline-item-title">{edu.title}</h4>
                            <span>{edu.period}</span>
                            <p className="timeline-text">{edu.school}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <Briefcase size={20} />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    {experience.map((exp, index) => (
                        <li key={index} className="timeline-item">
                            <h4 className="h4 timeline-item-title">{exp.title}</h4>
                            <span>{exp.period} | {exp.company}</span>
                            <p className="timeline-text">{exp.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">
                    {skills.map((skill, index) => (
                        <li key={index} className="skills-item">
                            <div className="title-wrapper">
                                <h5 className="h5">{skill.name}</h5>
                                <data value={skill.level}>{skill.level}%</data>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <style jsx>{`
        .resume.active {
          animation: fadeIn 0.5s ease backwards;
        }

        .article-title {
          margin-bottom: 30px;
        }

        .timeline {
          margin-bottom: 30px;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .timeline-list {
          font-size: 14px;
          margin-left: 45px;
          list-style: none;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-item:not(:last-child) {
          margin-bottom: 20px;
        }

        .timeline-item-title {
          font-size: 16px;
          line-height: 1.3;
          margin-bottom: 7px;
        }

        .timeline-list span {
          color: var(--vegas-gold);
          font-weight: 400;
          line-height: 1.6;
        }

        .timeline-item:not(:last-child)::before {
          content: "";
          position: absolute;
          top: -25px;
          left: -30px;
          width: 1px;
          height: calc(100% + 50px);
          background: var(--jet);
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          top: 5px;
          left: -33px;
          height: 6px;
          width: 6px;
          background: var(--text-gradient-yellow);
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--jet);
        }

        .timeline-text {
          color: var(--light-gray);
          font-weight: 300;
          line-height: 1.6;
        }

        .skills-title {
          margin-bottom: 20px;
        }

        .skills-list {
          padding: 20px;
        }

        .skills-item:not(:last-child) {
          margin-bottom: 15px;
        }

        .skills-item .title-wrapper {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 8px;
        }

        .skills-item .title-wrapper data {
          color: var(--light-gray);
          font-size: 13px;
          font-weight: 300;
        }

        .skill-progress-bg {
          background: var(--jet);
          width: 100%;
          height: 8px;
          border-radius: 10px;
        }

        .skill-progress-fill {
          background: var(--text-gradient-yellow);
          height: 100%;
          border-radius: inherit;
        }

        @media (min-width: 768px) {
          .article-title {
            margin-bottom: 40px;
          }

          .timeline-list {
            margin-left: 65px;
          }

          .timeline-item:not(:last-child)::before {
            left: -40px;
          }

          .timeline-item::after {
            left: -43px;
          }

          .skills-list {
            padding: 30px;
          }
        }
      `}</style>
        </article>
    );
};

export default Resume;
