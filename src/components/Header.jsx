import React, { useState, useCallback, useEffect, memo } from 'react'
import Logo from './Logo'
import '../styles/Header.css'

/**
 * Header Component - Sanket's Primary Task
 *
 * @component
 * @description A professional, fully-responsive Header/Navigation component.
 * Features a branded logo, horizontal navigation menu on desktop, and a
 * hamburger toggle menu on mobile/tablet (≤768px). The header becomes
 * sticky after scrolling past 50px, gaining a subtle backdrop blur effect.
 *
 * Key Features:
 * - Responsive navigation with hamburger menu toggle (mobile)
 * - Smooth scroll navigation to page sections
 * - Sticky header with scroll-based styling
 * - Keyboard accessible (Enter/Space to toggle menu, Escape to close)
 * - Animated underline hover effects on nav links
 * - Click-outside and resize auto-close for mobile menu
 *
 * @example
 * // Used inside App.jsx
 * <Header />
 *
 * @returns {JSX.Element} The rendered Header component.
 *
 * @author Sanket
 * @version 1.0.0
 */

/**
 * Navigation items configuration.
 * Defined outside the component to avoid re-creation on every render,
 * improving performance by eliminating unnecessary object allocations.
 *
 * @constant
 * @type {Array<{id: number, label: string, href: string}>}
 */
const NAV_ITEMS = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'Services', href: '#services' },
  { id: 4, label: 'Contact', href: '#contact' },
]

/**
 * Scroll offset in pixels after which the header gains a "scrolled" style.
 * @constant
 * @type {number}
 */
const SCROLL_THRESHOLD = 50

function Header() {
  /**
   * State: whether the mobile navigation menu is currently open.
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * State: whether the user has scrolled past SCROLL_THRESHOLD.
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isScrolled, setIsScrolled] = useState(false)

  /**
   * State: the index of the currently active navigation item (based on hash).
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * Toggles the mobile menu open/closed.
   * Wrapped in useCallback to maintain referential equality across renders.
   */
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  /**
   * Closes the mobile menu. Used when a nav link is clicked or
   * when the user presses Escape.
   */
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  /**
   * Handles navigation link clicks.
   * Sets the active index for visual highlighting, closes the mobile menu,
   * and performs a smooth scroll to the target section.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event
   * @param {number} index - The index of the clicked nav item
   */
  const handleNavClick = useCallback((e, index) => {
    e.preventDefault()
    setActiveIndex(index)
    closeMenu()

    // Smooth scroll to the target section if it exists
    const targetId = NAV_ITEMS[index].href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // If no matching element, scroll to top for "Home"
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [closeMenu])

  /**
   * Handles keyboard events on the hamburger button.
   * Supports Enter, Space (toggle), and Escape (close).
   *
   * @param {React.KeyboardEvent<HTMLButtonElement>} e - The keyboard event
   */
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeMenu()
    }
  }, [closeMenu])

  /**
   * Effect: Listens for scroll events to toggle the "scrolled" header style.
   * Uses a passive event listener for better scroll performance.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Effect: Closes the mobile menu when the viewport is resized above 768px.
   * Prevents the menu from staying open when switching from mobile to desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMenu])

  /**
   * Effect: Closes the mobile menu when clicking anywhere outside the header.
   * Only active when the menu is open.
   */
  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (e) => {
      const header = document.querySelector('.header')
      if (header && !header.contains(e.target)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen, closeMenu])

  /**
   * Effect: Prevents body scrolling when the mobile menu is open.
   * Restores scroll on cleanup to avoid locking the page.
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  /**
   * Builds the CSS class string for the header element dynamically based on
   * the current scroll position and menu state.
   *
   * @type {string}
   */
  const headerClassName = [
    'header',
    isScrolled ? 'header--scrolled' : '',
    isMenuOpen ? 'header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName} id="header" role="banner">
      <div className="header__container">
        {/* Logo / Branding */}
        <Logo />

        {/* Hamburger Menu Button (mobile only) */}
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          type="button"
          id="menu-toggle"
        >
          <span className="hamburger__line" aria-hidden="true"></span>
          <span className="hamburger__line" aria-hidden="true"></span>
          <span className="hamburger__line" aria-hidden="true"></span>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
          id="main-navigation"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="nav__list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id} className="nav__item">
                <a
                  href={item.href}
                  className={`nav__link ${activeIndex === index ? 'nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, index)}
                  aria-current={activeIndex === index ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile overlay backdrop */}
      {isMenuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default memo(Header)
