export const portfolioData = {
  personal: {
    name: "Mr.Arman",
    title: "Java Full Stack Developer",
    description: "Backend-focused Software Engineer with expertise in Java, Spring Boot, and modern web technologies. Specialized in building scalable enterprise applications with clean architecture and best practices.",
    location: "AGRA, UP, INDIA ",
    email: "armali6886@gmail.com",
    phone: "+91 7599710000",
    availability: "Available for Work",
    yearsExperience: "6 month+",
    projectsCount: "5+",
    technologiesCount: "12+",
    certificationsCount: "4+"
  },
 
  social: {
    github: "https://github.com/Arman-8431",
    linkedin: "https://www.linkedin.com/in/arman-567433332/",
    twitter: "Empty",
    email: "armali6886@gmail.com"
  },
 
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "AKTU (Dr. A.P.J. Abdul Kalam Technical University)",
    college: "Eshaan College of Engineering",
    year: "2025 - 2028",
    grade: "First Division"
  },
 
  experience: [
    {
      id: 1,
      title: "Java Developer Intern",
      company: "DecodeLabs Pvt Ltd",
      type: "Virtual Internship",
      duration: "Jun 2026 - Present",
      location: "Remote, India",
      responsibilities: [
        "Developed RESTful APIs using Spring Boot and Java 17 for e-commerce modules, enabling seamless product catalog and order management.",
        "Implemented JWT-based authentication and role-based access control (RBAC) to secure application endpoints.",
        "Optimized database queries and implemented caching strategies using Redis, reducing API response time by ~40%.",
        "Collaborated with frontend team to integrate APIs with React-based dashboard.",
        "Wrote unit tests using JUnit and Mockito to ensure code quality and reliability."
      ],
      impact: [
        { label: "API Response Time", value: "~40% Faster" },
        { label: "Code Coverage", value: "~85%" },
        { label: "Security", value: "JWT + RBAC" }
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "Redis", "JWT", "JUnit", "Mockito", "Git" ]
    }
  ],
 
  skills: {
    backend: [
      { name: "Java", icon: "coffee" },
      { name: "Spring Boot", icon: "leaf" },
      { name: "REST API", icon: "zap" },
      { name: "Hibernate/JPA", icon: "database" }
    ],
    frontend: [
      { name: "React.js", icon: "react" },
      { name: "JavaScript ES6+", icon: "code" },
      { name: "HTML5/CSS3", icon: "file-code" },
      { name: "Responsive UI", icon: "monitor" }
    ],
    database: [
      { name: "MySQL", icon: "database" },
      { name: "PostgreSQL", icon: "database" },
      { name: "MongoDB", icon: "database" },
      { name: "Redis", icon: "flame" }
    ],
    tools: [
      { name: "Git/GitHub", icon: "github" },
      { name: "Docker", icon: "package" },
      { name: "Postman", icon: "send" },
      { name: "VS Code", icon: "code-2" }
    ]
  },
 
  projects: [
    {
      id: 1,
      title: "E-Commerce REST API",
      description: "A comprehensive e-commerce backend with product management, user authentication, shopping cart, and order processing capabilities.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      category: "Full Stack",
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Redis"],
      github: /* "https://github.com/arman/ecommerce-api" */ ,
      live: null,
      stars: 12,
      views: "2.1k",
      status: "Live"
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A full-stack application for managing student records, attendance, grades, and course enrollments with role-based access.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Full Stack",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      github: /* "https://github.com/arman/student-management" */,
      live: null,
      stars: 8,
      views: "1.5k",
      status: "Live"
    },
    {
      id: 3,
      title: "Task Tracker API",
      description: "RESTful API for task management with user authentication, task categories, priority levels, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      category: "Backend",
      technologies: ["Java", "Spring Boot", "MongoDB", "JWT"],
      github: /* "https://github.com/arman/task-tracker" */,
      live: null,
      stars: 15,
      views: "3.2k",
      status: "Live"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with React and modern UI components showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "Frontend",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: /* "https://github.com/arman/portfolio"*/ ,
      live: null,
      stars: 5,
      views: "800",
      status: "Live"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard using OpenWeather API with location search, 5-day forecast, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      category: "Frontend",
      technologies: ["React", "API Integration", "CSS3"],
      github: /*"https://github.com/dashboard"*/,
      live: null,
      stars: 7,
      views: "1.2k",
      status: "Live"
    }
  ],
 
  certifications: [
    " Java Programming - Certified",
    " SpringBoot Framework Fundamentals",  
    " Front-end Certified ",  
    " Spring Certified "  
  ],
  
  contacts: {
    email: "armali6886@gmail.com",
    phone: "+91 7599710000",
    location: "Agra, Uttar pradesh, India",
    socials: {
      github: "https://github.com/Arman-8431",
      linkedin: "https://www.linkedin.com/in/arman-567433332/",
      twitter: "Empty"
    }
  }, 

  /* Education: {
    Schooling: ["10th standard from CBSE",
               "12th standard from CBSE"],
    DEGREE:"BCA (Bachelor of Computer Application)  ",           
    College: " Eshaan college of engnn.",
    University:"AKTU (A.P.J Abdul kalam technical University, Lucknow )",
    
  }*/
  

};
