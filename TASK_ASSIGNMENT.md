# Task Assignments for GitHub Issues

This document provides templates for creating GitHub Issues for each intern's task. Copy and paste these into your GitHub repository's Issues section.

---

## Issue 1: SANKET - Build Header/Navigation Component

### Title
`[SANKET] Build Header/Navigation Component`

### Description

```markdown
## Task Overview
Build and style the Header component with a responsive navigation menu.

## What You'll Do
- Create a professional header section
- Add a navigation menu with Home, About, Services, Contact links
- Style it with dark theme (#2c3e50 background)
- Make it fully responsive for mobile devices
- Add hover effects on navigation links

## Files to Modify
- `src/components/Header.jsx`
- `src/styles/Header.css`

## Requirements Checklist
- [ ] Header component renders without errors
- [ ] Company name/logo displayed prominently
- [ ] Navigation links are properly styled
- [ ] Mobile responsive (works on 320px+ screens)
- [ ] Hover effects on links work smoothly
- [ ] No console errors or warnings
- [ ] Code follows React best practices

## Branch Name
`feature/header-component`

## Resources
- Refer to TODO comments in Header.jsx
- Check Header.css for styling guidance
- See README.md for design guidelines

## Getting Started
1. Create a new branch: `git checkout -b feature/header-component`
2. Edit Header.jsx and Header.css
3. Test with `npm start`
4. Commit and push your changes
5. Create a Pull Request

## Definition of Done
- Code is tested locally
- PR is created with proper description
- At least one team member reviews the code
- All feedback is addressed
- PR is merged to main
```

### Labels
`Intern Task`, `Header`, `React`, `First-Time`

### Assignee
`Sanket`

---

## Issue 2: ASHWARIYA - Build Features Section

### Title
`[ASHWARIYA] Build Features Section with Cards`

### Description

```markdown
## Task Overview
Build and style the Features section with attractive feature cards and hover animations.

## What You'll Do
- Style the feature cards with proper spacing and shadows
- Create a responsive grid layout (3 columns on desktop, 1 on mobile)
- Add smooth hover effects (scale animation)
- Enhance the visual appearance of the features section
- Ensure proper icon display and styling

## Files to Modify
- `src/components/Features.jsx`
- `src/styles/Features.css`

## Requirements Checklist
- [ ] Feature cards are properly styled
- [ ] Grid layout is responsive
- [ ] Hover effects work smoothly (scale 1.05)
- [ ] Cards have proper shadows and borders
- [ ] Mobile layout displays correctly (1 column)
- [ ] Icons are prominently displayed
- [ ] Professional appearance with good spacing

## Branch Name
`feature/features-section`

## Resources
- Refer to TODO comments in Features.jsx
- Check Features.css for styling patterns
- See README.md for color scheme and design guidelines

## Getting Started
1. Create a new branch: `git checkout -b feature/features-section`
2. Edit Features.jsx and Features.css
3. Test with `npm start`
4. Commit and push your changes
5. Create a Pull Request

## Definition of Done
- All feature cards render correctly
- Responsive design works on all screen sizes
- Hover animations are smooth and professional
- No console errors
- PR is created and reviewed
```

### Labels
`Intern Task`, `Features`, `CSS`, `React`

### Assignee
`Ashwariya`

---

## Issue 3: SANIKA - Build Footer Component

### Title
`[SANIKA] Build Footer Component with Links and Social Media`

### Description

```markdown
## Task Overview
Build and style the Footer component with multiple columns, social media links, and copyright notice.

## What You'll Do
- Complete the footer layout with 3 columns
- Add links for Company, Resources, and Connect sections
- Add social media links (Facebook, Twitter, LinkedIn, GitHub)
- Style with professional dark theme matching the header
- Make it responsive for all device sizes
- Display a copyright notice with the current year

## Files to Modify
- `src/components/Footer.jsx`
- `src/styles/Footer.css`

## Requirements Checklist
- [ ] Footer displays all 3 columns
- [ ] All links are properly styled and clickable
- [ ] Social media section is clearly visible
- [ ] Footer is sticky at bottom of page
- [ ] Mobile responsive (1 column on mobile)
- [ ] Copyright notice shows correct year
- [ ] Hover effects on links work properly
- [ ] Matches header styling (#2c3e50 background)

## Branch Name
`feature/footer-component`

## Resources
- Refer to TODO comments in Footer.jsx
- Check Footer.css for styling patterns
- See README.md for design guidelines and color scheme

## Getting Started
1. Create a new branch: `git checkout -b feature/footer-component`
2. Edit Footer.jsx and Footer.css
3. Test with `npm start`
4. Commit and push your changes
5. Create a Pull Request

## Definition of Done
- Footer displays correctly at bottom
- All columns and links are visible
- Responsive design works well
- Professional appearance
- PR created, reviewed, and merged
```

### Labels
`Intern Task`, `Footer`, `React`, `CSS`

### Assignee
`Sanika`

---

## 🎯 ADDITIONAL TASKS

### BONUS TASK 1 (Sanket): Mobile Menu Enhancement

**Title**: `[SANKET] Add Mobile Menu Toggle Functionality`

**Description**:
```markdown
## Task Overview
Enhance the header with a mobile-friendly hamburger menu toggle.

## What You'll Do
- Create a hamburger menu icon for mobile screens
- Implement a toggle state using React hooks
- Show/hide navigation when hamburger is clicked
- Add smooth animations for menu appearance
- Close menu when a nav link is clicked
- Ensure accessibility (keyboard navigation)

## Files to Modify
- `src/components/Header.jsx` (add state and toggle logic)
- `src/styles/Header.css` (add hamburger styles)

## Requirements
- [ ] Hamburger menu appears only on mobile (< 768px)
- [ ] Menu smoothly slides in/out
- [ ] All navigation links clickable in mobile menu
- [ ] Menu auto-closes when nav link clicked
- [ ] Keyboard accessible (Enter/Space to toggle)
- [ ] No console errors
- [ ] Maintains styling consistency

## Branch Name
`feature/mobile-menu-toggle`
```

**Labels**: `Bonus Task`, `React`, `Mobile-First`

---

### BONUS TASK 2 (Sanket): Add Logo Component

**Title**: `[SANKET] Create Logo/Branding Component`

**Description**:
```markdown
## Task Overview
Create a reusable Logo component to enhance header branding.

## What You'll Do
- Create a new file: `src/components/Logo.jsx`
- Design a simple text-based or SVG logo
- Make it clickable (links to home)
- Add proper sizing and alignment
- Keep it responsive

## Requirements
- [ ] Logo component is reusable
- [ ] Logo appears in header
- [ ] Proper sizing on all screens
- [ ] Clickable to navigate home
- [ ] Professional appearance
- [ ] No broken links

## Branch Name
`feature/logo-component`
```

**Labels**: `Bonus Task`, `Component`, `React`

---

### BONUS TASK 3 (Ashwariya): Add Search Feature

**Title**: `[ASHWARIYA] Add Search Functionality to Header`

**Description**:
```markdown
## Task Overview
Add a search input and functionality to the header.

## What You'll Do
- Add a search input field in the header
- Create a search handler function
- Display search results in a dropdown or modal
- Style the search component professionally
- Make it responsive on mobile

## Files to Modify
- `src/components/Header.jsx`
- `src/styles/Header.css`

## Requirements
- [ ] Search input visible and functional
- [ ] Placeholder text is helpful
- [ ] Search results display
- [ ] Responsive design
- [ ] Keyboard accessible
- [ ] Smooth animations

## Branch Name
`feature/header-search`
```

**Labels**: `Bonus Task`, `Feature`, `React`

---

### BONUS TASK 4 (Ashwariya): Feature Comparison Table

**Title**: `[ASHWARIYA] Create Feature Comparison Table`

**Description**:
```markdown
## Task Overview
Add a comparison table showing feature differences and benefits.

## What You'll Do
- Create a new component: `src/components/FeatureComparison.jsx`
- Display features in a table format
- Add checkmarks for included features
- Make table responsive (scrollable on mobile)
- Add visual distinction between feature tiers

## Requirements
- [ ] Table displays all features clearly
- [ ] Responsive on all devices
- [ ] Professional styling
- [ ] Easy to read and understand
- [ ] Properly formatted data

## Branch Name
`feature/feature-comparison`
```

**Labels**: `Bonus Task`, `Component`, `React`

---

### BONUS TASK 5 (Ashwariya): Card Animation Enhancement

**Title**: `[ASHWARIYA] Add Advanced Card Animations`

**Description**:
```markdown
## Task Overview
Enhance feature cards with advanced CSS animations and transitions.

## What You'll Do
- Add entrance animations (fade in, slide up)
- Create parallax or 3D flip effects on hover
- Add loading animations
- Implement smooth transitions between states
- Add animation delays for staggered effect

## Files to Modify
- `src/styles/Features.css`
- Optional: `src/components/Features.jsx`

## Requirements
- [ ] Animations are smooth (60fps)
- [ ] No performance issues
- [ ] Animations enhance user experience
- [ ] Accessible (respects prefers-reduced-motion)
- [ ] Loading states display properly

## Branch Name
`feature/advanced-animations`
```

**Labels**: `Bonus Task`, `CSS`, `Animation`

---

### BONUS TASK 6 (Sanika): Newsletter Signup Form

**Title**: `[SANIKA] Add Newsletter Signup in Footer`

**Description**:
```markdown
## Task Overview
Add a newsletter subscription form to the footer.

## What You'll Do
- Create an email input field
- Add subscribe button
- Include form validation
- Display success/error messages
- Make it responsive and accessible

## Files to Modify
- `src/components/Footer.jsx`
- `src/styles/Footer.css`

## Requirements
- [ ] Email validation works
- [ ] Form submission handled
- [ ] Success message displays
- [ ] Error handling implemented
- [ ] Responsive design
- [ ] Accessible form (proper labels)

## Branch Name
`feature/newsletter-form`
```

**Labels**: `Bonus Task`, `Form`, `React`

---

### BONUS TASK 7 (Sanika): Social Media Integration

**Title**: `[SANIKA] Enhance Social Media Links with Icons`

**Description**:
```markdown
## Task Overview
Upgrade social media links with proper icons and hover effects.

## What You'll Do
- Add Font Awesome icons (or similar) to social links
- Create custom hover effects
- Add tooltips with social media names
- Make links open in new tab
- Ensure proper accessibility

## Files to Modify
- `src/components/Footer.jsx`
- `src/styles/Footer.css`

## Requirements
- [ ] Icons display properly
- [ ] Hover effects smooth and professional
- [ ] Links open in new window
- [ ] Accessibility maintained
- [ ] No console errors
- [ ] Mobile responsive

## Branch Name
`feature/social-icons`
```

**Labels**: `Bonus Task`, `UX`, `Design`

---

### BONUS TASK 8 (Sanika): Footer Dark Mode Toggle

**Title**: `[SANIKA] Add Dark/Light Mode Toggle in Footer`

**Description**:
```markdown
## Task Overview
Create a dark/light mode toggle button in the footer.

## What You'll Do
- Add toggle button in footer
- Store preference in localStorage
- Change app theme colors
- Toggle between light and dark CSS
- Make toggle button accessible

## Files to Modify
- `src/components/Footer.jsx`
- `src/styles/Footer.css`
- `src/App.jsx` (optional)

## Requirements
- [ ] Toggle button works
- [ ] Theme preference saved
- [ ] All components adapt to theme
- [ ] Smooth transitions between themes
- [ ] No console errors
- [ ] Accessible toggle

## Branch Name
`feature/dark-mode-toggle`
```

**Labels**: `Bonus Task`, `Feature`, `React`

---

### BONUS TASK 9 (All): Documentation & Testing

**Title**: `[ALL] Code Comments and Documentation`

**Description**:
```markdown
## Task Overview
Add comprehensive comments and documentation to your code.

## What You'll Do
- Add JSDoc comments to all functions
- Document complex logic
- Add inline comments where needed
- Create code examples in comments
- Add component prop documentation

## Requirements
- [ ] All functions documented
- [ ] Clear explanations
- [ ] Examples provided
- [ ] Easy to understand
- [ ] Follows documentation standards

## Branch Name
`feature/documentation`
```

**Labels**: `Bonus Task`, `Documentation`

---

### BONUS TASK 10 (All): Performance Optimization

**Title**: `[ALL] Optimize Component Performance`

**Description**:
```markdown
## Task Overview
Optimize your component for better performance.

## What You'll Do
- Minimize re-renders using React.memo (if applicable)
- Optimize CSS (remove unused styles)
- Optimize images and assets
- Reduce bundle size where possible
- Test performance with DevTools

## Requirements
- [ ] No unnecessary re-renders
- [ ] CSS is clean and optimized
- [ ] Fast load times
- [ ] Good lighthouse scores
- [ ] No performance warnings

## Branch Name
`feature/performance-optimization`
```

**Labels**: `Bonus Task`, `Performance`

---

## How to Create These Issues on GitHub

1. Go to your repository on GitHub
2. Click "Issues" tab
3. Click "New Issue"
4. Copy the **Title** from the appropriate section above
5. Copy the **Description** (everything inside the markdown code block)
6. Add the **Labels** if desired
7. Assign to the appropriate intern
8. Click "Submit new issue"

## Tips for Interns

### Primary Tasks
- **Read the task requirements carefully** before starting
- **Check the TODO comments** in your assigned component files
- **Test locally** using `npm start` before creating a PR
- **Write meaningful commit messages** following the git workflow
- **Ask questions** if anything is unclear
- **Review your own code** before requesting review from others

### Bonus Tasks (Optional - After Primary Task Completion)
- Try bonus tasks to deepen your React and CSS skills
- Work on tasks that interest you most
- Each bonus task is independent and can be done in any order
- Bonus tasks are great for your portfolio
- Don't rush - quality matters more than quantity

### Task Difficulty Levels
- 🟢 **Basic**: Primary tasks (3-4 hours each)
- 🟡 **Intermediate**: Most bonus tasks (4-6 hours each)
- 🔴 **Advanced**: Multi-component tasks like dark mode

---

*Last Updated: April 2026*
*Interns: Sanket | Ashwariya | Sanika*
