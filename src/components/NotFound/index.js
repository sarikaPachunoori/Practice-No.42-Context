import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-dark-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className="not-found-dark-heading">Lost Your Way?</h1>
              <p className="not-found-dark-para">
                We cannot seem to find the page you are looking for
              </p>
            </div>
          ) : (
            <div className="not-found-light-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className="not-found-light-heading">Lost Your Way?</h1>
              <p className="not-found-light-para">
                We cannot seem to find the page you are looking for
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
