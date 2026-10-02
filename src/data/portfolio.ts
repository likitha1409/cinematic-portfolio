import type { Portfolio } from "../types/portfolio";
import autosageVideo from "../assets/images/autosage-video.mp4";
import agroguideVideo from "../assets/images/agroguide-video.mp4";
import attendanceVideo from "../assets/images/attendance-video.mp4";
import busReservationVideo from "../assets/images/bus-reservation-video.mp4";

const portfolio: Portfolio = {
  name: "DOMMETI L S VASANTHI",

  role: "Graduate Software Engineer",

  location: "Rajahmundry, India",

  contact: {
    phone: "+91 97015 94369",
    email: "dommetilsvasanthi@gmail.com",
    linkedin: "https://www.linkedin.com/in/dommeti-l-s-vasanthi/",
    github: "https://github.com/likitha1409/",
    website: "",
  },

  hero: {
    headline:
      "I TURN CODE, DATA & AI INTO REAL-WORLD SOFTWARE.",

    technologies: [
      "Java",
      "Python",
      "React.js",
      "Spring Boot",
      "REST APIs",
      "SQL",
      "AI/ML",
    ],
  },

  about: {
    title: "Engineering With Purpose",

    description:
      "Computer Science graduate with hands-on experience in Java, Python, Object-Oriented Programming, SQL, RDBMS, Spring Boot, REST APIs, and full-stack application development through internships and projects. Experienced in developing backend applications, integrating databases and APIs, debugging application issues, and applying software development practices.",
  },

  experience: [
    {
      company: "SmartBridge (APSCHE)",
      role: "Generative AI Intern",
      duration: "Sep 2025 - Mar 2026",
      location: "Tadepalligudem, Andhra Pradesh, India",
      type: "On-site",

      description: [
        "Developed Python-based AI applications using LLMs, RAG, and prompt engineering for Generative AI use cases.",
        "Performed data preprocessing, EDA, validation, and transformation using Pandas and NumPy.",
        "Integrated LLM APIs and evaluated responses to improve relevance and output quality.",
      ],

      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Gemini API",
        "Streamlit",
      ],
    },

    {
      company: "Naxrita",
      role: "SAP ABAP Trainee — DevCon Naxrita Internship",
      duration: "Jan 2026 - Mar 2026",
      location: "Tadepalligudem, Andhra Pradesh, India",
      type: "Training",

      description: [
        "Worked as a DevCon Associate in the SAP Application Development track.",
        "Developed applications using SAP ABAP Cloud.",
        "Designed data models and implemented business logic.",
        "Performed debugging while following development best practices.",
      ],

      technologies: ["SAP ABAP Cloud"],
    },

    {
      company: "Learnsquare Technologies Pvt. Ltd.",
      role: "Full Stack Development Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Tadepalligudem, Andhra Pradesh, India",
      type: "On-site",

      description: [
        "Developed REST APIs using Spring Boot and SQL workflows with MySQL for backend applications.",
        "Resolved 15+ API/database integration issues.",
        "Implemented JWT-based authentication using Spring Security.",
        "Utilized Git/GitHub and API testing/debugging practices.",
      ],

      technologies: [
        "Spring Boot",
        "MySQL",
        "React.js",
        "JavaScript",
        "HTML",
        "Tailwind CSS",
      ],
    },
  ],

  projects: [
    {
      number: "01",
      title: "AutoSage AI",
      subtitle: "Vehicle Expert",
      category: "GENERATIVE AI",
      duration: "Sep 2025 - Feb 2026",

      description:
        "Built a Generative AI application for vehicle identification and intelligent recommendations using multimodal image analysis.",

      details: [
        "Integrated LLM API workflows.",
        "Applied prompt engineering.",
        "Generated structured vehicle insights and recommendation reports.",
      ],

      technologies: [
        "Python",
        "Gemini 2.5 Flash API",
        "Streamlit",
      ],

      github: "https://github.com/likitha1409/AutoSage-App-Using-Gemini-Flash",
      video: autosageVideo,
    },

    {
      number: "02",
      title: "AgroGuide",
      subtitle: "AI Based Farming Assistant",
      category: "AI / MACHINE LEARNING",
      duration: "Jul 2025 - Dec 2025",

      description:
        "Developed an AI-powered farming application integrating a CNN-based crop disease prediction model.",

      details: [
        "Implemented image preprocessing.",
        "Implemented model inference.",
        "Integrated backend functionality.",
        "Implemented database storage for predictions and recommendations.",
      ],

      technologies: [
        "Django",
        "Python",
        "MySQL",
        "CNN",
      ],

      github: "https://github.com/likitha1409/AgroGuideProject",
      video: agroguideVideo,
    },

    {
      number: "03",
      title: "Next-Gen Attendance",
      subtitle: "Computer Vision Attendance System",
      category: "COMPUTER VISION",
      duration: "Oct 2025 - Dec 2025",

      description:
        "Developed a webcam-based computer vision attendance system for face detection and recognition.",

      details: [
        "Implemented face detection and recognition.",
        "Integrated FaceNet/InceptionResnetV1.",
        "Used MTCNN for face processing.",
        "Enabled automated attendance recording and emotion analysis.",
      ],

      technologies: [
        "Python",
        "PyTorch",
        "FaceNet",
        "InceptionResnetV1",
        "MTCNN",
      ],

      github: "https://github.com/likitha1409/miniproject",
      video: attendanceVideo,
    },

    {
      number: "04",
      title: "Bus Reservation System",
      subtitle: "Full Stack Reservation Application",
      category: "FULL STACK / BACKEND",
      duration: "Aug 2024 - Feb 2025",

      description:
        "Developed a full-stack reservation application using Java and Spring Boot with REST APIs and MySQL.",

      details: [
        "Implemented booking and user-management workflows.",
        "Integrated React.js frontend with Spring Boot backend.",
        "Implemented JWT-based authentication.",
        "Performed SQL debugging and query optimization.",
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React.js",
        "JWT",
      ],

      github: "https://github.com/likitha1409/BUS-RESERVATION-SYSTEM",
      video: busReservationVideo,
    },
  ],

  skills: {
    programming: [
      "Java",
      "Python",
      "SQL",
    ],

    coreCS: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "DBMS",
      "RDBMS",
      "SDLC",
    ],

    backend: [
      "Spring Boot",
      "REST APIs",
      "JSON",
      "API Integration",
      "Django",
    ],

    databases: [
      "MySQL",
      "PostgreSQL",
    ],

    web: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
    ],

    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Jupyter Notebook",
      "Maven",
    ],

    aiML: [
      "Machine Learning",
      "Generative AI",
      "Computer Vision",
    ],

    softSkills: [
      "Analytical Thinking",
      "Adaptability",
      "Leadership",
      "Teamwork",
      "Problem Solving",
    ],
  },

  education: [
    {
      institution: "Sri Vasavi Engineering College",
      degree: "B.Tech – Computer Science & Technology",
      duration: "Aug 2022 - May 2026",
      location: "Tadepalligudem, Andhra Pradesh, India",
      result: "82.81%",
    },

    {
      institution: "Modern Roof Govt Junior College for Girls",
      degree: "Intermediate (MPC)",
      duration: "Jun 2020 - Apr 2022",
      location: "Andhra Pradesh, India",
      result: "84%",
    },

    {
      institution: "Narayana E-Techno School",
      degree: "SSC – Class X",
      duration: "Jun 2019 - Apr 2020",
      location: "Andhra Pradesh, India",
      result: "100%",
    },
  ],

  certifications: [
    "SAP Certified Associate – ABAP Cloud",
    "Oracle Cloud Infrastructure – Generative AI Professional",
    "Microsoft Azure AI Fundamentals",
    "Microsoft Data Fundamentals",
  ],

  publication: {
    title:
      "AgroGuide: An Integrated AI-Powered Web Platform for Empowering Small-Scale Farmers",

    publisher:
      "Springer proceedings of ICCIC 2025",
  },
};

export { portfolio };
export default portfolio;