# Quick Start Guide for Interns

Welcome to Intern Practice App! 🚀 This guide will get you started in 5 minutes.

## ⚡ 5-Minute Setup

### 1. Clone the Repository (1 min)
```bash
git clone <repository-url>
cd intern-practice-app
```

### 2. Install Dependencies (2 min)
```bash
npm install
```

### 3. Start Development Server (1 min)
```bash
npm start
```

The app will automatically open at `http://localhost:3000`

### 4. Find Your Task (1 min)
- Go to GitHub Issues and find your assigned issue (search for your name)
- Read the task requirements carefully
- Note the files you need to edit

## 📖 Next Steps

1. **Read the README.md** - Full project overview and guidelines
2. **Check your assigned component's TODO comments** - They guide what to do
3. **Review CONTRIBUTING.md** - Git workflow and coding standards
4. **Start Coding!** - Create your feature branch and begin work

## 🔄 Basic Git Workflow

```bash
# Create your feature branch
git checkout -b feature/your-feature-name

# Make your changes (edit the JSX and CSS files)

# Check what changed
git status

# Stage your changes
git add src/components/YourComponent.jsx src/styles/YourComponent.css

# Commit with a message
git commit -m "feat: Complete your component description"

# Push to GitHub
git push origin feature/your-feature-name

# Go to GitHub and create a Pull Request
```

## 📝 Your Specific Task

### INTERN 1 - Header Component
**Files**: `src/components/Header.jsx` + `src/styles/Header.css`
**Time**: ~3-4 hours
**Key Skills**: React basics, CSS flexbox, responsive design

### INTERN 2 - Features Section  
**Files**: `src/components/Features.jsx` + `src/styles/Features.css`
**Time**: ~3-4 hours
**Key Skills**: CSS Grid, animations, styling

### INTERN 3 - Footer Component
**Files**: `src/components/Footer.jsx` + `src/styles/Footer.css`
**Time**: ~3-4 hours
**Key Skills**: Multi-column layout, responsive design

## 🎯 What You'll Learn

✅ Git branching and pull requests  
✅ React component basics  
✅ CSS styling and responsiveness  
✅ Code review process  
✅ Working with teams  

## 💻 Development Tips

1. **Keep your dev server running** while coding:
   ```bash
   npm start
   ```

2. **Check the browser console** for any errors:
   - Right-click → Inspect → Console tab

3. **Test on mobile** using DevTools:
   - Press F12 → Toggle device toolbar (top-left)

4. **Read the TODO comments** in your component file - they guide you!

5. **Look at the design guidelines** in README.md for colors and spacing

## ❓ Got Questions?

1. Check **README.md** section "Resources"
2. Look at **TODO comments** in your component
3. Ask your team members
4. Check the **CONTRIBUTING.md** for common patterns

## ✨ What a Good Commit Message Looks Like

✅ Good:
```
git commit -m "feat: Add header navigation with hover effects"
git commit -m "style: Update feature card responsiveness"
```

❌ Bad:
```
git commit -m "update"
git commit -m "stuff"
```

## 🧪 Before Creating Your Pull Request

- [ ] Run `npm start` and test your component
- [ ] Check mobile responsiveness (F12 → device toolbar)
- [ ] Look at browser console (F12 → Console) - no red errors?
- [ ] Commit with clear message
- [ ] Push to GitHub

## 📱 Testing Responsive Design

1. Press **F12** in browser
2. Click the **device toolbar icon** (top left)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px+

Your component should look good on all sizes!

## 🚀 Create Your First Pull Request

Once your code is pushed:

1. Go to GitHub
2. Click "Pull Requests" tab
3. Click "New Pull Request"
4. Select your feature branch → main
5. Write a description:
   ```
   ## Description
   Completed the [Your Component] component
   
   ## What I did
   - Added styling
   - Made it responsive
   - Added hover effects
   
   ## How to test
   - Run `npm start`
   - Check on mobile
   - Hover over elements
   ```
6. Request review from team members

## 📚 Useful Links

- **React Docs**: https://react.dev
- **CSS Tricks**: https://css-tricks.com
- **Git Docs**: https://git-scm.com
- **Your README**: See `README.md` in project

## 🎓 Learning Checklist

- [ ] Set up your development environment
- [ ] Cloned the repository
- [ ] Understood your task
- [ ] Created your feature branch
- [ ] Made your code changes
- [ ] Tested locally
- [ ] Created your first commit
- [ ] Pushed to GitHub
- [ ] Created your first PR
- [ ] Got code review feedback
- [ ] Updated code based on feedback
- [ ] Merged your PR
- [ ] Celebrated your success! 🎉

## 🆘 Troubleshooting

### "npm install fails"
```bash
# Delete node_modules and try again
rm -r node_modules
npm install
```

### "npm start doesn't work"
```bash
# Check node version (should be v16+)
node --version

# Try different port
# Edit vite.config.js and change port to 3001
```

### "Git branch issues"
```bash
# Check what branch you're on
git branch

# Check status of changes
git status

# If confused, ask your mentor!
```

## 💡 Pro Tips

1. **Commit often** - Don't wait until the end to commit
2. **Write clear messages** - Future you will thank current you
3. **Test as you code** - Don't test everything at the end
4. **Ask for help early** - Don't suffer silently
5. **Review your own code first** - Before asking others to review

## 🎯 Your Goal

Complete your component so that:
- ✅ It works without errors
- ✅ It looks good on all device sizes
- ✅ Code is clean and readable
- ✅ Git history is clear
- ✅ Team can review and learn from your code

## 🚀 Ready to Start?

1. ✅ Repository cloned?
2. ✅ Dependencies installed?
3. ✅ Dev server running?
4. ✅ Found your task?
5. ✅ Ready to code?

**Let's go!** 🎓

---

**Questions?** Ask your mentor or team members!

**Stuck?** Check the README.md or CONTRIBUTING.md

**Good luck!** 🚀

*Last Updated: April 2026*
