import {Link} from 'react-router-dom'
import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickChangeTheme = event => {
        toggleTheme(event.target.value)
      }

      return (
        <div>
          {isDarkTheme ? (
            <nav className="nav-dark-cont">
              <ul className="nav-list-cont">
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                    alt="website logo"
                    className="nav-imgs"
                  />
                </li>
                <li className="home-about-nav">
                  <Link to="/" className="link">
                    <p className="nav-dark-heading">Home</p>
                  </Link>
                  <Link to="/about" className="link">
                    <p className="nav-dark-heading">About</p>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    testid="theme"
                    className="theme-button"
                    onClick={onClickChangeTheme}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                      alt="theme"
                      className="nav-imgs"
                    />
                  </button>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="nav-light-cont">
              <ul className="nav-list-cont">
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                    alt="website logo"
                    className="nav-imgs"
                  />
                </li>
                <li className="home-about-nav">
                  <Link to="/" className="link">
                    <p className="nav-light-heading">Home</p>
                  </Link>
                  <Link to="/about" className="link">
                    <p className="nav-light-heading">About</p>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    testid="theme"
                    className="theme-button"
                    onClick={onClickChangeTheme}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                      alt="theme"
                      className="nav-imgs"
                    />
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
