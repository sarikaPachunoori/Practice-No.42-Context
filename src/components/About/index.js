import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            {isDarkTheme ? (
              <div className="home-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="home-img"
                />
                <h1 className="home-dark">About</h1>
              </div>
            ) : (
              <div className="home-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="home-img"
                />
                <h1 className="home-light">About</h1>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
