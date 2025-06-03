import * as React from "react"
import '../styles/style.css'
import {Link} from "gatsby";


const ObiwanPage = () => {
  return (
      <main className="container">
          <div className="app-header">
              <h1>🔵 Master Obi-Wan Kenobi</h1>
              <p>Master of the Jedi Order</p>
          </div>
          <div className="navigation">
              <Link to="/" className="nav-button active">🏠 Home</Link>
              <Link to="/temple" className="nav-button">The Jedi Temple</Link>
              <Link to="/yoda" className="nav-button">Grand Master Yoda</Link>
              <Link to="/obiwan" className="nav-button">Master Obi-wan</Link>
              <Link to="/windu" className="nav-button">Master Windu</Link>
          </div>
          <div className="content-area">
              <div className="gandalf-container">
                  <img src="https://jedi-order.s3.eu-north-1.amazonaws.com/obiwan.webp"
                       alt="Gandalf the Grey" className="gandalf-image" id="gandalf-img"/>
                  <div className="gandalf-quote">
                      "If you strike me down, I shall become more powerful than you can possibly imagine."
                  </div>
                  <div className="gandalf-stats">
                      <h3>⚡ Obi-Wan's Powers</h3>
                      <ul className="power-list">
                          <li><strong>Mind Trick</strong> – influencing and confusing weaker minds.</li>
                          <li><strong>Soresu (Form III) Mastery</strong> – defensive lightsaber combat technique.</li>
                          <li><strong>Force Push / Pull</strong> – manipulating enemies or objects from a distance.</li>
                          <li><strong>Precognition</strong> – sensing danger before it happens.</li>
                          <li><strong>Stealth and Espionage</strong> – adept at blending in and collecting intelligence.</li>
                          <li><strong>Obi-Wan’s Blue Lightsaber</strong></li>
                      </ul>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default ObiwanPage

export const Head = () =>(
        <>
            <title>Obi-Wan Kenobi - Master</title>
            <meta name="description" content="Obi-Wan Kenobi - Master" />
        </>
    )

