# Contributing Guidelines

Thank you for contributing to the Intern Practice App! This document outlines the guidelines and best practices for contributing to this project.

## 🎯 Code of Conduct

- Be respectful and supportive of your team members
- Ask questions if you're unsure about something
- Provide constructive feedback during code reviews
- Communicate clearly and professionally
- Help each other learn and grow

## 📋 Before You Start

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd intern-practice-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create your feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Understand your task**:
   - Read the README.md thoroughly
   - Review your assigned component's TODO comments
   - Check the design guidelines for styling

## 🔄 Git Workflow

### Creating Commits

Write clear, descriptive commit messages using the format:

```
<type>: <description>

<optional body>
```

**Types**:
- `feat`: A new feature
- `fix`: A bug fix
- `style`: CSS changes or code formatting
- `refactor`: Code refactoring without new features
- `docs`: Documentation changes

**Examples**:
```bash
git commit -m "feat: Add header component with navigation"
git commit -m "style: Update feature card hover effects"
git commit -m "fix: Fix responsive layout on mobile"
```

### Push and Pull Request

1. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub with:
   - Clear title describing the changes
   - Description of what you've done
   - Reference to the related issue (#issue-number)
   - Screenshots or demos if applicable

3. **PR Template**:
   ```markdown
   ## Description
   Brief description of the changes

   ## Type of Change
   - [ ] New feature
   - [ ] Bug fix
   - [ ] Styling update

   ## Related Issue
   Fixes #issue-number

   ## How to Test
   Steps to verify the changes

   ## Screenshots/Demo
   If applicable, add screenshots or test results

   ## Checklist
   - [ ] Code tested locally
   - [ ] No console errors
   - [ ] Responsive design verified
   - [ ] Follows project conventions
   - [ ] Updated comments if needed
   ```

## 💻 Coding Standards

### React Components

1. **File naming**: Use PascalCase for component files (e.g., `Header.jsx`, `Features.jsx`)
2. **Function components**: Always use functional components with hooks
3. **Props**: Document props with comments
4. **JSX**: Keep JSX clean and readable

**Example**:
```jsx
import React from 'react'
import '../styles/Header.css'

/**
 * Header component with navigation
 * @returns {JSX.Element} The header component
 */
function Header() {
  return (
    <header className="header">
      {/* Navigation content */}
    </header>
  )
}

export default Header
```

### CSS/Styling

1. **File naming**: Use kebab-case for CSS files (e.g., `header.css`, `features.css`)
2. **Class naming**: Use kebab-case for class names (e.g., `.feature-card`, `.footer-column`)
3. **Organization**: Group related styles together
4. **Comments**: Add comments for complex styles
5. **Avoid**: Inline styles, !important flags

**Example**:
```css
/* Header Component Styles */
.header {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  display: flex;
  gap: 2rem;
}

.header__link {
  transition: color 0.3s ease;
}

.header__link:hover {
  color: #3498db;
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }
}
```

## 🔍 Code Review Process

### Submitting for Review

1. Create a Pull Request with clear description
2. Ensure all checks pass (no errors in console)
3. Request review from team members
4. Link to the related GitHub issue

### Reviewing Others' Code

1. **Be constructive**: Suggest improvements politely
2. **Praise good work**: Acknowledge what was done well
3. **Ask questions**: If something is unclear, ask
4. **Test locally**: Check out the branch and test
5. **Suggest, don't demand**: Use "consider" or "suggest" language

**Review Checklist**:
- [ ] Code works as intended
- [ ] No console errors or warnings
- [ ] Responsive design verified
- [ ] Follows project conventions
- [ ] Comments are clear
- [ ] No unnecessary code
- [ ] Performance is acceptable

## 🧪 Testing Your Code

Before creating a Pull Request:

1. **Run the development server**:
   ```bash
   npm start
   ```

2. **Test your component**:
   - Does it render correctly?
   - Do all interactive elements work?
   - Are styles applied properly?

3. **Test responsiveness**:
   - Desktop (1920px+)
   - Tablet (768px)
   - Mobile (320px)

4. **Check the console**:
   - No errors
   - No warnings
   - No unused variables

5. **Cross-browser testing**:
   - Chrome/Edge
   - Firefox
   - Safari

## 📝 Documentation

### Comments

Add comments for:
- Complex logic
- Why something was done a certain way
- Non-obvious solutions

```jsx
// Toggle between mobile and desktop navigation
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
```

### README Updates

If you make significant changes, update the README.md accordingly.

## 🚀 Deployment

Once your PR is merged to main:
1. Your code will be part of the final deliverable
2. The app will be built and deployed
3. Celebrate your contribution! 🎉

## ❌ Things to Avoid

- ❌ Committing node_modules or dist folder
- ❌ Hardcoding values (use constants or props)
- ❌ Using var (use let or const)
- ❌ Console.log in production code
- ❌ Mixing formatted and unformatted code
- ❌ Very long functions (split into smaller ones)
- ❌ Ignoring console errors or warnings

## ✅ Checklist Before Creating PR

- [ ] Branch created from latest main
- [ ] Code follows conventions
- [ ] No console errors/warnings
- [ ] Responsive design tested
- [ ] Commits have clear messages
- [ ] PR description is clear
- [ ] Related issue is referenced
- [ ] At least one team member will review

## 🆘 Help and Support

### If You're Stuck:

1. Check the TODO comments in your component
2. Review the design guidelines in README.md
3. Look at similar components for patterns
4. Ask your team members
5. Search for solutions online
6. Check React documentation

### Resources:

- [React Documentation](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [Git Documentation](https://git-scm.com/doc)

## 🎓 Learning Resources

- **React**: https://react.dev/learn
- **CSS Grid**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- **Flexbox**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
- **Git Workflow**: https://guides.github.com/introduction/flow/

## 📞 Questions?

If you have questions:
1. Post in your team chat
2. Create an issue with the `question` label
3. Ask during team standup
4. Reach out to your mentor

---

**Thank you for contributing! Your work helps the team learn and grow together. 🚀**

*Last Updated: April 2026*
