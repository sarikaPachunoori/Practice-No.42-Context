import {Link} from 'react-router-dom'
import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="home-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-img"
              />
              <h1 className="home-dark">Home</h1>
            </div>
          ) : (
            <div className="home-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-img"
              />
              <Link to="/" className="link">
                <h1 className="home-light">Home</h1>
              </Link>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
