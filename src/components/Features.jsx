import React from 'react'
import '../styles/Features.css'

/**
 * TASK FOR INTERN 2 (Git Practice - Features Component)
 * 
 * TODO: Complete this Features/Services section
 * 
 * Requirements:
 * 1. Create a features section with at least 3 feature cards
 * 2. Each card should have:
 *    - A title (e.g., "Fast", "Reliable", "Scalable")
 *    - A description (2-3 lines)
 *    - An icon or emoji (🚀, ⚡, 🛡️, etc.)
 * 3. Style the cards with:
 *    - Background: #f8f9fa
 *    - Border: 1px solid #dee2e6
 *    - Padding: 2rem
 *    - Border-radius: 8px
 *    - Shadow: 0 2px 4px rgba(0,0,0,0.1)
 * 4. Create a grid layout (3 columns on desktop, 1 column on mobile)
 * 5. Add hover effects (scale up 1.05 on hover, smooth transition)
 * 
 * INSTRUCTIONS:
 * - Create a new branch: git checkout -b feature/features-section
 * - Implement the component in this file
 * - Commit your changes: git commit -m "feat: Add features section"
 * - Create a Pull Request on GitHub
 * - Ask for code review
 */

function Features() {
  // TODO: Replace this with actual features data
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Lightning-fast load times and smooth interactions'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Reliable',
      description: 'Delivers consistent and stable performance across all devices and network conditions.'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Scalable',
      description: 'Built to efficiently handle increasing users and workloads without performance issues.'
    }
  ]

  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            {/* TODO: Style and refactor this feature card component */}
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
