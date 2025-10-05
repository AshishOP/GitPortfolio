# 🚀 Portfolio Customization Guide

Welcome to your Developer Portfolio! This guide will help you personalize it step by step.

## 📋 Quick Start Checklist

### 1️⃣ Setup Environment Variables (.env file)
The `.env` file is already created. Update it with your information:

```env
REACT_APP_GITHUB_TOKEN = "your_github_token_here"
GITHUB_USERNAME = "AshishOP"
USE_GITHUB_DATA = "true"
MEDIUM_USERNAME = "your_medium_username"
```

**To get a GitHub Token:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Token")
4. **Don't select any scopes** - just generate it
5. Copy the token and paste it in the `.env` file

---

### 2️⃣ Customize Your Portfolio (src/portfolio.js)

Open `src/portfolio.js` and update the following sections:

#### **Greeting Section**
```javascript
const greeting = {
  username: "Your Name",
  title: "Hi all, I'm Your Name",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 [Your Description]"
  ),
  resumeLink: "your_resume_link_here", // Google Drive or any public link
  displayGreeting: true
};
```

#### **Social Media Links**
```javascript
const socialMediaLinks = {
  github: "https://github.com/AshishOP",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  gmail: "your.email@gmail.com",
  gitlab: "https://gitlab.com/yourprofile", // Optional
  facebook: "https://www.facebook.com/yourprofile", // Optional
  medium: "https://medium.com/@yourprofile", // Optional
  stackoverflow: "https://stackoverflow.com/users/yourprofile", // Optional
  display: true
};
```

#### **Skills Section**
```javascript
const skillsSection = {
  title: "What I do",
  subTitle: "YOUR TAGLINE HERE",
  skills: [
    emoji("⚡ Your skill 1"),
    emoji("⚡ Your skill 2"),
    emoji("⚡ Your skill 3")
  ],
  softwareSkills: [
    // Add/remove skills as needed
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // ... more skills
  ],
  display: true
};
```

#### **Education Section**
```javascript
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Your University",
      logo: require("./assets/images/yourLogo.png"), // Add your logo
      subHeader: "Your Degree",
      duration: "Start - End Date",
      desc: "Your description",
      descBullets: [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
};
```

#### **Work Experience**
```javascript
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Your Role",
      company: "Company Name",
      companylogo: require("./assets/images/companyLogo.png"),
      date: "Start – End",
      desc: "Your description",
      descBullets: [
        "Responsibility 1",
        "Responsibility 2"
      ]
    }
  ]
};
```

#### **Projects Section**
```javascript
const bigProjects = {
  title: "Big Projects",
  subtitle: "YOUR SUBTITLE",
  projects: [
    {
      image: require("./assets/images/projectLogo.webp"),
      projectName: "Project Name",
      projectDesc: "Project Description",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://project-url.com/"
        }
      ]
    }
  ],
  display: true
};
```

#### **Contact Info**
```javascript
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Your message here",
  number: "+91-XXXXXXXXXX", // Your phone number
  email_address: "your.email@gmail.com"
};
```

---

### 3️⃣ Customize Colors (src/_globalColor.scss)

Open `src/_globalColor.scss` to change the color scheme:

```scss
// Main button colors
$buttonColor: #55198b;        // Primary button color
$buttonHover: #8c43ce;        // Button hover color

// Text colors
$titleColor: #000000;         // Titles in light mode
$textColor: #000000;          // Body text in light mode

// Accent colors
$skillsColor: #645beb;        // Skills section accent
```

**Color Scheme Suggestions:**
- **Purple Theme** (current): `#55198b`, `#8c43ce`
- **Blue Theme**: `#0066cc`, `#3399ff`
- **Green Theme**: `#00a896`, `#02c39a`
- **Orange Theme**: `#ff6b35`, `#f7931e`
- **Red Theme**: `#c1121f`, `#e63946`

---

### 4️⃣ Add Your Resume

1. Create a PDF of your resume
2. Save it as `resume.pdf`
3. Place it in `src/containers/greeting/`
4. Or use a Google Drive link in `portfolio.js`

---

### 5️⃣ Add Custom Images/Logos

Place your images in `src/assets/images/` and reference them:
```javascript
logo: require("./assets/images/yourImage.png")
```

**Recommended images to add:**
- Company logos (for work experience)
- School/University logos (for education)
- Project screenshots/logos

---

## 🚀 Running Your Portfolio

### Development Mode
```bash
npm start
```
This will open http://localhost:3000 in your browser.

### Build for Production
```bash
npm run build
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Update `package.json`:
   ```json
   "homepage": "https://AshishOP.github.io/GitPortfolio"
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

### Option 2: Netlify
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `build`

### Option 3: Vercel
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy automatically

---

## 🎨 Advanced Customization

### Hide Sections You Don't Need
Set `display: false` in any section:
```javascript
const talkSection = {
  // ...
  display: false  // This will hide the talks section
};
```

### Change Animation Duration
```javascript
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000  // Change this (milliseconds)
};
```

### Disable Splash Screen
```javascript
const splashScreen = {
  enabled: false,  // Set to false
  // ...
};
```

---

## 📱 Social Media Integration

### Twitter Timeline
```javascript
const twitterDetails = {
  userName: "your_twitter_handle",  // Without @
  display: true
};
```

### Medium Blogs
In `.env` file:
```env
MEDIUM_USERNAME = "your_medium_username"
```

In `portfolio.js`:
```javascript
const blogSection = {
  displayMediumBlogs: "true",  // Fetches from Medium
  display: true
};
```

---

## 🐛 Common Issues & Solutions

### Issue: GitHub section not showing
**Solution:** Make sure you've set up the `.env` file with a valid GitHub token.

### Issue: Images not loading
**Solution:** Make sure images are in `src/assets/images/` and use `require()`:
```javascript
logo: require("./assets/images/myImage.png")
```

### Issue: Colors not changing
**Solution:** After editing `_globalColor.scss`, restart the dev server (Ctrl+C, then `npm start`).

---

## 📚 Font Awesome Icons

Find icons at: https://fontawesome.com/icons

Use the class name in skills:
```javascript
{
  skillName: "python",
  fontAwesomeClassname: "fab fa-python"  // Copy from Font Awesome
}
```

---

## 🎯 Next Steps

1. ✅ Update `.env` with your GitHub token and username
2. ✅ Customize `src/portfolio.js` with your information
3. ✅ Change colors in `src/_globalColor.scss`
4. ✅ Add your resume and images
5. ✅ Test locally with `npm start`
6. ✅ Deploy to GitHub Pages or Netlify

---

## 💡 Tips

- Start with the greeting and social links
- Add sections gradually (education, work, projects)
- Test after each major change
- Use high-quality images (PNG/WEBP)
- Keep descriptions concise and impactful
- Update regularly with new projects and achievements

---

## 🆘 Need Help?

- Check the original repository: https://github.com/saadpasta/developerFolio
- Open an issue on GitHub
- Review the documentation in the README.md

---

**Happy Customizing! 🎉**
