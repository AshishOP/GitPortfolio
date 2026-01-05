# Ashish Shukla Portfolio 🚀

> A modern, responsive portfolio website showcasing my work as a Full Stack Developer and Digital Experience Designer.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ashishgit.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌟 About

This is my personal portfolio website featuring smooth animations, modern design, and an interactive user experience. Built with vanilla JavaScript featuring GSAP animations, Shery.js effects, and a horizontal scroll project gallery.

## ✨ Features

- **GSAP Scroll Animations** - Smooth reveal animations on scroll using GSAP ScrollTrigger
- **Shery.js Effects** - Custom mouse follower, magnetic buttons, and liquid distortion effects (on desktop)
- **Horizontal Scroll Gallery** - Project cards with horizontal scroll on desktop, snap-based carousel on mobile
- **Dark/Light Theme Toggle** - Switch between themes with persistent preference
- **Typewriter Effect** - Fun facts rotator with CLI-style typing animation
- **Responsive Design** - Mobile-first design with hamburger menu
- **Dynamic Content** - Easy to update via `data.js` configuration
- **Skill Progress Bars** - Animated progress bars that fill on scroll

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Animations:** GSAP, ScrollTrigger, Shery.js
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Inter, Syne)
- **Deployment:** Vercel

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Styling with CSS variables & themes
├── script.js           # Animations & interactivity
├── data.js             # Portfolio content configuration
├── vercel.json         # Vercel deployment config
├── assets/
│   └── images/         # Images and logos
└── libs/
    └── lenis.min.js    # Smooth scroll library (currently disabled)
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/AshishOP/GitPortfolio.git
   cd GitPortfolio
   ```

2. **Customize your portfolio**
   - Edit `data.js` to update your personal information, skills, projects, and education
   - Replace images in `assets/images/` with your own
   - Update social links and contact information

3. **Run locally**
   - Use a local server (required for Shery.js effects):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```
   - Open `http://localhost:8000` in your browser

4. **Deploy**
   - Push to GitHub and connect to Vercel for automatic deployments

## 📝 Customization

### Personal Information
Edit `data.js` to update your information:

```javascript
const portfolioData = {
  name: "Your Name",
  greeting: "Hi, I'm Your Name",
  roles: ["Role 1", "Role 2", "Role 3"],
  bio: "Your bio here...",
  
  // Contact
  email: "your.email@example.com",
  
  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    instagram: "https://instagram.com/yourhandle"
  },
  
  // Resume Link (leave empty to hide button)
  resumeLink: "",
};
```

### Adding Skills
```javascript
skills: [
  { name: "React", icon: "fab fa-react", color: "#61DAFB" },
  { name: "Node.js", icon: "fab fa-node", color: "#339933" },
  // Add more skills...
],

skillProgress: [
  { name: "Frontend Development", percentage: 85 },
  { name: "Backend Development", percentage: 80 },
],
```

### Adding Projects
```javascript
projects: [
  {
    name: "Project Name",
    description: "Project description",
    image: "assets/images/project-image.webp",
    links: [
      { name: "Live Demo", url: "https://demo.com" },
      { name: "GitHub", url: "https://github.com/..." }
    ],
    tags: ["React", "Node.js"]
  }
],
```

### Adding Education
```javascript
education: [
  {
    school: "University Name",
    degree: "Degree Name",
    duration: "Start - End",
    description: "Description of your studies",
    highlights: ["Highlight 1", "Highlight 2"],
    logo: "assets/images/logo.webp"
  }
],
```

## 🎨 Customizing Styles

Edit CSS variables in `styles.css`:

```css
:root {
  --black: #050505;
  --white: #ffffff;
  --gray: #888888;
  --font-main: 'Inter', sans-serif;
  --font-display: 'Syne', sans-serif;
}
```

For light theme customization, modify the `[data-theme="light"]` section.

## 📱 Sections Included

- ✨ Hero section with animated greeting & typewriter effect
- 💼 About me with "What I Do" list
- 🛠️ Skills with icons and progress bars
- 📚 Education timeline
- 🚀 Featured projects (horizontal scroll gallery)
- 📬 Contact section with social links

## 🐛 Notes

- **Shery.js effects** require running from a local server (not `file://` protocol)
- **Liquid distortion** only works on desktop (screen width > 768px)
- **Lenis smooth scroll** is currently disabled for better compatibility

## 📄 License

MIT License - feel free to use this portfolio for your own personal use!

## 👤 Author

**Ashish Shukla**
- GitHub: [@AshishOP](https://github.com/AshishOP)
- LinkedIn: [@ashish-shukla](https://www.linkedin.com/in/ashish-shukla-7b31761b3/)
- Instagram: [@icy4sh](https://www.instagram.com/icy4sh/)

---

⭐ Star this repo if you like it!
