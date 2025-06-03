import * as React from "react"
import '../styles/style.css'
import {Link} from "gatsby";


const IndexPage = () => {
  return (
      <main className="container">
          <div className="app-header">
              <h1>Jedi Order</h1>
              <p>Explore the wisdom and teachings of the Jedi Order, may the force be with you!</p>
          </div>
          <div className="navigation">
              <Link to="/" className="nav-button active">🏠 Home</Link>
              <Link to="/temple" className="nav-button">The Jedi Temple</Link>
              <Link to="/yoda" className="nav-button">Grand Master Yoda</Link>
              <Link to="/obiwan" className="nav-button">Master Obi-wan</Link>
              <Link to="/windu" className="nav-button">Master Windu</Link>
          </div>
          <div className="content-area">
              <div className="welcome-message">
                  <h2>Welcome to the Jedi Order</h2>
                  <p>A revered group of peacekeepers, the Jedi Order were united by their connection to the Force and
                      served as defenders of justice throughout the Galactic Republic. However, their era came to a
                      tragic close as a result of a sinister scheme orchestrated by the Sith Lord, Darth Sidious.</p>
                  <br/>
                  <div className="feature-cards">
                      <div className="feature-card">
                          <h3>⚪ Visit The Temple</h3>
                          <p>The Jedi Temple was the spiritual and operational heart of the Jedi Order for millennia.</p>
                          <Link to="/temple" className="feature-link">Enter The Temple</Link>
                      </div>
                      <div className="feature-card">
                          <h3>🟢️ Visit Grand Master Yoda</h3>
                          <p>Immense wisdom and profound connection to the force</p>
                          <Link to="/yoda" className="feature-link">Enter Yoda's Realm</Link>
                      </div>
                      <div className="feature-card">
                          <h3>🔵️ Visit Master Obi-Wan</h3>
                          <p>Wisdom, combat skills and dedication to the order</p>
                          <Link to="/obiwan" className="feature-link">Enter Obi-Wan's Realm</Link>
                      </div>
                      <div className="feature-card">
                          <h3>🟣️ Visit Master Windu</h3>
                          <p>Great mastery of the lightsaber, powerful connection to the force especially, Vaapad</p>
                          <Link to="/windu" className="feature-link">Enter Windu's Realm</Link>
                      </div>
                  </div>
              </div>
          </div>
      </main>
)
}

export default IndexPage

export const Head = () => (
        <>
            <title>Home Page</title>
            <meta name="description" content="The Jedi Order App" />
        </>
    )

