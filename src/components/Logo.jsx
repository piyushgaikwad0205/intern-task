import React from 'react'

/**
 * Logo Component — Progrentures Branding
 *
 * @component
 * @description A professional Logo/Branding component that renders the
 * Progrentures Solutions™ logo. Features a stylized "P" icon in a rounded
 * square with the company name beside it. Clicking the logo smoothly
 * scrolls the user back to the top of the page.
 *
 * Design reference: Based on the official Progrentures brand identity —
 * white stylized "P" on a dark rounded square, with the company name
 * "Progrentures" and sub-label "Solutions™" next to it.
 *
 * @example
 * // Used inside Header.jsx
 * <Logo />
 *
 * @returns {JSX.Element} A clickable logo element with the Progrentures brand icon and name.
 *
 * @author Sanket
 * @version 1.0.0
 */
function Logo() {
  /**
   * Handles the logo click event.
   * Smoothly scrolls the page back to the top, simulating a "Home" navigation.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event object
   */
  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#home"
      className="logo"
      onClick={handleLogoClick}
      aria-label="Progrentures Solutions — Go to homepage"
    >
      {/* Progrentures "P" Icon — stylized letter in a rounded square */}
      <svg
        className="logo-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded square background */}
        <rect x="0" y="0" width="40" height="40" rx="8" fill="#1a1a2e" />

        {/* Stylised "P" letter with a modern arrow/growth motif */}
        <path
          d="M12 32V10H21C23.5 10 25.5 10.8 27 12.3C28.5 13.8 29.2 15.7 29.2 18C29.2 20.3 28.5 22.2 27 23.7C25.5 25.2 23.5 25.9 21 25.9H17.5V32H12Z"
          fill="white"
        />
        {/* Inner cutout of the P */}
        <path
          d="M17.5 14.8V21.2H20.5C21.7 21.2 22.6 20.8 23.3 20.1C24 19.4 24.3 18.5 24.3 17.5V18.5C24.3 17.5 24 16.6 23.3 15.9C22.6 15.2 21.7 14.8 20.5 14.8H17.5Z"
          fill="#1a1a2e"
        />

        {/* Small accent arrow (growth motif) */}
        <path
          d="M28 8L32 12L28 16"
          stroke="#3498db"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="22"
          y1="12"
          x2="32"
          y2="12"
          stroke="#3498db"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Company name text block */}
      <div className="logo-text-group">
        <span className="logo-text">Progrentures</span>
        <span className="logo-subtext">Solutions™</span>
      </div>
    </a>
  )
}

export default Logo
