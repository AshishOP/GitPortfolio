// ============================================
// YOUR PERSONAL DATA - Edit this file only!
// ============================================

const portfolioData = {
  // Personal Info
  name: "Ashish Shukla",
  greeting: "Hi, I'm Ashish",
  roles: ["Full Stack Developer", "React Specialist", "AI Enthusiast"],
  bio: "A passionate Full Stack Software Developer 🚀 with experience building Web and Mobile applications using JavaScript, React.js, Node.js, Python, and AI tools.",
  
  // Contact
  email: "ashishshuklacr@gmail.com",
  phone: "+91-XXXXXXXXXX",
  location: "India",
  
  // Social Links
  social: {
    github: "https://github.com/AshishOP",
    linkedin: "https://www.linkedin.com/in/ashish-shukla-7b31761b3/",
    instagram: "https://www.instagram.com/icy4sh/",
  },
  
  // Resume Link (leave empty to hide button)
  resumeLink: "",
  
  // Skills
  skills: [
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node", color: "#339933" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
    { name: "Database", icon: "fas fa-database", color: "#336791" },
    { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
    { name: "npm", icon: "fab fa-npm", color: "#CB3837" },
    { name: "AI", icon: "fas fa-brain", color: "#9B59B6" },
  ],
  
  // What I Do
  whatIDo: [
    "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications",
    "⚡ Building scalable backend systems and RESTful APIs with Node.js and Python",
    "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean",
    "⚡ Leveraging AI tools and technologies for efficient development and automation"
  ],
  
  // Skill Progress
  skillProgress: [
    { name: "Frontend Development", percentage: 85 },
    { name: "Backend Development", percentage: 80 },
    { name: "AI & Automation", percentage: 75 },
  ],
  
  // Education
  education: [
    {
      school: "MIT ACSC",
      degree: "Bachelor of Computer Science (BCS)",
      duration: "July 2023 - April 2026",
      description: "Pursuing Computer Science with focus on Full Stack Development and AI technologies.",
      highlights: [
        "Learning advanced web development, data structures, and algorithms",
        "Building real-world projects and exploring AI/ML technologies"
      ],
      logo: "assets/images/MITlogo.webp"
    }
  ],
  
  // Featured Projects
  projects: [
    {
      name: "Ragebait Clothing",
      description: "A clothing brand I founded and built from the ground up, handling all technical aspects including e-commerce platform, waitlist system, and digital infrastructure end-to-end.",
      image: "assets/images/ragebait-logo.webp",
      links: [
        { name: "Visit Waitlist", url: "https://waitlist.ragebaitclothing.in/" },
        { name: "Visit Shop", url: "https://test.ragebaitclothing.in/" }
      ],
      tags: ["E-Commerce", "Full Stack", "React", "Node.js"]
    }
  ],
  
  // GitHub username for fetching repos
  githubUsername: "AshishOP",
  
  // Settings
  settings: {
    showGithubRepos: true,
    showEducation: true,
    showProjects: true,
    showContact: true,
    isHireable: true,
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
