import * as React from "react"
import '../styles/style.css'
import {Link} from "gatsby";


const YodaPage = () => {
  return (
      <main className="container">
          <div className="app-header">
              <h1>🟢 Grand Master Yoda</h1>
              <p>All wise, all powerful</p>
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
                  <img src="https://jedi-order.s3.eu-north-1.amazonaws.com/yoda.webp"
                       alt="Grand Master Yoda" className="gandalf-image" id="gandalf-img"/>
                  <div className="gandalf-quote">
                      "Do or do not. There is no try."
                  </div>
                  <div className="gandalf-stats">
                      <h3>⚡ Yoda's Powers</h3>
                      <ul className="power-list">
                          <li><strong>Force Vision</strong> – perception of future events and dangers.</li>
                          <li><strong>Force Deflection</strong> – deflecting attacks without a lightsaber.</li>
                          <li><strong>Telekinesis</strong> – lifting objects and enemies with the Force.</li>
                          <li><strong>Force Absorption</strong> – absorbing energy-based Force attacks.</li>
                          <li><strong>Lightsaber Mastery (Ataru Form IV)</strong> – acrobatic combat style despite his size.</li>
                          <li><strong>Yoda's Green Lightsaber</strong></li>
                      </ul>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default YodaPage

export const Head = () =>(
        <>
            <title>Yoda - Grand Master</title>
            <meta name="description" content="Yoda - Grand Master" />
        </>
    )

