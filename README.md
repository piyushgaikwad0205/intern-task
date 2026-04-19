# Intern Practice App - React Development Assignment

Welcome to the Intern Practice App! This project is designed to help you practice Git workflows, React development, and collaborative coding. You'll be working together to build a complete webpage using React and JavaScript.

## 📋 Project Overview

This is a simple React-based webpage with three main components that need to be developed:
- **Header/Navigation** - Sanket
- **Features Section** - Ashwariya
- **Footer** - Sanika

Each intern will work on their assigned component, practice creating branches, committing code, and submitting pull requests for code review.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Git
- A code editor (VS Code recommended)
- GitHub account

### Initial Setup

1. **Clone the repository** (once it's pushed to GitHub):
```bash
git clone <repository-url>
cd intern-practice-app
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

The app will open at `http://localhost:3000`

---

## 👥 Task Assignments

### ✅ SANKET: Header/Navigation Component

**File to Edit**: `src/components/Header.jsx` and `src/styles/Header.css`

**Objectives**:
1. Complete the Header component with proper styling
2. Create a responsive navigation menu
3. Implement hover effects on links
4. Make it look professional and branded

**Requirements**:
- [ ] Add a company logo/name in the header
- [ ] Create navigation items: Home, About, Services, Contact
- [ ] Style with dark background (#2c3e50) and white text
- [ ] Make navigation flex responsive
- [ ] Add underline hover effect on links
- [ ] Ensure mobile responsiveness (stack on smaller screens)

**Git Workflow**:
```bash
# Create a feature branch
git checkout -b feature/header-component

# Make your changes to Header.jsx and Header.css

# Stage your changes
git add src/components/Header.jsx src/styles/Header.css

# Commit with a meaningful message
git commit -m "feat: Complete header component with navigation"

# Push to GitHub
git push origin feature/header-component

# Create a Pull Request on GitHub for code review
```

**Acceptance Criteria**:
- Header displays correctly without errors
- Navigation is clickable and styled
- Mobile responsive (works on 320px+ screens)
- Code follows React and CSS best practices
- All TODO comments have been addressed

---

### ✅ ASHWARIYA: Features Section Component

**File to Edit**: `src/components/Features.jsx` and `src/styles/Features.css`

**Objectives**:
1. Enhance the Features/Services section with proper cards
2. Create an attractive grid layout
3. Add smooth animations and hover effects
4. Make it visually appealing and interactive

**Requirements**:
- [ ] Keep the 3 feature cards (or add more if desired)
- [ ] Style each card with proper spacing and shadows
- [ ] Implement hover effect (scale up to 1.05)
- [ ] Create a responsive grid (3 columns desktop, 1 column mobile)
- [ ] Ensure icons are properly displayed
- [ ] Add smooth CSS transitions

**Git Workflow**:
```bash
# Create a feature branch
git checkout -b feature/features-section

# Make your changes to Features.jsx and Features.css

# Stage your changes
git add src/components/Features.jsx src/styles/Features.css

# Commit with a meaningful message
git commit -m "feat: Add styled features section with hover effects"

# Push to GitHub
git push origin feature/features-section

# Create a Pull Request on GitHub for code review
```

**Acceptance Criteria**:
- Feature cards render correctly
- Grid layout is responsive
- Hover effects work smoothly
- Professional appearance
- All TODO comments addressed
- Proper spacing and alignment

---

### ✅ SANIKA: Footer Component

**File to Edit**: `src/components/Footer.jsx` and `src/styles/Footer.css`

**Objectives**:
1. Complete the Footer component with multiple columns
2. Add social media links
3. Create proper styling and layout
4. Ensure responsiveness

**Requirements**:
- [ ] Create 3 footer columns with links (Company, Resources, Connect)
- [ ] Add social media links (Facebook, Twitter, LinkedIn, GitHub)
- [ ] Style with dark background (#2c3e50) matching the header
- [ ] Create a divider line before copyright
- [ ] Make footer links interactive with hover effects
- [ ] Responsive grid layout (3 columns desktop, 1 column mobile)
- [ ] Display copyright notice with current year

**Git Workflow**:
```bash
# Create a feature branch
git checkout -b feature/footer-component

# Make your changes to Footer.jsx and Footer.css

# Stage your changes
git add src/components/Footer.jsx src/styles/Footer.css

# Commit with a meaningful message
git commit -m "feat: Add complete footer with multiple columns"

# Push to GitHub
git push origin feature/footer-component

# Create a Pull Request on GitHub for code review
```

**Acceptance Criteria**:
- Footer displays all three columns
- Links are properly formatted and clickable
- Social media section is clearly visible
- Mobile responsive layout works
- Copyright notice displays correctly
- Professional styling and alignment

---

## 📝 Git Workflow Checklist

Each intern should follow this workflow:

1. **Create a branch** from main for your task
2. **Make changes** to your assigned component
3. **Test locally** with `npm start`
4. **Stage changes** with `git add`
5. **Commit changes** with a meaningful message
6. **Push to GitHub** with `git push`
7. **Create a Pull Request** (PR)
8. **Request code review** from team members
9. **Address feedback** if any
10. **Merge PR** once approved

### Git Commands Reference

```bash
# Check current branch
git branch

# Create and switch to new branch
git checkout -b feature/your-feature-name

# Check status
git status

# Add changes
git add .
git add <specific-file>

# Commit changes
git commit -m "feat: Add description of changes"

# Push changes
git push origin feature/your-feature-name

# Pull latest changes
git pull origin main

# Switch branches
git checkout main
```

---

## 🎨 Design Guidelines

### Color Scheme
- Primary Dark: `#2c3e50` (Header, Footer)
- Light Background: `#f8f9fa` (Features section)
- Accent Color: `#3498db` (Links, highlights)
- Text Dark: `#333` (Body text)
- Text Light: `#666` (Secondary text)

### Typography
- Headers: Bold, larger font sizes
- Body: Clear, readable sans-serif (Segoe UI, Tahoma)
- Line height: 1.6 for readability

### Spacing
- Padding: 2rem for sections, 1rem for components
- Gap: 2rem between grid items
- Margin: Use consistent spacing throughout

### Responsiveness
- Desktop: Full width experience
- Tablet (768px): Adjusted layout
- Mobile: Single column with full width

---

## 📦 File Structure

```
intern-practice-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          (INTERN 1)
│   │   ├── Features.jsx        (INTERN 2)
│   │   └── Footer.jsx          (INTERN 3)
│   ├── styles/
│   │   ├── Header.css          (INTERN 1)
│   │   ├── Features.css        (INTERN 2)
│   │   └── Footer.css          (INTERN 3)
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧪 Testing Your Code

### Local Testing
1. Run `npm start` to start the dev server
2. Open `http://localhost:3000` in your browser
3. Test:
   - Component rendering
   - Responsive design (use browser DevTools)
   - Hover effects
   - Navigation functionality
   - No console errors

### Code Quality
- Keep code clean and readable
- Use meaningful variable names
- Comment complex logic
- Follow React best practices
- No unused imports or variables

---

## 💡 Learning Outcomes

By completing this assignment, you will learn:
- ✅ Git branching and merging workflows
- ✅ Creating React functional components
- ✅ CSS styling and responsive design
- ✅ Collaboration and code review process
- ✅ Best practices in component development
- ✅ Pull request creation and management
- ✅ Working with JSX and component props
- ✅ CSS Grid and Flexbox layouts

---

## 🤝 Collaboration

- **Be respectful** in code reviews
- **Communicate clearly** about changes
- **Test thoroughly** before creating a PR
- **Respond quickly** to review feedback
- **Ask questions** if something is unclear
- **Help each other** troubleshoot issues

---

## 📞 Support

If you encounter issues:
1. Check the GitHub Issues section
2. Ask questions in your team chat
3. Refer to the TODO comments in each component
4. Review the design guidelines above
5. Check React documentation: https://react.dev

---

## 🎯 Success Criteria

Your work will be evaluated on:
- ✅ Code quality and best practices
- ✅ Following git workflow correctly
- ✅ Completing all requirements
- ✅ Responsive and accessible design
- ✅ Professional appearance
- ✅ Clean commit history
- ✅ Proper pull request description
- ✅ Addressing code review feedback

---

## 📚 Resources

- **React Documentation**: https://react.dev
- **MDN Web Docs**: https://developer.mozilla.org
- **Git Documentation**: https://git-scm.com/doc
- **CSS Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Vite Documentation**: https://vitejs.dev

---

## ✨ Optional Enhancements (Extra Credit)

- Add animations when components load
- Implement smooth scroll behavior
- Add a "Contact Us" form to the footer
- Create additional components
- Add a dark mode toggle
- Implement search functionality
- Add image assets and icons

---

## 📄 License

This project is for educational purposes. All interns retain ownership of their code contributions.

---

**Good luck, interns! Happy coding! 🚀**

*Last Updated: April 2026*
