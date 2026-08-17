// src/data/portfolioData.js

export const profileData = {
    name: "Paolo Bachicha",
    title: "Application Developer",
    tagline: "Specializing in Flutter, Dart, PHP, & Laravel",
    summary: "Application Developer experienced in Development cross-platform mobile and web applications. Proven track record in building custom enterprise solutions—such as point-of-sale systems (KwikPOS) and mall integration modules—using Clean Architecture, BLoC state management, Supabase, and RESTful APIs.",
    contact: {
        email: "your.email@example.com", // Replace with your email
        github: "https://github.com/starpatricknot", // Updated from your repo namespace
        linkedin: "https://linkedin.com/in/your-profile",
        resumePdf: "/assets/documents/paolo-bachicha-resume.pdf"
    }
};

export const skillsData = {
    languages: ["Dart", "PHP", "JavaScript", "HTML5", "CSS3"],
    frameworks: ["Flutter", "Laravel", "Vue 3", "Bootstrap 5", "Tailwind CSS"],
    toolsAndDatabases: ["RESTful APIs", "Supabase", "MySQL", "BLoC Pattern", "Clean Architecture", "Git", "GitHub", "Postman"]
};

export const experienceData = [
    {
        id: 1,
        role: "Application Developer",
        company: "OneClickTech",
        period: "Oct 2024 – Present",
        bullets: [
            "Developed cross-platform Flutter mobile applications utilizing Clean Architecture and BLoC state management to decouple UI from business logic.",
            "Developed automated Mall IT Hookup modules synchronizing live retail transaction data with external mall management platforms.",
            "Implemented real-time inventory tracking, transaction logging, and customizable sales reporting for retail point-of-sale (KwikPOS) systems.",
            "Integrated Supabase databases and RESTful APIs for authentication, live data fetching, and cloud synchronization.",
            "Designed minimalist user interfaces for self-ordering kiosks and handheld POS devices to optimize operational speed."
        ]
    },
    {
        id: 2,
        role: "Developer Intern",
        company: "Gleent Incorporated",
        period: "Dec 2023 – Apr 2024",
        bullets: [
            "Optimized system components, enhanced core functionalities, and improved input data validation across client web applications.",
            "Coordinated task assignments and workflow tracking for intern team members to maintain sprint deadlines.",
            "Maintained detailed technical documentation and meeting logs to support productivity."
        ]
    },
    {
        id: 3,
        role: "Freelance Developer",
        company: "Self-Employed",
        period: "Aug 2023 – Oct 2025",
        bullets: [
            "Delivered responsive web applications using HTML, CSS, Bootstrap 5, JavaScript, PHP, Laravel, and MySQL.",
            "Developed tailored web solutions based on direct client requirements and business logic.",
            "Managed full project lifecycles from initial scoping to deployment and maintenance."
        ]
    },
    {
        id: 4,
        role: "Computer Subject Tutor",
        company: "Course Hero",
        period: "Dec 2023 – Jul 2024",
        bullets: [
            "Provided 1-on-1 technical tutoring by breaking down complex programming and computer science concepts.",
            "Created structured explanations adapted to individual learning styles."
        ]
    }
];

export const projectCaseStudies = [
    {
        id: "kwikpos",
        title: "KwikPOS Enterprise System",
        category: "Mobile & Retail Tech",
        stack: ["Flutter", "Dart", "BLoC", "Supabase", "REST API"],
        description: "Retail point-of-sale platform running on handheld devices and self-ordering kiosks, designed for rapid checkout and live inventory tracking.",
        highlights: [
            "Architected with Clean Architecture + BLoC pattern for maintainable state management across handheld POS devices.",
            "Connected live inventory logging with cloud-based Supabase synchronization.",
            "Optimized UI layout for touchscreen hardware and self-ordering kiosk displays."
        ]
    },
    {
        id: "mall-it-hookup",
        title: "Mall IT Hookup Data Module",
        category: "Enterprise Integration",
        stack: ["Flutter", "Dart", "RESTful APIs", "JSON Automation"],
        description: "Automated integration system built to transmit sales and transaction records to commercial mall tenant management portals.",
        highlights: [
            "Automated real-time sales reporting scripts required by commercial mall operator systems.",
            "Handled error logging, re-try mechanisms, and secure payload transmissions.",
            "Ensured zero data loss during network interruptions using local queueing."
        ]
    },
    // {
    //     id: "custom-laravel-client-apps",
    //     title: "Freelance Client Web Portals",
    //     category: "Web Development",
    //     stack: ["PHP", "Laravel", "MySQL", "Bootstrap 5", "JavaScript"],
    //     description: "Tailored full-stack client portals and web management interfaces for local small-to-medium businesses.",
    //     highlights: [
    //         "Built custom relational database schemas in MySQL with relational integrity.",
    //         "Implemented role-based access control (RBAC) and authentication using Laravel.",
    //         "Designed fully responsive interfaces compatible across mobile and desktop devices."
    //     ]
    // }
];

// Older Web & Capstone Projects
export const archiveProjects = [
    {
        id: "srs-system",
        title: "Specialization Recommendation System",
        type: "Capstone / AI Web App",
        image: "/assets/img/project-screenshot/srs-project.png",
        stack: ["PHP", "Bootstrap 5", "JavaScript", "OpenAI API", "MySQL"],
        description: "Career and learning path recommendation engine using machine learning for grade-based evaluations and OpenAI integration for preference-based suggestions.",
        github: "https://github.com/starpatricknot/specialization-recommendation-system"
    },
    {
        id: "pms-system",
        title: "Project Management System",
        type: "Web Application",
        image: "/assets/img/project-screenshot/pms-project.png",
        stack: ["PHP", "Bootstrap 5", "JavaScript", "MySQL"],
        description: "Workflow organization tool enabling project managers and team members to track project timelines, manage task assignments, and post status updates.",
        github: "https://github.com/starpatricknot/project_management_system"
    },
    {
        id: "oair-system",
        title: "Online Agricultural Insurance System",
        type: "Web Portal",
        image: "/assets/img/project-screenshot/oair-project.png",
        stack: ["PHP", "Bootstrap 5", "JavaScript", "MySQL"],
        description: "Agricultural management platform designed to streamline crop insurance applications, coverage calculations, and claim processing for farmers.",
        github: "https://github.com/starpatricknot/oair_system"
    }
];