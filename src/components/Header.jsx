import React from 'react'
import '../styles/Header.css'

/**
 * TASK FOR INTERN 1 (Git Practice - Header Component)
 * 
 * TODO: Complete this Header/Navigation component
 * 
 * Requirements:
 * 1. Add a logo or company name in the header
 * 2. Create a navigation menu with links: Home, About, Services, Contact
 * 3. Style it with:
 *    - Background color: #2c3e50 (dark blue-grey)
 *    - Text color: white
 *    - Padding: 1rem 2rem
 *    - Display flex with space-between
 * 4. Make the navigation items responsive (use flexbox)
 * 5. Add hover effects on navigation links (underline on hover)
 * 
 * INSTRUCTIONS:
 * - Create a new branch: git checkout -b feature/header-component
 * - Implement the component in this file
 * - Commit your changes: git commit -m "feat: Complete header component"
 * - Create a Pull Request on GitHub
 * - Ask for code review
 */

function Header() {
  return (
    <header className="header">
      {/* TODO: Replace this with actual header content */}
      <h1>Company Logo/Name Here</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
