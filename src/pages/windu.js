import * as React from "react"
import '../styles/style.css'
import {Link} from "gatsby";


const WinduPage = () => {
  return (
      <main className="container">
          <div className="app-header">
              <h1>🟣 Master Mace Windu</h1>
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
                  <img src="https://jedi-order.s3.eu-north-1.amazonaws.com/Mace_Windu.webp"
                       alt="Gandalf the Grey" className="gandalf-image" id="gandalf-img"/>
                  <div className="gandalf-quote">
                      "The Jedi are keepers of the peace. We are not soldiers."
                  </div>
                  <div className="gandalf-stats">
                      <h3>⚡ Windu's Powers</h3>
                      <ul className="power-list">
                          <li><strong>Vaapad (Form VII) Mastery</strong> – unique lightsaber style channeling the dark side.</li>
                          <li><strong>Shatterpoint Perception</strong> – sensing the critical weakness in any system or opponent.</li>
                          <li><strong>Force Crush</strong> – applying extreme pressure through the Force.</li>
                          <li><strong>Force Valor</strong> – increasing physical and mental abilities in battle.</li>
                          <li><strong>Battle Meditation</strong> – influencing the morale and coordination of allies.</li>
                          <li><strong>Mace Windu’s Purple Lightsaber</strong></li>
                      </ul>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default WinduPage

export const Head = () =>(
        <>
            <title>Mace Windu - Master</title>
            <meta name="description" content="Mace Windu - Master" />
        </>
    )

