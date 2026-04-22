import React from 'react'
import '../styles/Footer.css'

/**
 * TASK FOR INTERN 3 (Git Practice - Footer Component)
 * 
 * TODO: Complete this Footer component
 * 
 * Requirements:
 * 1. Create a footer section with:
 *    - Company/Section links (3 columns minimum)
 *    - Social media icons/links (Facebook, Twitter, LinkedIn, GitHub)
 *    - Copyright notice at the bottom
 * 2. Column structure:
 *    - Column 1: Company Links (About, Blog, Careers, Contact)
 *    - Column 2: Resources (Documentation, FAQ, Support, Terms)
 *    - Column 3: Connect (Social media links)
 * 3. Style the footer with:
 *    - Background color: #2c3e50 (match header)
 *    - Text color: white
 *    - Padding: 3rem 2rem 1rem
 *    - Grid layout (3 columns on desktop, 1 column on mobile)
 * 4. Add a divider line before copyright
 * 5. Make links interactive (hover effect)
 * 
 * INSTRUCTIONS:
 * - Create a new branch: git checkout -b feature/footer-component
 * - Implement the component in this file
 * - Commit your changes: git commit -m "feat: Add footer component"
 * - Create a Pull Request on GitHub
 * - Ask for code review
 */

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* TODO: Add footer columns with links */}
        <div className="footer-column">
          <h4>Companys</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#github">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
