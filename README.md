# Jeel Patel - Portfolio Website

A modern, visually stunning dark-themed portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and experience as a Computer Programming & Analysis student.

## 🎨 Features

✨ **Dark Theme Design** - Modern gradient-based dark theme with cyan and pink accents
📱 **Fully Responsive** - Looks amazing on desktop, tablet, and mobile devices
⚡ **Smooth Animations** - Beautiful transitions and scroll effects
🎯 **Multiple Pages** - Home, About, Projects, Skills, and Contact pages
🎨 **Gradient Effects** - Eye-catching gradients throughout the design
📊 **Skill Progress Bars** - Visual representation of skill levels
🔗 **Social Media Links** - Easy connection on GitHub, LinkedIn, and Twitter
📨 **Contact Form** - Functional contact form on the Contact page

## 📁 File Structure

```
Portfolio/
├── index.html          # Home page (main landing page)
├── about.html          # About me page
├── projects.html       # Projects showcase page
├── skills.html         # Technical skills page
├── contact.html        # Contact information & form
├── styles.css          # Main stylesheet (dark theme)
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open in Browser**: Simply double-click `index.html` or open it in your favorite browser
2. **No Dependencies**: This is a static website - no build tools or server required!
3. **Host Online**: Upload all files to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## 🎨 Customization Guide

### 1. Update Personal Information

**In all HTML files**, replace the following:
- `Jeel Patel` → Your name
- `jeel.patel@email.com` → Your email
- `+1 (234) 567-8900` → Your phone number
- `Your City, Your Country` → Your location

### 2. Update Navigation Links

In each HTML file, update social media links:
```html
<a href="https://github.com/YOUR-USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">
<a href="https://twitter.com/YOUR-HANDLE" target="_blank">
```

### 3. Customize Colors

Edit the color variables in `styles.css` (lines 5-12):
```css
:root {
    --primary-color: #00d4ff;    /* Main cyan color */
    --secondary-color: #ff006e;  /* Pink accent */
    --bg-dark: #0a0e27;          /* Dark background */
    --accent-3: #6366f1;         /* Purple accent */
    /* ...modify as needed... */
}
```

### 4. Update Project Information

In `projects.html`, customize the project cards:
- **Project Title** - Change the h3 text
- **Description** - Update the project description
- **Tags** - Modify technology tags
- **Links** - Update GitHub and live demo links
- **Icon** - Change the emoji/icon in `<i class="fas fa-xxx"></i>`

### 5. Update Skills

In `skills.html`, modify skill categories and proficiency levels:
```html
<div class="skill-item">
    <div class="skill-name">
        <span>Skill Name</span>
        <span>85%</span>  <!-- Change percentage -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### 6. Add Profile Picture

Replace the placeholder image in `about.html`:
```html
<img src="your-image.jpg" alt="Jeel Patel">
```
Just add your image file to the portfolio folder.

### 7. Update About Section

In `about.html`, customize:
- Personal bio and description
- Features/highlights about yourself
- Education information
- Relevant coursework

### 8. Contact Information

In `contact.html`, update:
- Email address
- Phone number
- Location
- Social media handles and URLs

## 🎨 Color Palette

The portfolio uses a professional dark theme with vibrant accents:

- **Primary Background**: `#0a0e27` (Dark blue)
- **Accent 1**: `#00d4ff` (Cyan) - Primary highlights
- **Accent 2**: `#ff006e` (Pink) - Secondary highlights
- **Accent 3**: `#6366f1` (Purple) - Tertiary accents
- **Text Light**: `#e0e0e0` (Light gray)
- **Text Muted**: `#a0a0a0` (Medium gray)

## 🔧 Advanced Customization

### Change Font Family

In `styles.css`, line 37:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Modify Animation Speed

Adjust animation durations in `styles.css` and `script.js`:
```css
transition: all 0.3s ease; /* Change 0.3s to your preferred duration */
```

### Add More Pages

1. Create a new HTML file (e.g., `blog.html`)
2. Copy the structure from an existing page
3. Add navigation link in all pages:
```html
<li><a href="blog.html">Blog</a></li>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔗 Font Icons

This portfolio uses Font Awesome 6.4.0 for icons. Find more icons at:
https://fontawesome.com/icons

Current icon categories used:
- `fas fa-code` - Code icon
- `fas fa-rocket` - Rocket icon
- `fab fa-github` - GitHub logo
- `fab fa-linkedin` - LinkedIn logo
- `fab fa-twitter` - Twitter logo
- `fas fa-envelope` - Email icon

## 📞 Getting Help

If you need to:
- **Change colors**: Edit `:root` variables in `styles.css`
- **Add sections**: Copy an existing section and modify the content
- **Improve performance**: Minify CSS/JS files for faster loading
- **Add functionality**: Enhance `script.js` with additional features

## 🌐 Deployment

### GitHub Pages (Free)
1. Create a repository named `username.github.io`
2. Push all portfolio files
3. Your site will be live at `https://username.github.io`

### Netlify (Free)
1. Connect your GitHub repository
2. Deploy with one click
3. Get a free custom domain

### Vercel (Free)
1. Import your GitHub repository
2. Deploy automatically
3. Get SSL certificate for free

## 📝 License

This portfolio template is open source and free to use. Feel free to modify and personalize it!

## ✨ Features Included

- ✅ Smooth scroll navigation
- ✅ Responsive design (mobile-first)
- ✅ Dark mode (always on)
- ✅ Form validation
- ✅ Scroll animations
- ✅ Skill progress bars
- ✅ Project showcase
- ✅ Social media integration
- ✅ Professional typography
- ✅ Hover effects and transitions

## 🎯 Next Steps

1. **Replace placeholder content** with your actual information
2. **Add your profile picture** to the about section
3. **Update projects** with your actual work
4. **Customize colors** to match your brand
5. **Test on mobile** to ensure responsiveness
6. **Deploy** to your preferred hosting platform

---

**Made with ❤️ for ambitious developers like you!**

Happy coding! 🚀
