import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Server, Terminal } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Cloud Architecture",
            description: "Designing scalable, resilient, and secure cloud infrastructure on AWS using best practices.",
            icon: Cloud
        },
        {
            title: "Full Stack Development",
            description: "Building end-to-end web applications with modern frameworks like React, Node.js, and Python.",
            icon: Code2
        },
        {
            title: "DevOps & Automation",
            description: "Streamlining deployment pipelines and infrastructure management with Terraform and Kubernetes.",
            icon: Terminal
        },
        {
            title: "System Design",
            description: "Architecting complex distributed systems for high availability and performance.",
            icon: Server
        }
    ];

    return (
        <section className="service">
            <h3 className="h3 service-title">What I'm doing</h3>

            <ul className="service-list">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <li key={index} className="service-item">
                            <div className="service-icon-box">
                                <Icon size={40} strokeWidth={1.5} />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <style jsx>{`
        .service {
          margin-bottom: 35px;
        }

        .service-title {
          margin-bottom: 20px;
        }

        .service-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          list-style: none;
        }

        .service-item {
          position: relative;
          background: var(--border-gradient-onyx);
          padding: 20px;
          border-radius: 14px;
          box-shadow: var(--shadow-2);
          z-index: 1;
        }

        .service-item::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: var(--bg-gradient-jet);
          border-radius: inherit;
          z-index: -1;
        }

        .service-icon-box {
          margin-bottom: 10px;
        }

        .service-icon-box :global(svg) {
          color: var(--orange-yellow-crayola);
          margin: auto;
        }

        .service-content-box {
          text-align: center;
        }

        .service-item-title {
          margin-bottom: 7px;
        }

        .service-item-text {
          color: var(--light-gray);
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
        }

        @media (min-width: 580px) {
          .service-list {
            grid-template-columns: 1fr 1fr;
            gap: 20px 25px;
          }
        }

        @media (min-width: 768px) {
          .service-item {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 18px;
            padding: 30px;
          }

          .service-icon-box {
            margin-bottom: 0;
            margin-top: 5px;
          }

          .service-content-box {
            text-align: left;
          }

          .service-item-title {
            margin-bottom: 8px;
          }

          .service-item-text {
            font-size: 15px;
          }
        }

        @media (min-width: 1024px) {
          .service-list {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Services;
