import * as React from "react"
import '../styles/style.css'
import {Link} from "gatsby";
import {useEffect, useState} from "react";


const ColomboPage = () => {
    const [colomboDate, setColomboDate] = useState(null);
    const [colomboTime, setColomboTime] = useState(null);

    const updateColomboTime = () => {
        const now = new Date();
        // Convert to Colombo time (UTC+5:30)
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const colomboTime = new Date(utc + (5.5 * 3600000));

        // Format time
        const timeString = colomboTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Format date
        const dateString = colomboTime.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        setColomboTime(timeString);
        setColomboDate(dateString);
    }

    useEffect(() => {
        const interval = setInterval(updateColomboTime, 1000)

        // Fix 2: Clear interval on component unmount
        return () => clearInterval(interval)
    }, []);


  return (
      <main className="container">
          <div className="app-header">
              <h1>⚪ Jedi Temple (Coruscant)</h1>
              <p>The Jedi Temple remains a symbol of both hope and tragedy in galactic history.</p>
          </div>
          <div className="navigation">
              <Link to="/" className="nav-button active">🏠 Home</Link>
              <Link to="/temple" className="nav-button">The Jedi Temple</Link>
              <Link to="/yoda" className="nav-button">Grand Master Yoda</Link>
              <Link to="/obiwan" className="nav-button">Master Obi-wan</Link>
              <Link to="/windu" className="nav-button">Master Windu</Link>
          </div>
          <div className="content-area">
              <div className="colombo-container">
                  <div className="time-display">
                      <h2>Galactic City, Coruscant</h2>
                      <div className="current-time" id="colombo-time">{colomboTime? colomboTime : <>Loading...</>}</div>
                      <div className="timezone-info">Coruscant/Galactic City (UTC+5:30)</div>
                      <div className="date-info" id="colombo-date">{colomboDate ? colomboDate : <>Loading...</>}</div>
                  </div>

                  <div className="colombo-info">
                      <h3>🏝️ About Coruscant</h3>
                      <div className="info-grid">
                          <div className="info-item">
                              <span className="info-icon">🪐</span>
                              <span>Sector: Coruscant Subsector, Coruscant Systemn</span>
                          </div>
                          <div className="info-item">
                              <span className="info-icon">🏛️</span>
                              <span>Capital: Galactic City</span>
                          </div>
                          <div className="info-item">
                              <span className="info-icon">👥</span>
                              <span>Population: Approx. 1 Trillion Sentients</span>
                          </div>
                          <div className="info-item">
                              <span className="info-icon">🏢</span>
                              <span>Entirely Covered in Cityscape</span>
                          </div>
                          <div className="info-item">
                              <span className="info-icon">🌊</span>
                              <span>Headquarters of the Jedi Order</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default ColomboPage

export const Head = () => (
    <>
        <title>Galactic City - Coruscant</title>
        <meta name="description" content="Current time in Galactic City, Coruscant" />
    </>
)
