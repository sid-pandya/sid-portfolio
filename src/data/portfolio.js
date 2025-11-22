import { Mail, Phone, Calendar, MapPin, Linkedin, Github, Cloud, Code2, Terminal, Server, Database, Globe, Cpu, Shield } from 'lucide-react';

export const portfolioData = {
    profile: {
        name: "Sidhdharth Pandya",
        role: "System Development Engineer",
        status: "Operational",
        location: "Seattle, WA, USA",
        email: "sidhdharth19pandya@gmail.com",
        phone: "+1 (510) 709-8566",
        availability: "Open for opportunities",
        social: [
            { icon: Linkedin, href: "https://linkedin.com/in/sidhdharth-pandya", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/sid-pandya", label: "GitHub" }
        ]
    },
    stats: [
        { label: "Uptime", value: "99.9%", status: "success" },
        { label: "Experience", value: "5+ Years", status: "processing" },
        { label: "Projects", value: "20+", status: "processing" },
        { label: "Commits", value: "1.2k+", status: "success" }
    ],
    skills: [
        { name: "Python", category: "Language", level: 90 },
        { name: "Java", category: "Language", level: 85 },
        { name: "AWS", category: "Cloud", level: 95 },
        { name: "Kubernetes", category: "DevOps", level: 80 },
        { name: "Terraform", category: "DevOps", level: 85 },
        { name: "React", category: "Frontend", level: 75 },
        { name: "Docker", category: "DevOps", level: 90 },
        { name: "CI/CD", category: "DevOps", level: 90 },
        { name: "System Design", category: "Architecture", level: 85 },
        { name: "Microservices", category: "Architecture", level: 85 }
    ],
    experience: [
        {
            id: "exp-01",
            role: "System Development Engineer",
            company: "Amazon",
            period: "2024-07 - Present",
            status: "Active",
            description: "Architecting Terraform-driven provisioning pipelines for multi-region EKS clusters, enabling seamless scaling and 99.9% uptime.",
            tags: ["AWS", "EKS", "Terraform", "Go"]
        },
        {
            id: "exp-02",
            role: "Software Engineer (DevOps)",
            company: "Lucid Motors",
            period: "2023-10 - 2024-07",
            status: "Archived",
            description: "Led migration of CI/CD pipelines from Jenkins to an internal Developer Platform powered by Terraform, Docker, and Kubernetes.",
            tags: ["Kubernetes", "Docker", "Jenkins", "Python"]
        },
        {
            id: "exp-03",
            role: "Software Engineer",
            company: "DSK",
            period: "2023-02 - 2023-09",
            status: "Archived",
            description: "Created real-time Okta monitoring dashboards using React, TypeScript, and Django, improving visibility by 25%.",
            tags: ["React", "Django", "Okta", "TypeScript"]
        },
        {
            id: "exp-04",
            role: "Software Engineer",
            company: "Arvaan Techno-Lab",
            period: "2019-08 - 2020-11",
            status: "Archived",
            description: "Engineered healthcare management microservices using Flask, Django, and PostgreSQL, improving backend performance by 35%.",
            tags: ["Flask", "PostgreSQL", "Microservices"]
        }
    ],
    projects: [
        {
            id: "proj-01",
            title: "AI Music Genre Classifier",
            category: "Machine Learning",
            status: "Deployed",
            description: "Deep learning model for classifying music genres with 92% accuracy.",
            tech: ["Python", "TensorFlow", "Librosa"],
            link: "#"
        },
        {
            id: "proj-02",
            title: "Okta Monitoring Dashboard",
            category: "Observability",
            status: "Internal",
            description: "Real-time dashboard for monitoring Okta authentication events and security alerts.",
            tech: ["React", "Django", "Okta API"],
            link: "#"
        },
        {
            id: "proj-03",
            title: "Healthcare Microservices",
            category: "Backend",
            status: "Production",
            description: "Scalable microservices architecture for patient management system.",
            tech: ["Flask", "PostgreSQL", "Docker"],
            link: "#"
        },
        {
            id: "proj-04",
            title: "EKS Provisioning Pipeline",
            category: "Infrastructure",
            status: "Active",
            description: "Automated pipeline for provisioning production-ready EKS clusters.",
            tech: ["Terraform", "AWS", "GitHub Actions"],
            link: "#"
        }
    ],
    services: [
        {
            title: "Cloud Architecture",
            description: "Designing scalable, resilient, and secure cloud infrastructure on AWS.",
            icon: Cloud
        },
        {
            title: "Full Stack Dev",
            description: "Building end-to-end web applications with modern frameworks.",
            icon: Code2
        },
        {
            title: "DevOps & Automation",
            description: "Streamlining deployment pipelines and infrastructure management.",
            icon: Terminal
        },
        {
            title: "System Design",
            description: "Architecting complex distributed systems for high availability.",
            icon: Server
        }
    ]
};
