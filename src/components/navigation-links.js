import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/about" className="navigation-links-text2 navbar-link">About</Link>
      <Link to="/features" className="navigation-links-text3 navbar-link">Features</Link>
      <Link to="/blog" className="navigation-links-text4 navbar-link">Blog</Link>
      <Link to="/pricing" className="navigation-links-text5 navbar-link">Pricing</Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavigationLinks
